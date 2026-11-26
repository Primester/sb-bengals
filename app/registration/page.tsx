import type { Metadata } from "next";
import Link from "next/link";
import { RegistrationPanel } from "@/components/RegistrationPanel";
import { registrationFee } from "@/lib/registration";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "2027 Football Registration",
  description:
    "Register for the Santa Barbara Bengals’ 2027 youth tackle football season. Registration is $495 through PlayMetrics.",
};

export default function Registration() {
  return (
    <main id="main">
      <section className="page-hero compact-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">
            Home <span>/ Registration</span>
          </Link>
          <h1>
            2027 <span>Registration</span>
          </h1>
          <p className="page-hero-intro">
            The Santa Barbara Bengals’ 2027 youth tackle football season is open
            for registration. We welcome new and returning players from Santa
            Barbara, Goleta, and Carpinteria.
          </p>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="fee-title">
        <div className="container editorial-grid">
          <div className="editorial-copy">
            <h2 id="fee-title">One Registration Price</h2>
            <p>
              We are keeping registration at <strong>{registrationFee}</strong>{" "}
              with no early bird pricing and no late registration fees.
            </p>
            <p>
              Our goal is to keep registration as affordable as possible for all
              families. By maintaining one consistent price, we hope to give
              every family the opportunity to register at the lowest cost we can
              offer.
            </p>
            <p>
              We will reevaluate our registration structure each year to
              determine what works best for our families and our program, always
              keeping our priority in mind: making sure every player has the
              opportunity to play.
            </p>
          </div>
          <RegistrationPanel />
        </div>
      </section>

      <section
        className="section registration-season"
        aria-labelledby="teams-title"
      >
        <div className="container editorial-grid">
          <div className="editorial-copy">
            <h2 id="teams-title">More Teams, More Playing Time</h2>
            <p>
              Our goal is to keep registration open without a cap. Ultimately,
              we want to field two or more teams in each division so every
              player has more opportunities to get on the field and develop
              their skills.
            </p>
            <p>We believe athletes can’t get better if they don’t play.</p>
          </div>
          <div className="editorial-copy">
            <h2>About the Season</h2>
            <p>
              The program is intended for ages 6–14, subject to league divisions
              and eligibility rules. Both first-time tackle football players and
              returning athletes are welcome.
            </p>
            <p>
              Have a question about the season or registration? Email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
            <Link href="/programs/" className="text-link">
              Explore the program
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
