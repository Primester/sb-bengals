import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Privacy & Your Information" };
export default function Privacy() {
  return (
    <main id="main">
      <section className="page-hero compact-hero">
        <div className="container">
          <Link className="breadcrumb" href="/">
            Home <span>/ Privacy</span>
          </Link>
          <p className="eyebrow light-eyebrow">A clear next step</p>
          <h1>YOUR INFORMATION.</h1>
          <p className="page-hero-intro">
            How the interest email works, and what this website does with your
            details.
          </p>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container prose">
          <p className="eyebrow">Updated October 30, 2026</p>
          <h2>Interest inquiries</h2>
          <p>
            The interest form prepares an email addressed to info@sbbengals.com.
            Your entries stay in this page’s temporary browser memory while you
            use the form. They are not submitted to a website server, saved in a
            website database, or stored in browser local storage.
          </p>
          <p>
            When you choose “Open my email app,” your email software receives
            the prepared message. Nothing is sent until you send the email.
            “Copy email instead” copies the message to your device’s clipboard
            only when you select that option.
          </p>
          <h2>Adults and player information</h2>
          <p>
            The form is for adults age 18 or older. We ask for an adult’s name,
            email, area of interest, and optionally a player’s grade. Please do
            not include a child’s full name, date of birth, medical information,
            identity documents, or payment details.
          </p>
          <h2>After you send an email</h2>
          <p>
            Your email provider and the league’s email provider handle the
            message under their own services. The Bengals can use information
            you email to respond to your inquiry and discuss relevant program
            next steps. To ask about your inquiry or request removal from future
            email follow-up, contact info@sbbengals.com.
          </p>
          <h2>Links and basic hosting</h2>
          <p>
            This build includes no advertising pixels, analytics scripts,
            tracking cookies, or third-party embedded maps. The hosting provider
            used when the site is published may process standard connection
            information such as IP addresses and access logs. External sites
            linked here have their own privacy practices.
          </p>
          <h2>Registration is separate</h2>
          <p>
            An interest email is not player registration. Any future
            registration or payment service will have its own information and
            consent process. Its provider and privacy details should be shared
            before collecting additional information.
          </p>
          <h2>Questions</h2>
          <p>
            Email <a href="mailto:info@sbbengals.com">info@sbbengals.com</a>{" "}
            with questions about your information.
          </p>
          <Link className="text-link" href="/#join">
            Back to the interest form →
          </Link>
        </div>
      </section>
    </main>
  );
}
