import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate input
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, company, message } = result.data;

    // Check if Resend is configured
    if (!resend) {
      console.log('Contact form submission (Resend not configured):', { name, email, company, message });
      return NextResponse.json(
        { success: true, messageId: 'demo-mode' },
        { status: 200 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Significanz Website <noreply@significanz.dk>',
      to: [process.env.CONTACT_EMAIL || 'welcome@significanz.dk'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #C41E3A; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 120px;">Name:</td>
              <td style="padding: 10px 0; color: #000;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666;">Email:</td>
              <td style="padding: 10px 0; color: #000;">
                <a href="mailto:${email}" style="color: #C41E3A;">${email}</a>
              </td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: #666;">Company:</td>
              <td style="padding: 10px 0; color: #000;">${company}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 30px;">
            <h3 style="color: #000; margin-bottom: 10px;">Message:</h3>
            <div style="background: #f9f9f9; padding: 20px; border-left: 3px solid #C41E3A;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <p style="margin-top: 30px; color: #999; font-size: 12px;">
            This message was sent from the Significanz website contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}

Message:
${message}

---
This message was sent from the Significanz website contact form.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
