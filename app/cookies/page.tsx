import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

export const metadata = buildPageMetadata({
  title: "Cookie Policy",
  description:
    "Information about cookies and similar browser technologies on securethecloud.dev.",
  path: "/cookies",
});

export default function CookiePolicyPage() {
  return (
    <main className="bg-[#030711]">
      <section className="border-b border-white/10">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Legal / Cookies
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Cookie Policy
            </h1>

            <p className="mt-6 text-base leading-7 text-slate-300">
              This policy explains the current use of cookies and similar
              browser technologies on securethecloud.dev.
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
                Current website posture
              </h2>
              <p className="mt-4">
                SecureTheCloud does not currently describe or intentionally
                operate the public website as an advertising-tracking or
                behavioral-profiling platform.
              </p>
              <p className="mt-4">
                We do not claim to use advertising, remarketing, or behavioral
                analytics cookies unless and until those technologies are
                actually introduced into the production website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Essential technologies
              </h2>
              <p className="mt-4">
                The website, browser, hosting platform, or integrated services
                may use technical mechanisms necessary to deliver pages,
                protect requests, maintain network or security behavior, or
                support functions initiated by a visitor.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Third-party destinations
              </h2>
              <p className="mt-4">
                When you leave securethecloud.dev for services such as LinkedIn,
                YouTube, X, GitHub, or another third-party site, that provider
                may use cookies or similar technologies under its own policies.
                SecureTheCloud does not control those third-party technologies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Form processing
              </h2>
              <p className="mt-4">
                Consultation and other public forms may interact with
                third-party form-processing infrastructure. Any browser
                technologies used by those providers are governed by their own
                operational and privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Browser controls
              </h2>
              <p className="mt-4">
                Most browsers provide controls for viewing, blocking, or
                deleting cookies and other stored website data. Restricting
                essential browser technologies may affect the operation of some
                websites or third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Future changes
              </h2>
              <p className="mt-4">
                If SecureTheCloud later introduces analytics, consent
                management, advertising technology, or other non-essential
                tracking mechanisms, this policy should be updated to describe
                those technologies and any applicable choices before relying on
                the revised implementation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Related information
              </h2>
              <p className="mt-4">
                See the{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-cyan-300 hover:text-cyan-200"
                >
                  Privacy Policy
                </Link>{" "}
                for information about website submissions and third-party
                services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Contact
              </h2>
              <p className="mt-4">
                Questions about this Cookie Policy may be sent to{" "}
                <a
                  href={`mailto:${siteConfig.contact.salesEmail}`}
                  className="font-medium text-cyan-300 hover:text-cyan-200"
                >
                  {siteConfig.contact.salesEmail}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </section>
    </main>
  );
}
