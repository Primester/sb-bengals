import type { Metadata } from "next";
import { registrationFee } from "@/lib/registration";
import Link from "next/link";
import { Arrow } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Youth Football Programs",
  description:
    "Explore Bengals youth tackle football, player development, and 2027 registration.",
};

export default function Programs() {
  return (
    <main id="main">
      <section className="page-hero compact-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">
            Home <span>/ Programs</span>
          </Link>
          <h1>
            Youth <span>Tackle Football</span>
          </h1>
          <p className="page-hero-intro">
            Learn the game, grow as a teammate, and build skills for your next
            step in football.
          </p>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container editorial-grid">
          <article className="editorial-copy">
            <h2>Every Player Matters. Every Rep Counts.</h2>
            <p>
              We teach before we evaluate and give athletes of all experience
              levels meaningful opportunities to improve. Coaches build
              confidence with constructive feedback and achievable challenges,
              teaching players how to read the game alongside physical skills.
            </p>
            <p>
              Preparation, effort, coachability, and demonstrated performance
              help players earn opportunities in healthy competition. We want
              every player to enjoy learning, be proud of their progress, and
              want to return next season.
            </p>
            <Link href="/coaches/" className="text-link">
              Meet our coaching philosophy <Arrow />
            </Link>
          </article>
          <article className="editorial-copy">
            <h2>The Development Pathway</h2>
            <ol className="football-pathway">
              <li>Flag football</li>
              <li>Youth tackle football</li>
              <li>High school football</li>
            </ol>
            <p>
              Local flag football gives young athletes a foundation. For
              families who choose tackle, we offer another step, with
              age-appropriate instruction in fundamentals, football IQ,
              teamwork, and responsible contact technique. First-time players
              are welcome.
            </p>
            <p>
              We welcome families from Santa Barbara, Goleta, and Carpinteria,
              encourage collaboration across local youth programs, and prepare
              athletes for whichever high school their family chooses.
            </p>
            <Link href="/safety/" className="text-link">
              Read about player safety <Arrow />
            </Link>
          </article>
          <article className="editorial-copy" id="registration">
            <h2>2027 Registration Information</h2>
            <p>
              Registration for the 2027 season is open through PlayMetrics. The
              fee is {registrationFee} with no early bird pricing and no late
              registration fees.
            </p>
            <p>
              The youth tackle program is intended for ages 6–14, subject to
              confirmed league divisions and eligibility rules.
            </p>
            <Link href="/#join" className="button">
              See registration details <Arrow />
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
