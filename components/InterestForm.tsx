import Link from "next/link";
import { Arrow } from "./Icon";
import { interestFormUrl } from "@/lib/interest-form";
export function InterestForm() {
  return (
    <div className="signup-panel">
      <p className="eyebrow">2027 season interest signup</p>
      <h3>Let’s get to know you.</h3>
      <p>
        We’re taking inquiries for players, coaches, and volunteers. Complete
        the signup form and press Submit. Your answers are saved so the Bengals
        can follow up.
      </p>
      <ul className="signup-fields">
        <li>Parent/guardian or adult contact name and email</li>
        <li>Phone number (optional)</li>
        <li>Player date of birth for player inquiries</li>
        <li>Interest in playing, coaching, or volunteering</li>
      </ul>
      <a
        className="button button-full"
        href={interestFormUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Start your 2027 inquiry <Arrow diagonal />
      </a>
      <p className="form-help">
        Opens our Google Form in a new tab. Your response is saved when you
        submit and see the confirmation. You don’t need to send a separate
        email.
      </p>
      <p className="form-help">
        For adults 18 or older. This is an interest inquiry, not completed
        registration or a reserved roster spot.{" "}
        <Link href="/privacy/">How we handle your information</Link>.
      </p>
      <p className="form-help">
        Questions? Email{" "}
        <a href="mailto:info@sbbengals.com">info@sbbengals.com</a>.
      </p>
    </div>
  );
}
