import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How SecureTheCloud handles information submitted through securethecloud.dev and related website interactions.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#030711]">
      <section className="border-b border-white/10">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Legal / Privacy
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-6 text-base leading-7 text-slate-300">
              This policy explains how SecureTheCloud handles information
              submitted through securethecloud.dev and related website
              interactions.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Last updated: August 18, 2026
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl space-y-10 text-sm leading-7 text-slate-400">
            <section>
              <h2 className="text-xl font-semibold text-white">
                Information you provide
              </h2>
              <p className="mt-4">
                SecureTheCloud may receive information you choose to provide
                through consultation, recruiting, or other contact forms. This
                may include your name, business email address, company, role,
                project context, consultation interests, timeline, and other
                information you include in your message.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Consultation requests
              </h2>
              <p className="mt-4">
                Consultation requests submitted through this website are
                processed using Formspree, a third-party form-processing
                service. Information entered into the consultation form is
                transmitted to that service so SecureTheCloud can receive and
                respond to the request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Recruiting information
              </h2>
              <p className="mt-4">
                Career-interest information is handled separately from general
                consultation requests. Additional details about candidate
                information and recruiting materials are available in the{" "}
                <Link
                  href="/careers/privacy"
                  className="font-medium text-cyan-300 hover:text-cyan-200"
                >
                  Careers Privacy Notice
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                How information is used
              </h2>
              <p className="mt-4">
                Information submitted through the website may be used to
                respond to inquiries, understand requested services, prepare
                for architecture discussions, evaluate recruiting interest,
                maintain appropriate business records, and protect the website
                and its users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Information you should not submit
              </h2>
              <p className="mt-4">
                Do not submit passwords, authentication credentials, private
                keys, Social Security numbers, financial account credentials,
                protected health information, production secrets, or other
                highly sensitive information through public website forms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Third-party services and external links
              </h2>
              <p className="mt-4">
                The website may link to third-party services such as Formspree,
                LinkedIn, YouTube, X, and GitHub. Those services operate under
                their own privacy practices and terms. SecureTheCloud does not
                control their independent processing activities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Cookies and browser storage
              </h2>
              <p className="mt-4">
                Information about cookies and similar browser technologies used
                by this website is provided in the{" "}
                <Link
                  href="/cookies"
                  className="font-medium text-cyan-300 hover:text-cyan-200"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Data retention
              </h2>
              <p className="mt-4">
                SecureTheCloud aims to retain submitted information only for as
                long as reasonably necessary for the business purpose for which
                it was provided, operational follow-up, security, or applicable
                recordkeeping requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Contact
              </h2>
              <p className="mt-4">
                Questions about this policy or requests concerning information
                submitted through the website may be sent to{" "}
                <a
                  href={`mailto:${siteConfig.contact.salesEmail}`}
                  className="font-medium text-cyan-300 hover:text-cyan-200"
                >
                  {siteConfig.contact.salesEmail}
                </a>
                .
              </p>
            </section>

            <p className="border-t border-white/10 pt-8 text-xs leading-6 text-slate-500">
              This website privacy policy describes current public-site
              practices. It does not replace contractual privacy terms or
              customer-specific data-processing agreements that may apply to a
              separate engagement.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
