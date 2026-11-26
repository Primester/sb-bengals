import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
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
            How 2027 registration and earlier season inquiries are handled.
          </p>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container prose">
          <p className="eyebrow">Updated November 25, 2026</p>
          <h2>Registration through PlayMetrics</h2>
          <p>
            Families enter and manage athlete information in PlayMetrics. The
            Bengals website links to PlayMetrics for registration. See the{" "}
            <a href="https://home.playmetrics.com/privacy">
              PlayMetrics Privacy Notice
            </a>{" "}
            for details about how PlayMetrics handles your information.
          </p>
          <h2>Previously submitted season inquiries</h2>
          <p>
            The former interest form collected an adult contact’s name, email,
            optional phone number, and interest in playing, coaching, or
            volunteering. Player inquiries could include a date of birth to help
            discuss 2027 age eligibility.
          </p>
          <h2>Where earlier inquiries are saved</h2>
          <p>
            Earlier inquiries were saved in Google Forms and its linked Google
            Sheets response file. Access to the response file is restricted to
            the form owner and authorized Bengals staff.
          </p>
          <p>
            Google handles these submissions under its own{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            .
          </p>
          <h2>How we use inquiry information</h2>
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
            <a href={`mailto:${site.email}`}>{site.email}</a>. Please do not
            include a player’s birth date in your email subject line.
          </p>
          <h2>Website hosting and links</h2>
          <p>
            The website is hosted on GitHub Pages and includes no added
            advertising pixels or analytics scripts. Hosting providers may
            process standard connection information such as IP addresses and
            access logs. External sites have their own privacy practices.
          </p>
          <Link className="text-link" href="/registration/">
            Back to registration
          </Link>
        </div>
      </section>
    </main>
  );
}
