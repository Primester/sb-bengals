import Link from "next/link";
import { registrationUrl } from "@/lib/registration";
import { Arrow } from "./Icon";

export function RegistrationPanel() {
  const reviewBuild = process.env.NEXT_PUBLIC_REVIEW_BUILD === "true";

  return (
    <div className="signup-panel">
      <h2>Register through PlayMetrics</h2>
      <p>
        We use PlayMetrics, which acquired SportsEngine, for Bengals
        registration. Sign in or create an account to manage your athlete’s
        information and register for the season.
      </p>
      {reviewBuild ? (
        <>
          <button className="button button-full" type="button" disabled>
            Register on PlayMetrics <Arrow diagonal />
          </button>
          <p className="form-help">Registration is disabled in this preview.</p>
        </>
      ) : (
        <a className="button button-full" href={registrationUrl}>
          Register on PlayMetrics <Arrow diagonal />
        </a>
      )}
      <p className="form-help">
        <Link href="/privacy/">How we handle your information</Link>
      </p>
    </div>
  );
}
