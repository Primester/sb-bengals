import Link from "next/link";
import { registrationFee, registrationUrl } from "@/lib/registration";
import { Arrow } from "./Icon";

const reviewBuild = process.env.NEXT_PUBLIC_REVIEW_BUILD === "true";

export function RegistrationButton({
  showPrice = false,
}: {
  showPrice?: boolean;
}) {
  const label = (
    <>
      <span>Click here to register</span>
      {showPrice ? (
        <span className="registration-cta-price">Just {registrationFee}</span>
      ) : (
        <Arrow diagonal />
      )}
    </>
  );

  if (reviewBuild) {
    return (
      <button className="button registration-cta" type="button" disabled>
        {label}
      </button>
    );
  }

  return (
    <a
      aria-describedby="registration-link-note"
      className="button registration-cta"
      href={registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}

export function RegistrationPanel() {
  return (
    <div className="signup-panel">
      <h2>2027 Bengals Registration</h2>
      <p>
        We use PlayMetrics, which acquired SportsEngine, for Bengals
        registration. Sign in or create an account to register your athlete.
      </p>
      <RegistrationButton showPrice />
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
