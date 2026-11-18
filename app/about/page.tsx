import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Santa Barbara Bengals' mission, vision, and values for youth football in Santa Barbara, Goleta, and Carpinteria.",
};

const values = [
  [
    "Character First",
    "Football is a vehicle for developing young people. We prioritize integrity, accountability, respect, leadership, and personal growth over wins and losses.",
  ],
  [
    "Grit and Perseverance",
    "We teach athletes to embrace challenges, overcome adversity, respond constructively to setbacks, and understand that meaningful success requires consistent effort.",
  ],
  [
    "Teamwork and Brotherhood",
    "Players learn to trust teammates, accept responsibility, support one another, and understand that collective success requires individual commitment.",
  ],
  [
    "Fundamentals and Development",
    "Every athlete deserves the opportunity to learn proper football fundamentals, develop their skills, understand the game, and progress at an age-appropriate pace.",
  ],
  [
    "Safety and Responsibility",
    "Player well-being comes first. We emphasize progressive contact instruction, proper technique, appropriate equipment, injury awareness, and responsible coaching practices.",
  ],
  [
    "Coaching Excellence",
    "Great youth programs require great coaches. We invest in developing coaches who are knowledgeable, positive, accountable, safety-conscious, and committed to the long-term development of every athlete.",
  ],
];

export default function About() {
  return (
    <main id="main">
      <section className="page-hero compact-hero">
        <div className="container">
          <Link href="/" className="breadcrumb">
            Home <span>/ About us</span>
          </Link>
          <h1>
            About the <span>Bengals</span>
          </h1>
          <p className="page-hero-intro">
            One Community. Every Athlete. Every Path.
          </p>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container editorial-grid">
          <article className="editorial-copy">
            <h2>Our Mission</h2>
            <p>
              The Santa Barbara Bengals are dedicated to developing young
              athletes through the game of football, building character, grit,
              discipline, and teamwork that extend far beyond the field.
            </p>
            <p>
              We are committed to providing a safe, positive, and competitive
              environment where every player receives quality coaching, develops
              strong fundamentals, and discovers the rewards of hard work,
              perseverance, and being part of a team.
            </p>
            <p>
              Through player development, coaching excellence, and community
              collaboration, we strive to build a lasting football tradition
              that strengthens youth football in Santa Barbara, Goleta, and
              Carpinteria and helps prepare athletes for any high school program
              they choose.
            </p>
          </article>
          <article className="editorial-copy">
            <h2>Our Vision</h2>
            <p>
              We envision a thriving football community across Santa Barbara,
              Goleta, and Carpinteria where every young athlete has the
              opportunity to develop, compete, and succeed.
            </p>
            <p>
              Building on the foundation of local flag football, we want to give
              athletes a pathway to become skilled, confident players and
              teammates who can contribute wherever they attend high school.
            </p>
            <p>
              We want our region to be known for developing outstanding coaches,
              skilled athletes, and young people of strong character. We measure
              progress by the players, teammates, and leaders we help develop.
            </p>
          </article>
          <article className="editorial-copy">
            <h2>Youth Football Philosophy</h2>
            <p>
              We believe youth football should develop athletes for success on
              and off the field, regardless of where their journey takes them.
            </p>
            <p>
              Our goal is to build a program that serves families throughout
              Santa Barbara, Goleta, and Carpinteria, promotes fundamental
              football development, and prepares athletes for success at any
              high school.
            </p>
            <p>
              We develop football players first and support each family’s choice
              of high school.
            </p>
            <Link href="/programs/" className="text-link">
              Explore player development <Arrow />
            </Link>
          </article>
        </div>
      </section>
      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <h2 id="values-title">Our Values</h2>
          <div className="safety-priority-grid editorial-cards">
            {values.map(([title, description]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
