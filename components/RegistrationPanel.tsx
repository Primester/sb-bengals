import Link from "next/link";
import { registrationFee, registrationUrl } from "@/lib/registration";

export function RegistrationPanel() {
  const reviewBuild = process.env.NEXT_PUBLIC_REVIEW_BUILD === "true";
  const signupLabel = (
    <>
      <span>Register for 2027</span>
      <span className="registration-cta-price">Just {registrationFee}</span>
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
        <button className="button registration-cta" type="button" disabled>
          {signupLabel}
        </button>
      ) : (
        <a
          aria-describedby="registration-link-note"
          className="button registration-cta"
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
