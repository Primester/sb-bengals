import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coaches and Volunteers",
  description:
    "Learn what the Bengals expect of youth football coaches and how to express interest in coaching or volunteering.",
};

export default function Coaches() {
  return (
    <main id="main">
      <section className="page-hero compact-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">
            Home <span>/ Coaches</span>
          </Link>
          <h1>
            Better Coaches. Better Players. <span>Better People.</span>
          </h1>
          <p className="page-hero-intro">
            We develop coaches alongside our athletes through ongoing education,
            practice planning, and feedback.
          </p>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container editorial-grid">
          <article className="editorial-copy">
            <h2>What We Expect of Coaches</h2>
            <ul>
              <li>
                Teach proper fundamentals and football IQ at a pace that
                respects each athlete’s stage of development.
              </li>
              <li>
                Use constructive instruction to build confidence and hold
                players accountable with respect.
              </li>
              <li>
                Make practices competitive while protecting player well-being
                and treating every athlete with dignity.
              </li>
              <li>
                Model leadership, discipline, effort, sportsmanship, and
                resilience.
              </li>
            </ul>
            <p>
              We look for growth in skill, confidence, enjoyment, and character,
              and pay attention to whether players want to come back. Coach
              education continues throughout the season.
            </p>
            <Link href="/safety/" className="text-link">
              Read our player safety approach <Arrow />
            </Link>
          </article>
          <article className="editorial-copy">
            <h2>Coach or Volunteer</h2>
            <p>
              Interested in helping? Select coaching or volunteering on the same
              2027 interest form used by families, or email us to ask about
              opportunities.
            </p>
            <div className="button-row">
              <Link href="/#join" className="button">
                Coaching and volunteer interest <Arrow />
              </Link>
              <a
                href={`mailto:${site.email}?subject=Coaching%20or%20volunteering`}
                className="text-link"
              >
                Email the Bengals <Arrow diagonal />
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
