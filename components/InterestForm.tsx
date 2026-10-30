"use client";
import { useState, useEffect, useRef, type FormEvent } from "react";
import { buildInterestDraft, grades, interests } from "@/lib/interest";
import { Arrow } from "./Icon";
export function InterestForm() {
  const [draft, setDraft] = useState<ReturnType<
    typeof buildInterestDraft
  > | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const draftHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (draft) draftHeading.current?.focus();
  }, [draft]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = new FormData(e.currentTarget);
    try {
      setDraft(
        buildInterestDraft({
          parentName: String(data.get("parentName") ?? ""),
          parentEmail: String(data.get("parentEmail") ?? ""),
          grade: String(data.get("grade") ?? ""),
          interest: String(data.get("interest") ?? ""),
          message: String(data.get("message") ?? ""),
          adultConsent: data.get("adultConsent") === "on",
        }),
      );
      setCopied(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Please check your information.",
      );
    }
  }
  async function copy() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(
        `To: info@sbbengals.com\nSubject: ${draft.subject}\n\n${draft.body}`,
      );
      setCopied(true);
    } catch {
      setError(
        "Copy is unavailable in this browser. Select the message below, or email info@sbbengals.com directly.",
      );
    }
  }
  if (draft)
    return (
      <div className="interest-form draft-panel">
        <span className="eyebrow">One more step</span>
        <h3 ref={draftHeading} tabIndex={-1}>
          Your interest email is ready.
        </h3>
        <p>
          Open your email app, review the message, and press Send.{" "}
          <strong>Nothing has been sent yet.</strong>
        </p>
        <a className="button button-full" href={draft.href}>
          Open my email app <Arrow diagonal />
        </a>
        <button className="text-button" onClick={copy} type="button">
          {copied ? "Email copied" : "Copy email instead"} <Arrow />
        </button>
        <p className="form-help">
          Send to <a href="mailto:info@sbbengals.com">info@sbbengals.com</a>{" "}
          from any email account.
        </p>
        <details className="email-preview">
          <summary>Review your prepared message</summary>
          <pre>{draft.body}</pre>
        </details>
        <p role="status" aria-live="polite">
          {copied
            ? "Copied. Paste into an email and send it to the league."
            : ""}
        </p>
        {error && (
          <p role="alert" className="form-error">
            {error}
          </p>
        )}
        <button
          type="button"
          className="text-button"
          onClick={() => {
            setDraft(null);
            setError("");
          }}
        >
          Start a new inquiry
        </button>
      </div>
    );
  return (
    <form
      className="interest-form"
      onSubmit={submit}
      action="mailto:info@sbbengals.com"
      method="post"
      encType="text/plain"
    >
      <noscript>
        <p className="form-help">
          Please email info@sbbengals.com directly. JavaScript is needed to
          prepare an email with this form.
        </p>
      </noscript>
      <div className="form-heading">
        <span className="eyebrow">Your next chapter starts here</span>
        <h3>Let’s get to know you.</h3>
      </div>
      <div className="form-row">
        <label htmlFor="parentName">
          Your name
          <input
            id="parentName"
            name="parentName"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Parent or adult name"
          />
        </label>
        <label htmlFor="parentEmail">
          Your email
          <input
            id="parentEmail"
            name="parentEmail"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="interest">
          I’m interested in
          <select id="interest" name="interest" defaultValue="Player interest">
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
        <label htmlFor="grade">
          Player’s current grade{" "}
          <span className="optional">(if applicable)</span>
          <select name="grade" id="grade" defaultValue="Not sure yet">
            {grades.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </label>
      </div>
      <label htmlFor="message">
        Anything you’d like us to know?{" "}
        <span className="optional">(optional)</span>
        <textarea
          id="message"
          name="message"
          maxLength={600}
          rows={3}
          placeholder="Questions about the program, volunteering, or supporting the Bengals…"
        />
      </label>
      <label className="checkbox-label">
        <input type="checkbox" name="adultConsent" required />
        <span>
          I’m 18 or older and understand this prepares an email inquiry, not a
          player registration.
        </span>
      </label>
      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}
      <button className="button button-full" type="submit" disabled={!ready}>
        {ready ? "Prepare my interest email" : "Loading email form…"} <Arrow />
      </button>
      <p className="form-help">
        You’ll review and send it from your email app. This website does not
        store your form details. Please don’t include medical records or a
        child’s full name.
      </p>
    </form>
  );
}
