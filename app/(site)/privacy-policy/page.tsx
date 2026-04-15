"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

const headingClass =
  "font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#34323A] tracking-tight mt-14 mb-5 scroll-mt-24";
const subHeadingClass =
  "font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#34323A] mt-10 mb-4";
const subSubHeadingClass =
  "text-base md:text-lg font-medium text-[#34323A] mt-8 mb-3";
const paragraphClass =
  "text-base md:text-[17px] text-[#34323A]/80 leading-relaxed mb-5";
const listClass = "list-disc pl-6 space-y-2 mb-6 text-[#34323A]/80";
const linkClass =
  "text-[#A12F63] underline underline-offset-4 hover:text-[#5A1735] transition-colors";
const tableClass =
  "w-full text-sm md:text-[15px] border-collapse mb-6 border border-[#EFEDEA]";
const thClass =
  "text-left font-medium bg-[#F7F6F5] text-[#34323A] px-4 py-3 border border-[#EFEDEA]";
const tdClass =
  "px-4 py-3 text-[#34323A]/80 border border-[#EFEDEA] align-top";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-[#F7F6F5] pt-32 pb-16 md:pt-40 md:pb-20">
        <Container size="default">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#BFA27A] font-medium text-xs uppercase tracking-[0.25em]">
                Legal
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[#34323A] tracking-tight">
                Privacy Policy
              </h1>
              <p className="mt-5 text-sm text-[#34323A]/60">
                Effective date: 29 March 2026 &nbsp;|&nbsp; Version: 1.1
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <article className="bg-white pb-24 md:pb-32">
        <Container size="default">
          <div className="max-w-3xl mx-auto pt-12 md:pt-16">
            <h2 className={headingClass}>1. Introduction</h2>
            <p className={paragraphClass}>
              Significanz (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to
              protecting your personal data and your right to privacy. This Privacy Policy explains
              what information we collect when you visit our website (
              <a href="https://www.significanz.dk" className={linkClass}>
                www.significanz.dk
              </a>
              ), how we use it, and what rights you have in relation to it.
            </p>
            <p className={paragraphClass}>
              We process personal data in accordance with the EU General Data Protection Regulation
              (GDPR) (Regulation (EU) 2016/679) and the Danish Data Protection Act (
              <em>Databeskyttelsesloven</em>).
            </p>

            <h2 className={headingClass}>2. Data Controller</h2>
            <p className={paragraphClass}>
              The data controller responsible for your personal data is:
            </p>
            <table className={tableClass}>
              <tbody>
                <tr>
                  <th className={thClass}>Company name</th>
                  <td className={tdClass}>Significanz</td>
                </tr>
                <tr>
                  <th className={thClass}>CVR number</th>
                  <td className={tdClass}>28392540</td>
                </tr>
                <tr>
                  <th className={thClass}>Registered address</th>
                  <td className={tdClass}>C/O Madsen, Gudmevej 11, 2770 Kastrup, Denmark</td>
                </tr>
                <tr>
                  <th className={thClass}>Email</th>
                  <td className={tdClass}>
                    <a href="mailto:welcome@significanz.dk" className={linkClass}>
                      welcome@significanz.dk
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className={thClass}>Data protection contact</th>
                  <td className={tdClass}>
                    <a href="mailto:welcome@significanz.dk" className={linkClass}>
                      welcome@significanz.dk
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className={thClass}>Website</th>
                  <td className={tdClass}>
                    <a href="https://www.significanz.dk" className={linkClass}>
                      www.significanz.dk
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className={headingClass}>3. What Personal Data We Collect</h2>
            <p className={paragraphClass}>We collect personal data in the following situations:</p>

            <h3 className={subHeadingClass}>3.1 Contact Form Submissions</h3>
            <p className={paragraphClass}>
              When you reach out to us via our website contact form (powered by{" "}
              <strong>Formspark</strong>, a Belgian form-backend service) or by emailing{" "}
              <a href="mailto:welcome@significanz.dk" className={linkClass}>
                welcome@significanz.dk
              </a>
              , we collect:
            </p>
            <ul className={listClass}>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Any personal information you choose to include in your message</li>
            </ul>
            <p className={paragraphClass}>
              Your contact form data is processed by Formspark (Trampoline Software SRL, Belgium),
              which acts as a data processor on our behalf. Submitted data is stored on servers in{" "}
              <strong>Ireland (EU)</strong>. No personal data is transferred outside the European
              Economic Area for form submissions. See Formspark&apos;s privacy policy at:{" "}
              <a
                href="https://formspark.io/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                formspark.io/legal/privacy-policy
              </a>
              .
            </p>
            <p className={paragraphClass}>
              <strong>Legal basis:</strong> Article 6(1)(f) GDPR — legitimate interests (responding
              to your enquiry and maintaining our business relationship). Where we enter into a
              contract with you, we will rely on Article 6(1)(b) GDPR.
            </p>

            <h3 className={subHeadingClass}>3.2 Cookies and Website Analytics</h3>

            <h4 className={subSubHeadingClass}>a) Vercel Web Analytics (cookie-free)</h4>
            <p className={paragraphClass}>
              Our website is hosted on <strong>Vercel</strong> and uses{" "}
              <strong>Vercel Web Analytics</strong>, a privacy-focused analytics tool that does{" "}
              <strong>not use cookies</strong> and does{" "}
              <strong>not collect personally identifiable information</strong>. Visitors are
              identified by an anonymised hash generated from each incoming request, which is
              automatically discarded after 24 hours and cannot be used to track visitors across
              websites or days.
            </p>
            <p className={paragraphClass}>
              Vercel Web Analytics collects the following anonymised, aggregated data:
            </p>
            <ul className={listClass}>
              <li>Pages visited and page views</li>
              <li>Referring website</li>
              <li>Country and general geographic region (derived from IP, but IP is not stored)</li>
              <li>Browser type and operating system</li>
              <li>Device type</li>
            </ul>
            <p className={paragraphClass}>
              Because Vercel Web Analytics does not use cookies and does not collect personal data,
              no cookie consent is required for this service under the ePrivacy Directive or GDPR.
            </p>
            <p className={paragraphClass}>
              <strong>Legal basis:</strong> Article 6(1)(f) GDPR — legitimate interests
              (understanding how our website is used). Since no personal data is collected, the
              processing impact on data subjects is minimal.
            </p>

            <h4 className={subSubHeadingClass}>b) Google Analytics 4 (requires consent)</h4>
            <p className={paragraphClass}>
              We also use <strong>Google Analytics 4 (GA4)</strong>, provided by Google Ireland
              Limited (Gordon House, Barrow Street, Dublin 4, Ireland), to gain deeper insights into
              how visitors use our website. GA4 uses first-party cookies to distinguish users and
              maintain session state.
            </p>
            <p className={paragraphClass}>
              When you give consent via our cookie consent banner, Google Analytics collects the
              following data:
            </p>
            <ul className={listClass}>
              <li>IP address (automatically truncated/anonymised by GA4)</li>
              <li>Pages visited, time spent on each page, and navigation path</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Referring website or search query</li>
              <li>
                Approximate geographic location (city/country level, derived from anonymised IP)
              </li>
            </ul>
            <p className={paragraphClass}>Google Analytics 4 sets the following first-party cookies:</p>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Cookie name</th>
                  <th className={thClass}>Purpose</th>
                  <th className={thClass}>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>
                    <code>_ga</code>
                  </td>
                  <td className={tdClass}>
                    Distinguishes unique visitors with a randomly generated ID
                  </td>
                  <td className={tdClass}>2 years</td>
                </tr>
                <tr>
                  <td className={tdClass}>
                    <code>_ga_&lt;container-id&gt;</code>
                  </td>
                  <td className={tdClass}>Persists session state</td>
                  <td className={tdClass}>2 years</td>
                </tr>
              </tbody>
            </table>
            <p className={paragraphClass}>
              Google acts as a data processor on our behalf. Data may be transferred to the United
              States, where Google LLC is certified under the EU–U.S. Data Privacy Framework. We
              have accepted Google&apos;s Data Processing Amendment, which includes Standard
              Contractual Clauses (SCCs) as an additional safeguard.
            </p>
            <p className={paragraphClass}>
              We have configured GA4 with the following privacy settings:
            </p>
            <ul className={listClass}>
              <li>IP anonymisation is enabled (default in GA4)</li>
              <li>Google Signals and advertising features are disabled</li>
              <li>Data retention is set to the minimum available period (2 months)</li>
              <li>Data sharing with Google for benchmarking or other purposes is disabled</li>
            </ul>
            <p className={paragraphClass}>
              Google Analytics is{" "}
              <strong>only activated after you provide explicit consent</strong> via our cookie
              consent banner. If you do not consent, or if you withdraw consent, no GA4 cookies will
              be set and no data will be sent to Google.
            </p>
            <p className={paragraphClass}>
              <strong>Legal basis:</strong> Article 6(1)(a) GDPR — your consent, given via our
              cookie consent banner. You may withdraw consent at any time by adjusting your cookie
              preferences or your browser settings.
            </p>

            <h2 className={headingClass}>4. Cookies</h2>
            <p className={paragraphClass}>We use the following categories of cookies on our website:</p>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Category</th>
                  <th className={thClass}>Purpose</th>
                  <th className={thClass}>Consent required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>Strictly necessary</td>
                  <td className={tdClass}>
                    Enable core site functionality (e.g. security, load balancing)
                  </td>
                  <td className={tdClass}>No — always active</td>
                </tr>
                <tr>
                  <td className={tdClass}>Analytics (Google Analytics 4)</td>
                  <td className={tdClass}>
                    Understand how visitors use the site, track page views and sessions
                  </td>
                  <td className={tdClass}>Yes — via cookie consent banner</td>
                </tr>
              </tbody>
            </table>
            <p className={paragraphClass}>
              <strong>Note:</strong> Vercel Web Analytics does not use cookies and operates
              independently of your cookie preferences.
            </p>
            <p className={paragraphClass}>
              You can manage or delete cookies at any time through your browser settings or by using
              our cookie preferences tool. If you wish to opt out of Google Analytics specifically,
              you can install the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Google Analytics Opt-Out Browser Add-on
              </a>
              .
            </p>

            <h2 className={headingClass}>5. How We Use Your Personal Data</h2>
            <p className={paragraphClass}>We use the data we collect for the following purposes:</p>
            <ul className={listClass}>
              <li>
                Responding to your enquiries and providing information about our consulting services
              </li>
              <li>Managing our client and prospective client relationships</li>
              <li>
                Improving our website performance and user experience (via anonymised and consented
                analytics)
              </li>
              <li>Complying with our legal obligations</li>
              <li>
                Pursuing our legitimate business interests (e.g. understanding how our website is
                used)
              </li>
            </ul>
            <p className={paragraphClass}>
              We do not use your personal data for automated decision-making or profiling as defined
              under Article 22 GDPR.
            </p>

            <h2 className={headingClass}>6. Data Sharing and Third Parties</h2>
            <p className={paragraphClass}>
              We do not sell, rent, or trade your personal data. We share data with the following
              carefully selected third-party service providers who assist us in operating our
              website and running our business:
            </p>
            <div className="overflow-x-auto">
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Service provider</th>
                    <th className={thClass}>Purpose</th>
                    <th className={thClass}>Data location / safeguards</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Vercel, Inc. (USA)</td>
                    <td className={tdClass}>
                      Website hosting, infrastructure, and privacy-friendly web analytics (no
                      personal data collected)
                    </td>
                    <td className={tdClass}>
                      USA (AWS, Azure, GCP). EU–U.S. Data Privacy Framework + SCCs.
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>GitHub, Inc. (USA)</td>
                    <td className={tdClass}>Source code hosting and deployment pipeline</td>
                    <td className={tdClass}>USA. EU–U.S. Data Privacy Framework + SCCs.</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Formspark / Trampoline Software SRL (Belgium)</td>
                    <td className={tdClass}>
                      Contact form processing — receives and forwards form submissions
                    </td>
                    <td className={tdClass}>Ireland (EU). No data transfer outside EEA.</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Google Ireland Ltd / Google LLC</td>
                    <td className={tdClass}>
                      Website analytics via Google Analytics 4 — only activated with user consent
                    </td>
                    <td className={tdClass}>
                      EU/USA. EU–U.S. Data Privacy Framework + SCCs + Data Processing Amendment.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={paragraphClass}>
              All third-party processors are bound by data processing agreements and are only
              permitted to process your data on our documented instructions, in accordance with
              Article 28 GDPR.
            </p>
            <p className={paragraphClass}>
              Where any transfer of personal data occurs outside the European Economic Area (EEA),
              we ensure adequate safeguards are in place, such as{" "}
              <strong>Standard Contractual Clauses (SCCs)</strong> approved by the European
              Commission, or reliance on the{" "}
              <strong>EU–U.S. Data Privacy Framework</strong> where applicable.
            </p>

            <h2 className={headingClass}>7. How Long We Keep Your Data</h2>
            <p className={paragraphClass}>
              We retain personal data only for as long as necessary for the purposes described in
              this policy:
            </p>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Data type</th>
                  <th className={thClass}>Retention period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>Contact form enquiries</td>
                  <td className={tdClass}>
                    Up to 2 years from last contact, unless a client relationship is established
                  </td>
                </tr>
                <tr>
                  <td className={tdClass}>Client engagement records</td>
                  <td className={tdClass}>
                    5 years following end of engagement (Danish bookkeeping requirements)
                  </td>
                </tr>
                <tr>
                  <td className={tdClass}>Google Analytics data</td>
                  <td className={tdClass}>
                    Minimum retention period (2 months for user-level data); aggregated reports
                    remain available
                  </td>
                </tr>
                <tr>
                  <td className={tdClass}>Vercel Web Analytics data</td>
                  <td className={tdClass}>
                    Anonymised; visitor hash discarded after 24 hours; only aggregated data retained
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className={headingClass}>8. Your Rights Under GDPR</h2>
            <p className={paragraphClass}>
              As a data subject under GDPR, you have the following rights:
            </p>
            <ul className={listClass}>
              <li>
                <strong>Right of access</strong> (Article 15) — you may request a copy of the
                personal data we hold about you.
              </li>
              <li>
                <strong>Right to rectification</strong> (Article 16) — you may ask us to correct
                inaccurate or incomplete data.
              </li>
              <li>
                <strong>Right to erasure</strong> (Article 17) — you may request deletion of your
                data where there is no overriding legal basis for us to retain it.
              </li>
              <li>
                <strong>Right to restriction of processing</strong> (Article 18) — you may ask us
                to limit how we use your data in certain circumstances.
              </li>
              <li>
                <strong>Right to data portability</strong> (Article 20) — where processing is based
                on consent or contract, you may ask us to provide your data in a machine-readable
                format.
              </li>
              <li>
                <strong>Right to object</strong> (Article 21) — you may object to processing based
                on our legitimate interests.
              </li>
              <li>
                <strong>Right to withdraw consent</strong> — where we rely on consent (e.g. for
                analytics cookies), you may withdraw it at any time without affecting the lawfulness
                of prior processing. You can do this via our cookie preferences tool or by
                adjusting your browser settings.
              </li>
            </ul>
            <p className={paragraphClass}>
              To exercise any of these rights, please contact us at:{" "}
              <a href="mailto:welcome@significanz.dk" className={linkClass}>
                <strong>welcome@significanz.dk</strong>
              </a>
              .
            </p>
            <p className={paragraphClass}>
              We will respond to your request within 30 days. We may ask you to verify your identity
              before processing your request.
            </p>

            <h2 className={headingClass}>9. Right to Lodge a Complaint</h2>
            <p className={paragraphClass}>
              If you believe we have not handled your personal data in accordance with applicable
              law, you have the right to lodge a complaint with the Danish Data Protection Authority
              (Datatilsynet):
            </p>
            <table className={tableClass}>
              <tbody>
                <tr>
                  <th className={thClass}>Authority</th>
                  <td className={tdClass}>Datatilsynet (Danish Data Protection Authority)</td>
                </tr>
                <tr>
                  <th className={thClass}>Website</th>
                  <td className={tdClass}>
                    <a
                      href="https://www.datatilsynet.dk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      www.datatilsynet.dk
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className={thClass}>Email</th>
                  <td className={tdClass}>
                    <a href="mailto:dt@datatilsynet.dk" className={linkClass}>
                      dt@datatilsynet.dk
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className={thClass}>Phone</th>
                  <td className={tdClass}>+45 33 19 32 00</td>
                </tr>
                <tr>
                  <th className={thClass}>Address</th>
                  <td className={tdClass}>Carl Jacobsens Vej 35, 2500 Valby, Denmark</td>
                </tr>
              </tbody>
            </table>

            <h2 className={headingClass}>10. Data Security</h2>
            <p className={paragraphClass}>
              We take the security of your personal data seriously. We implement appropriate
              technical and organisational measures to protect your information against unauthorised
              access, accidental loss, destruction, or disclosure, in accordance with Article 32
              GDPR.
            </p>
            <p className={paragraphClass}>These measures include:</p>
            <ul className={listClass}>
              <li>All data in transit is encrypted via HTTPS/TLS</li>
              <li>
                Our hosting provider (Vercel) maintains SOC 2 Type 2, ISO 27001, and TISAX
                certifications
              </li>
              <li>
                Our form processor (Formspark) stores data in the EU (Ireland) and encrypts data at
                rest
              </li>
              <li>
                Google Analytics data is protected by Google&apos;s enterprise-grade security
                infrastructure
              </li>
              <li>
                Access to administrative systems is restricted and protected by multi-factor
                authentication
              </li>
            </ul>
            <p className={paragraphClass}>
              However, no method of electronic transmission or storage is 100% secure. If you have
              reason to believe your interaction with us is no longer secure, please notify us
              immediately at{" "}
              <a href="mailto:welcome@significanz.dk" className={linkClass}>
                welcome@significanz.dk
              </a>
              .
            </p>

            <h2 className={headingClass}>11. Updates to This Policy</h2>
            <p className={paragraphClass}>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or applicable law. The effective date at the top of this document will
              always indicate when the most recent revision was made. We encourage you to review
              this page periodically.
            </p>
            <p className={paragraphClass}>
              Where changes are material, we will take reasonable steps to notify you.
            </p>

            <h2 className={headingClass}>12. Contact Us</h2>
            <p className={paragraphClass}>
              For any questions, concerns, or requests relating to this Privacy Policy or your
              personal data, please contact us:
            </p>
            <table className={tableClass}>
              <tbody>
                <tr>
                  <th className={thClass}>Email</th>
                  <td className={tdClass}>
                    <a href="mailto:welcome@significanz.dk" className={linkClass}>
                      welcome@significanz.dk
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className={thClass}>Data protection contact</th>
                  <td className={tdClass}>
                    <a href="mailto:welcome@significanz.dk" className={linkClass}>
                      welcome@significanz.dk
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className={thClass}>Website</th>
                  <td className={tdClass}>
                    <a href="https://www.significanz.dk" className={linkClass}>
                      www.significanz.dk
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className={thClass}>Location</th>
                  <td className={tdClass}>Copenhagen, Denmark</td>
                </tr>
              </tbody>
            </table>

            <hr className="mt-12 mb-6 border-[#EFEDEA]" />
            <p className="text-xs text-[#34323A]/50 text-center">
              © 2026 Significanz. All rights reserved. &nbsp;|&nbsp; www.significanz.dk
              &nbsp;|&nbsp; welcome@significanz.dk
            </p>
          </div>
        </Container>
      </article>
    </>
  );
}
