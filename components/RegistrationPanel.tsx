import Link from "next/link";
import { registrationFee, registrationUrl } from "@/lib/registration";
import { Arrow } from "./Icon";

export function RegistrationPanel() {
  const reviewBuild = process.env.NEXT_PUBLIC_REVIEW_BUILD === "true";
  const signupLabel = (
    <>
      <span>
        Register for the 2027 season
        <strong>Just {registrationFee}</strong>
      </span>
      <Arrow diagonal />
    </>
  );

  return (
    <div className="signup-panel">
      <h2>2027 Bengals Registration</h2>
      <p>
        We use PlayMetrics, which acquired SportsEngine, for Bengals
        registration. Sign in or create an account to register your athlete.
      </p>
      {reviewBuild ? (
        <button
          className="button button-full registration-cta"
          type="button"
          disabled
        >
          {signupLabel}
        </button>
      ) : (
        <a
          aria-describedby="registration-link-note"
          className="button button-full registration-cta"
          href={registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {signupLabel}
        </a>
      )}
      <p className="form-help" id="registration-link-note">
        {reviewBuild
          ? "Registration is disabled in this preview."
          : "Opens the official Bengals registration page on PlayMetrics in a new tab."}
      </p>
      <p className="form-help">
        <Link href="/privacy/">How we handle your information</Link>
      </p>
    </div>
  );
}
