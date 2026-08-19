import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description:
    "Terms governing access to and use of the SecureTheCloud public website.",
  path: "/terms",
});

export default function TermsOfUsePage() {
  return (
    <main className="bg-[#030711]">
      <section className="border-b border-white/10">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Legal / Terms
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Terms of Use
            </h1>

            <p className="mt-6 text-base leading-7 text-slate-300">
              These terms govern access to and use of the public
              SecureTheCloud website.
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
                Website purpose
              </h2>
              <p className="mt-4">
                securethecloud.dev provides information about SecureTheCloud,
                its architecture and advisory services, technical perspectives,
                evidence resources, careers, and related business activities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                No professional engagement through website access
              </h2>
              <p className="mt-4">
                Accessing this website, reviewing its technical materials, or
                submitting an inquiry does not by itself create a consulting,
                employment, partnership, fiduciary, attorney-client, or other
                professional relationship with SecureTheCloud.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Informational content
              </h2>
              <p className="mt-4">
                Website content is provided for general informational and
                educational purposes. Architecture patterns, security
                perspectives, governance material, and technical examples must
                be evaluated against the specific requirements and risks of an
                organization before implementation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Acceptable use
              </h2>
              <p className="mt-4">
                You may not use the website to interfere with its operation,
                attempt unauthorized access, distribute malicious content,
                submit fraudulent information, abuse public forms, or engage in
                activity that violates applicable law or the rights of others.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Intellectual property
              </h2>
              <p className="mt-4">
                Unless otherwise stated, SecureTheCloud website copy, branding,
                visual design, architecture illustrations, and original
                materials are owned by or licensed to SecureTheCloud. Public
                repositories and third-party materials remain subject to the
                licenses or terms identified with those resources.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                External services and links
              </h2>
              <p className="mt-4">
                The website may link to external platforms including GitHub,
                LinkedIn, YouTube, X, and other third-party resources.
                SecureTheCloud is not responsible for the availability,
                security, content, or independent practices of third-party
                websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Availability and changes
              </h2>
              <p className="mt-4">
                SecureTheCloud may modify, suspend, remove, or update public
                website content, services, links, or functionality as business
                and technical requirements change.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                No warranty
              </h2>
              <p className="mt-4">
                The public website and its informational content are provided
                on an as-available basis. SecureTheCloud does not represent that
                every page, link, technical example, or third-party resource
                will always be available, current, or suitable for a particular
                implementation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Contact
              </h2>
              <p className="mt-4">
                Questions about these Terms of Use may be sent to{" "}
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
              These website terms do not replace terms contained in a signed
              statement of work, services agreement, employment agreement, or
              other written contract with SecureTheCloud.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
