import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Shield } from "@/components/Icon";
import { resources } from "@/lib/site";
export const metadata: Metadata = {
  title: "Player Safety",
  description:
    "Learn about the Santa Barbara Bengals safety priorities, the questions families should ask, and trusted CDC and USA Football resources.",
};
const priorities = [
  [
    "Coach preparation",
    "Prepared adults set the tone.",
    "Our program priorities include coach education, screening, and age-appropriate instruction. Families should know who is coaching their child and which credentials have been completed.",
  ],
  [
    "Equipment readiness",
    "Fit matters. So does condition.",
    "Proper fitting, equipment condition, and required reconditioning are part of planning for participation. We’ll share equipment requirements and what families need before the season.",
  ],
  [
    "Thoughtful progression",
    "Learn the skill. Build from there.",
    "Our development vision emphasizes football fundamentals and progressive instruction. Contact limits, practice expectations, and age-specific rules should be clear before participation.",
  ],
  [
    "A culture of speaking up",
    "Every player deserves to be heard.",
    "We want players to report discomfort or symptoms without pressure to keep playing. Families should have a clear way to raise a concern with the program.",
  ],
  [
    "Response planning",
    "Know the plan before it is needed.",
    "Emergency procedures, medical arrangements, heat planning, and family communication are part of season preparation. Ask us about the confirmed plan for a specific activity.",
  ],
  [
    "Family partnership",
    "Good questions make us better.",
    "We’ll share season-specific protocols and expectations before participation. Ask about coaching credentials, equipment fitting, practice structure, and how concerns are handled.",
  ],
];
export default function Safety() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Link className="breadcrumb" href="/">
            Home <span>/ Player safety</span>
          </Link>
          <div className="safety-page-heading">
            <div>
              <p className="eyebrow light-eyebrow">
                The kid comes before the game
              </p>
              <h1>
                THEIR FUTURE.
                <br />
                OUR <span>FIRST PRIORITY.</span>
              </h1>
            </div>
            <Shield className="page-shield" />
          </div>
          <p className="page-hero-intro">
            Football should build confidence, character, and connection. Player
            well-being belongs at the center of that experience.
          </p>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Our safety priorities</p>
            <div>
              <h2>
                ASK QUESTIONS.
                <br />
                <span className="blue-text">KNOW THE PLAN.</span>
              </h2>
              <p className="section-intro">
                These priorities guide the program we’re building. Specific
                coaching credentials, equipment requirements, and operating
                protocols will be shared with families before participation.
              </p>
            </div>
          </div>
          <div className="safety-priority-grid">
            {priorities.map(([label, title, body], i) => (
              <article key={label}>
                <span className="eyebrow">
                  0{i + 1} / {label}
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="concussion-section section">
        <div className="container concussion-grid">
          <div>
            <p className="eyebrow">Concussion awareness</p>
            <h2>
              WHEN IN DOUBT,
              <br />
              <span className="blue-text">SPEAK UP.</span>
            </h2>
            <p>
              Tackle football is a contact sport, and injury risk cannot be
              eliminated. Families deserve clear information and a culture that
              takes concerns seriously.
            </p>
          </div>
          <div className="resource-feature">
            <span className="eyebrow">From CDC HEADS UP</span>
            <h3>
              Recognize a concern.
              <br />
              Stop participation.
              <br />
              Get medical guidance.
            </h3>
            <p>
              CDC guidance calls for immediate removal when a concussion is
              suspected, no return that day, and clearance by a healthcare
              provider before returning to sports.
            </p>
            <a
              href={resources.cdc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Read CDC concussion guidance <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container">
          <div className="resources-heading">
            <p className="eyebrow">For informed families</p>
            <h2>
              GOOD INFORMATION.
              <br />
              <span className="blue-text">BETTER CONVERSATIONS.</span>
            </h2>
          </div>
          <div className="resource-links">
            <a
              href={resources.usaFootball}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <span className="eyebrow">USA Football</span>
                <h3>Parent &amp; guardian resources</h3>
                <p>
                  Explore questions to ask, player development information, and
                  resources for football families.
                </p>
              </div>
              <Arrow diagonal />
            </a>
            <a href={resources.cdc} target="_blank" rel="noopener noreferrer">
              <div>
                <span className="eyebrow">CDC HEADS UP</span>
                <h3>Concussion information</h3>
                <p>
                  Learn about recognizing concerns and the healthcare provider’s
                  role in return-to-sport decisions.
                </p>
              </div>
              <Arrow diagonal />
            </a>
          </div>
          <p className="small-note">
            These are independent educational resources. Linking to them does
            not imply endorsement, affiliation, or certification of the Bengals.
          </p>
        </div>
      </section>
      <section className="simple-cta">
        <div className="container">
          <div>
            <span className="eyebrow light-eyebrow">
              Start with a conversation
            </span>
            <h2>
              YOUR QUESTIONS
              <br />
              ARE ALWAYS WELCOME.
            </h2>
          </div>
          <a
            className="button button-white"
            href="mailto:info@sbbengals.com?subject=Question%20about%20Bengals%20player%20safety"
          >
            Ask a safety question <Arrow diagonal />
          </a>
        </div>
      </section>
    </main>
  );
}
