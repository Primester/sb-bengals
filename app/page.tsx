import { assetPath } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Shield, FieldLines } from "@/components/Icon";
import { registrationFee } from "@/lib/registration";
import { site } from "@/lib/site";
const faqs = [
  [
    "Is my player welcome if they have never played tackle football?",
    "Absolutely. We want families who are new to football to feel welcome. Our development vision starts with fundamentals, confidence, and learning to be a good teammate. Contact us about your player’s grade and experience so we can explain the next steps.",
  ],
  [
    "How do I sign up?",
    "Visit the 2027 registration page for details and to sign in or create an account in PlayMetrics to register your player.",
  ],
  [
    "Where is the Bengals’ home field?",
    "Our home field is San Marcos High School in Santa Barbara. Event times, field entry, parking, and drop-off instructions will be shared for each scheduled activity. Please visit only during announced Bengals events.",
  ],
  [
    "Does playing for the Bengals decide which high school my child attends?",
    "No. Our vision is to help young athletes build skills and confidence for the high school path their family chooses. School enrollment, transfer rules, and athletic eligibility are separate processes determined by the relevant schools and governing bodies.",
  ],
  [
    "How much does registration cost?",
    `2027 registration costs ${registrationFee} with no early bird pricing and no late registration fees. Sibling discounts are available. Email ${site.email} with questions about equipment or other registration details.`,
  ],
  [
    "Can I coach or volunteer?",
    `We’d love to hear from you. We welcome people who want to help young athletes learn and enjoy football. Email ${site.email} to ask about coaching or volunteering.`,
  ],
];
export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art">
          <Image
            src={assetPath("/brand/helmet-illustration.webp")}
            alt="White helmet illustration with the Santa Barbara Bengals SB mark"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 700px) 100vw, 70vw"
          />
        </div>
        <div className="hero-shade" />
        <div className="container hero-content">
          <Link className="eyebrow registration-status" href="/registration/">
            <span className="mini-rule" aria-hidden="true" /> 2027 registration
            is open
          </Link>
          <h1 id="hero-title">
            One Community.
            <br />
            Every Athlete.
            <br />
            <span>Every Path.</span>
          </h1>
          <p className="hero-intro">
            <strong className="hero-mission">
              Developing Better Athletes. Building Better People.
            </strong>{" "}
            We serve families in Santa Barbara, Goleta, and Carpinteria. Through
            fundamentals-driven football, quality coaching, and a focus on
            player safety, we build character, grit, discipline, teamwork, and a
            lifelong love of the game. Whether your athlete plans to attend San
            Marcos High, Santa Barbara High, Dos Pueblos High, Carpinteria High,
            or another school, they’re welcome here.
          </p>
          <div className="button-row">
            <Link href="/registration/" className="button">
              2027 registration <Arrow />
            </Link>
            <a href="#contact" className="button button-outline">
              Contact us <Arrow />
            </a>
            <Link href="/safety/" className="hero-safety">
              <Shield />
              <span>
                Player safety
                <br />
                <strong>comes first.</strong>
              </span>
              <Arrow diagonal />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="hero-coordinate">SANTA BARBARA, CA</span>
            <span>
              Home field <strong>San Marcos High School</strong>
            </span>
          </div>
        </div>
        <span className="hero-side-label" aria-hidden="true">
          SB / BUILT TOGETHER
        </span>
      </section>
      <div className="belief-strip">
        <div className="container">
          <span>CHARACTER FIRST.</span>
          <i aria-hidden="true" />
          <span>FOOTBALL FOREVER.</span>
        </div>
      </div>
      <section
        className="section section-paper"
        id="program"
        aria-labelledby="program-title"
      >
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">01 / More than a game</p>
            <div>
              <h2 id="program-title">
                GOOD FOOTBALL.
                <br />
                EVEN BETTER <span className="blue-text">FOUNDATIONS.</span>
              </h2>
              <p className="section-intro">
                We teach football fundamentals, build confidence through
                constructive coaching, and give every player a place to belong.
              </p>
            </div>
          </div>
          <div className="program-pillars">
            <article>
              <span className="pillar-no">01</span>
              <h3>Learn it right.</h3>
              <p>
                Build a foundation in football fundamentals, body control,
                teamwork, and understanding the game. New to tackle? You have a
                place to start.
              </p>
            </article>
            <article>
              <span className="pillar-no">02</span>
              <h3>Grow with your team.</h3>
              <p>
                Practice effort, accountability, and respect. The goal is
                confidence that goes beyond a practice, a game, or a scoreboard.
              </p>
            </article>
            <article>
              <span className="pillar-no">03</span>
              <h3>Carry it forward.</h3>
              <p>
                Develop the skills and habits to take the next step in football,
                with support for the high school path your family chooses.
              </p>
            </article>
          </div>
          <Link className="text-link" href="/programs/">
            Explore youth tackle football <Arrow />
          </Link>
        </div>
      </section>
      <section className="safety-feature" aria-labelledby="safety-title">
        <div className="container safety-layout">
          <div className="safety-statement">
            <p className="eyebrow light-eyebrow">
              02 / A commitment to player well-being
            </p>
            <Shield className="large-shield" />
            <h2 id="safety-title">
              THEIR FUTURE.
              <br />
              OUR <span>FIRST PRIORITY.</span>
            </h2>
            <p>
              Great coaching starts with caring about the kid inside the helmet.
            </p>
            <Link href="/safety/" className="button button-white">
              Explore our safety approach <Arrow />
            </Link>
          </div>
          <div className="safety-topics">
            <div>
              <span>01</span>
              <article>
                <h3>Preparation before contact.</h3>
                <p>
                  Coach education, screening, and age-appropriate instruction
                  are central to the program we’re building.
                </p>
              </article>
            </div>
            <div>
              <span>02</span>
              <article>
                <h3>Fundamentals before intensity.</h3>
                <p>
                  Our priorities include progressive skill instruction,
                  appropriate equipment fit, and thoughtful practice planning.
                </p>
              </article>
            </div>
            <div>
              <span>03</span>
              <article>
                <h3>A voice for every player.</h3>
                <p>
                  We want players to speak up and parents to ask questions.
                  Health concerns deserve attention, every time.
                </p>
              </article>
            </div>
            <p className="safety-note">
              We’ll share coaching credentials, equipment requirements, and
              season-specific protocols with families before participation.
            </p>
          </div>
        </div>
      </section>
      <section
        className="section section-paper vision-section"
        id="vision"
        aria-labelledby="vision-title"
      >
        <div className="container vision-grid">
          <div className="vision-graphic">
            <FieldLines className="field-drawing" />
            <div className="vision-mark">
              <Image
                src={assetPath("/brand/sb-mark.png")}
                alt=""
                width={320}
                height={320}
              />
            </div>
            <div className="four-corners" aria-hidden="true">
              <span>COMMUNITY</span>
              <span>OPPORTUNITY</span>
              <span>DEVELOPMENT</span>
              <span>CHOICE</span>
            </div>
            <p>
              ONE COMMUNITY.
              <br />
              MANY FUTURES.
            </p>
          </div>
          <div className="vision-copy">
            <p className="eyebrow">Community football</p>
            <h2 id="vision-title">
              One Community.
              <br />
              <span className="blue-text">A Stronger Football Future.</span>
            </h2>
            <p className="section-intro">
              We welcome families from Santa Barbara, Goleta, and Carpinteria
              and support each family’s choice of high school.
            </p>
            <p>
              A strong youth football foundation can help more kids participate,
              build better fundamentals, and bring local coaches together. We
              want athletes to carry their skills, confidence, and teamwork into
              any high school they choose.
            </p>
            <Link href="/about/" className="text-link">
              Read our mission and vision <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section
        className="home-field"
        id="home-field"
        aria-labelledby="field-title"
      >
        <div className="field-pattern" aria-hidden="true">
          <FieldLines />
        </div>
        <div className="container field-layout">
          <div>
            <p className="eyebrow light-eyebrow">04 / Our home field</p>
            <h2 id="field-title">
              THIS IS WHERE
              <br />
              WE <span>COME TOGETHER.</span>
            </h2>
            <p>
              There’s something special about having a place to call home. For
              the Bengals, it’s San Marcos High School.
            </p>
          </div>
          <div className="field-details">
            <span className="field-tag">BENGALS HOME FIELD</span>
            <h3>
              San Marcos
              <br />
              High School
            </h3>
            <address>{site.fieldAddress}</address>
            <a
              className="text-link text-link-light"
              href={site.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions <Arrow diagonal />
            </a>
            <p>
              Event schedules, parking, and arrival instructions will be shared
              with families before each activity.
            </p>
          </div>
        </div>
      </section>
      <section
        className="section section-paper"
        aria-labelledby="community-title"
      >
        <div className="container">
          <div className="community-heading">
            <div>
              <p className="eyebrow">05 / Everyone has a part to play</p>
              <h2 id="community-title">
                A TEAM TAKES
                <br />
                <span className="blue-text">A WHOLE COMMUNITY.</span>
              </h2>
            </div>
            <p>
              You don’t have to wear a helmet to make a difference. Help us
              create something our kids can be proud of.
            </p>
          </div>
          <div className="involvement-grid">
            <Link href="/registration/">
              <span className="eyebrow">For families</span>
              <h3>Find your team.</h3>
              <p>
                See the fee and learn how to register your athlete for the 2027
                season.
              </p>
              <span className="involve-link">
                See registration details <Arrow />
              </span>
            </Link>
            <Link href="/coaches/">
              <span className="eyebrow">For coaches &amp; volunteers</span>
              <h3>Be the difference.</h3>
              <p>
                Bring your experience, encouragement, and time. Help shape the
                experience for our young athletes.
              </p>
              <span className="involve-link">
                Explore coaching and volunteering <Arrow />
              </span>
            </Link>
            <Link href="/sponsors/">
              <span className="eyebrow">For local businesses</span>
              <h3>Back the Bengals.</h3>
              <p>
                Talk with us about supporting equipment, program access, and the
                community behind the team.
              </p>
              <span className="involve-link">
                Explore sponsorship <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="section faq-section"
        id="families"
        aria-labelledby="faq-title"
      >
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">06 / For the sideline crew</p>
            <h2 id="faq-title">
              BIG QUESTIONS.
              <br />
              <span className="blue-text">CLEAR ANSWERS.</span>
            </h2>
            <p>
              Choosing a program is a family decision. Let’s make sure you have
              the information you need.
            </p>
            <a href={`mailto:${site.email}`} className="text-link">
              Ask us anything <Arrow diagonal />
            </a>
          </div>
          <div className="faqs">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
            <Link className="faq-safety-link" href="/safety/">
              More questions about safety? Start here. <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section
        className="join-section section"
        id="join"
        aria-labelledby="join-title"
      >
        <div className="container join-grid">
          <div className="join-copy">
            <h2 id="join-title">
              2027 <span>REGISTRATION.</span>
            </h2>
            <p>
              Registration is {registrationFee} for the 2027 season, with no
              early bird pricing or late registration fees.
            </p>
            <Link href="/registration/" className="button">
              See registration details <Arrow />
            </Link>
          </div>
          <div>
            <p className="direct-email" id="contact">
              Email us about registration, coaching, volunteering, sponsorship,
              or donations.
              <br />
              <a href={`mailto:${site.email}`}>
                {site.email} <Arrow diagonal />
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
