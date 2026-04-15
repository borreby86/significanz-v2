export type ContactFormPayload = {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
};

export async function submitContactForm(payload: ContactFormPayload): Promise<Response> {
  const formId = process.env.NEXT_PUBLIC_FORMSPARK_ID;
  if (!formId) {
    throw new Error("NEXT_PUBLIC_FORMSPARK_ID is not configured");
  }

  return fetch(`https://submit-form.com/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      company: payload.company || "",
      service: payload.service || "",
      message: payload.message,
      _email: {
        from_name: payload.name,
        subject: `New contact from ${payload.name}`,
      },
      _replyto: payload.email,
    }),
  });
}
