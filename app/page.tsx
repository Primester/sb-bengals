import { assetPath } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Shield, FieldLines } from "@/components/Icon";
import { InterestForm } from "@/components/InterestForm";
import { site } from "@/lib/site";
const faqs = [
  [
    "Is my player welcome if they have never played tackle football?",
    "Absolutely. We want families who are new to football to feel welcome. Our development vision starts with fundamentals, confidence, and learning to be a good teammate. Contact us about your player’s grade and experience so we can explain the next steps.",
  ],
  [
    "How do I sign up?",
    "We are taking inquiries for the 2027 season. Start with the interest signup form below. We’ll share confirmed registration details, eligibility, dates, fees, and equipment information as they become available. Sending an inquiry does not reserve a roster spot or complete registration.",
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
    "What will registration cost, and what equipment is included?",
    "Fees, equipment inclusions, and any financial assistance options will be shared when finalized. We want families to understand the full commitment before registering. Email info@sbbengals.com with questions.",
  ],
  [
    "Can I coach, volunteer, or help as a school representative?",
    "We’d love to hear from you. We’re building a community around players, families, coaches, and local high school representatives. Select coaching or volunteering in the interest signup form, or email us directly.",
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
          <p className="eyebrow">
            <span className="mini-rule" /> 2027 season inquiries are open
          </p>
          <h1 id="hero-title">
            BIG DREAMS.
            <br />
            STRONG
            <br />
            <span>FOUNDATIONS.</span>
          </h1>
          <p className="hero-intro">
            A place to learn the game. A team to grow with.
            <br className="desktop-break" /> A community behind every player.
          </p>
          <div className="button-row">
            <a href="#join" className="button">
              Find your place on the team <Arrow />
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
          <span>KIDS FIRST.</span>
          <i aria-hidden="true" />
          <span>INTEGRITY ALWAYS.</span>
          <i aria-hidden="true" />
          <span>COMMUNITY FOREVER.</span>
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
                The Bengals are being built for Santa Barbara kids and the
                people who believe in them. Our focus is simple: develop the
                player, support the person, and make the team a place to belong.
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
          <a className="text-link" href="#join">
            Let’s talk about your player <Arrow />
          </a>
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
            <p className="eyebrow">03 / Built for Santa Barbara</p>
            <h2 id="vision-title">
              YOUR CITY.
              <br />
              YOUR TEAM.
              <br />
              <span className="blue-text">YOUR NEXT CHAPTER.</span>
            </h2>
            <p className="section-intro">
              Our vision is to bring representatives from all four local public
              high school football programs into the Bengals community.
            </p>
            <p>
              We want to connect local experience with young talent, and prepare
              players to arrive at the high school of their choosing with
              stronger fundamentals, confidence, and a team-first mindset.
            </p>
            <p className="vision-emphasis">
              One youth program. A shared investment in Santa Barbara’s next
              generation.
            </p>
            <a
              href="mailto:info@sbbengals.com?subject=High%20school%20representative%20interest"
              className="text-link"
            >
              Help build that connection <Arrow diagonal />
            </a>
            <p className="small-note">
              We’re building these connections with local high school programs.
              School enrollment and athletic eligibility remain separate.
            </p>
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
            <a href="#join">
              <span className="eyebrow">For families</span>
              <h3>Find your team.</h3>
              <p>
                Ask questions, meet the program, and hear about the next
                opportunity to get on the field.
              </p>
              <span className="involve-link">
                Get player updates <Arrow />
              </span>
            </a>
            <a href="#join">
              <span className="eyebrow">For coaches &amp; volunteers</span>
              <h3>Be the difference.</h3>
              <p>
                Bring your experience, encouragement, and time. Help shape the
                experience for our young athletes.
              </p>
              <span className="involve-link">
                Raise your hand <Arrow />
              </span>
            </a>
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
            <p className="eyebrow light-eyebrow">07 / Come be a Bengal</p>
            <h2 id="join-title">
              THE FIRST STEP
              <br />
              IS <span>SHOWING UP.</span>
            </h2>
            <p>
              We are taking inquiries for the 2027 season. Tell us a little
              about your family, or your interest in coaching or volunteering.
              Your submitted inquiry is saved so we can follow up.
            </p>
            <div className="join-points">
              <p>
                <span>01</span>Tell us how you’d like to get involved.
              </p>
              <p>
                <span>02</span>Submit your inquiry to the Bengals.
              </p>
              <p>
                <span>03</span>Get program information and next steps.
              </p>
            </div>
            <p className="direct-email">
              Prefer a direct conversation?
              <br />
              <a href={`mailto:${site.email}`}>
                {site.email} <Arrow diagonal />
              </a>
            </p>
          </div>
          <InterestForm />
        </div>
      </section>
    </main>
  );
}
