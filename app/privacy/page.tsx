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
          <p className="eyebrow light-eyebrow">
            Your information. A clear purpose.
          </p>
          <h1>YOUR INFORMATION.</h1>
          <p className="page-hero-intro">
            How we save and use your 2027 season interest inquiry.
          </p>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container prose">
          <p className="eyebrow">Updated October 30, 2026</p>
          <h2>What we collect</h2>
          <p>
            The interest signup form opens in a separate tab and is for adults
            age 18 or older. It collects a parent/guardian or adult contact
            name, email, optional phone number, and interest in playing,
            coaching, or volunteering. For player inquiries, we ask for the
            player’s date of birth to help discuss age eligibility for the 2027
            season. Submit a separate inquiry for each player.
          </p>
          <p>
            Only a parent or guardian should provide a player’s date of birth.
            Please do not submit a child’s full name, medical information,
            identity documents, or payment details through this interest form.
          </p>
          <h2>Where your answers are saved</h2>
          <p>
            The form is hosted by Google Forms. When you press Submit and see
            the confirmation, your inquiry is saved in Google Forms and its
            linked Google Sheets response file. You do not need to send a
            separate email. The response file is restricted to the form owner
            and authorized Bengals staff; response summaries are not shared with
            respondents or published on this website.
          </p>
          <p>
            Google processes the form and submissions under its own{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            . Opening the form can send Google connection information such as
            your IP address and browser details.
          </p>
          <h2>How we use your information</h2>
          <p>
            The Bengals use inquiry details to respond to you, discuss age
            eligibility, and share relevant 2027 season information and next
            steps. Providing a phone number lets the league contact you by phone
            about your inquiry; it does not subscribe you to an automated text
            marketing service.
          </p>
          <h2>Your choices</h2>
          <p>
            To correct your information, request removal of your inquiry, or
            stop future follow-up, email{" "}
            <a href="mailto:info@sbbengals.com">info@sbbengals.com</a>. Please
            do not include a player’s birth date in your email subject line.
          </p>
          <h2>Website hosting and links</h2>
          <p>
            The website is hosted on GitHub Pages and includes no added
            advertising pixels or analytics scripts. Hosting providers may
            process standard connection information such as IP addresses and
            access logs. The Google form and other external sites have their own
            privacy practices.
          </p>
          <h2>Registration is separate</h2>
          <p>
            We are taking inquiries for the 2027 season. Submitting this form is
            not completed player registration, a reserved roster spot, or a
            payment. Any future registration service will have its own
            information and consent process.
          </p>
          <Link className="text-link" href="/#join">
            Back to the interest signup form →
          </Link>
        </div>
      </section>
    </main>
  );
}
