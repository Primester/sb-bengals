import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sponsor the Bengals",
  description:
    "Support Santa Barbara youth tackle football for the 2027 season. Explore Bronze $500, Silver $1,000, and Gold $1,500 sponsorships.",
};

const tiers = [
  {
    name: "Bronze",
    amount: "$500",
    description: "Show up for Santa Barbara’s next generation.",
    benefits: [
      "A thank-you on Bengals social media",
      "A certificate recognizing your support",
    ],
  },
  {
    name: "Silver",
    amount: "$1,000",
    description: "Help build a foundation our players can grow on.",
    benefits: [
      "Recognition on the Bengals website",
      "A thank-you on Bengals social media",
      "A certificate recognizing your support",
    ],
  },
  {
    name: "Gold",
    amount: "$1,500",
    description: "Put your business behind a stronger local team.",
    benefits: [
      "Recognition on the Bengals website and social media",
      "Your business on a shared sponsor banner at home games",
      "A certificate recognizing your support",
    ],
  },
];

export default function Sponsors() {
  return (
    <main id="main">
      <section className="page-hero compact-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">
            Home <span>/ Sponsors</span>
          </Link>
          <p className="eyebrow light-eyebrow">
            Stand with the Bengals / 2027 season
          </p>
          <h1>
            LOCAL SUPPORT.
            <br />
            <span>LASTING IMPACT.</span>
          </h1>
          <p className="page-hero-intro">
            A team takes a whole community. Help kids across Santa Barbara,
            Goleta, and Carpinteria learn the game, build confidence, and find a
            place to belong.
          </p>
          <a
            className="button"
            href={`mailto:${site.email}?subject=2027%20Bengals%20sponsorship`}
          >
            Become a sponsor <Arrow diagonal />
          </a>
        </div>
      </section>
      <section
        className="section section-paper"
        aria-labelledby="sponsor-tiers-title"
      >
        <div className="container">
          <p className="eyebrow">Back the team. Build the future.</p>
          <h2 id="sponsor-tiers-title">
            FIND YOUR WAY TO{" "}
            <span className="blue-text">MAKE A DIFFERENCE.</span>
          </h2>
          <p className="sponsor-intro">
            We’re taking sponsorship inquiries for the 2027 season. Choose a
            level and connect with us about supporting equipment, program
            access, and the community behind our players.
          </p>
          <div className="sponsor-grid">
            {tiers.map((tier) => (
              <article
                className={`sponsor-card sponsor-${tier.name.toLowerCase()}`}
                key={tier.name}
              >
                <p className="eyebrow">{tier.name} Bengals sponsor</p>
                <h3>{tier.amount}</h3>
                <p>{tier.description}</p>
                <ul>
                  {tier.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <a
                  className="button button-full"
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`2027 ${tier.name} sponsorship — ${tier.amount}`)}`}
                >
                  Choose {tier.name} <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
          <p className="sponsor-note">
            Email your business name, preferred level, and contact information
            to <a href={`mailto:${site.email}`}>{site.email}</a>. We’ll
            coordinate artwork, recognition details, and payment instructions
            with you directly.
          </p>
        </div>
      </section>
      <section
        className="section section-paper sponsor-nonprofit"
        aria-labelledby="nonprofit-title"
      >
        <div className="container prose">
          <p className="eyebrow">Community at the center</p>
          <h2 id="nonprofit-title">A NONPROFIT. A SHARED PURPOSE.</h2>
          <p>
            The Santa Barbara Bengals are a 501(c)(3) nonprofit supporting youth
            football in Santa Barbara, Goleta, and Carpinteria. Our goal is to
            make youth football accessible to more families through community
            sponsorships, volunteer support, and responsible stewardship.
          </p>
          <p>
            <strong>Employer Identification Number (EIN): 43-2243612</strong>
          </p>
          <p>
            Need nonprofit documentation for your sponsorship records? Contact{" "}
            <a
              href={`mailto:${site.email}?subject=Bengals%20nonprofit%20documentation`}
            >
              {site.email}
            </a>
            .
          </p>
          <h3>Helping More Families Participate</h3>
          <p>
            We aim to offer financial assistance or scholarships when approved
            funding permits and equipment assistance when gear is available.
            Families can email us to ask about current options.
          </p>
          <h3>Have another way to help?</h3>
          <p>
            We welcome inquiries about donations, donated equipment or services,
            volunteering, and ways local organizations can work with us. Email
            the Bengals to discuss how you can help.
          </p>
          <Link className="text-link" href="/#contact">
            Contact the Bengals <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
