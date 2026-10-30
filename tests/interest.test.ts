import { test } from "node:test";
import assert from "node:assert/strict";
import { buildInterestDraft } from "../lib/interest.ts";
const valid = {
  parentName: "Alex Parent",
  parentEmail: "alex@example.com",
  grade: "5th grade",
  interest: "Player interest",
  message: "First-time player — can we learn more?",
  adultConsent: true,
};
test("draft targets the league email and preserves special characters safely", () => {
  const d = buildInterestDraft({
    ...valid,
    message: "Questions & answers? A + B #1\nThanks!",
  });
  const u = new URL(d.href);
  assert.equal(u.pathname, "info@sbbengals.com");
  assert.equal(u.searchParams.get("subject"), "Bengals — Player interest");
  assert.match(
    u.searchParams.get("body") ?? "",
    /Questions & answers\? A \+ B #1\nThanks!/,
  );
  assert.match(d.body, /not completed player registration/);
});
test("rejects missing adult consent and malformed email", () => {
  assert.throws(
    () => buildInterestDraft({ ...valid, adultConsent: false }),
    /adult/,
  );
  assert.throws(
    () => buildInterestDraft({ ...valid, parentEmail: "not-an-email" }),
    /valid/,
  );
});
test("rejects invalid form options and excessive messages", () => {
  assert.throws(
    () => buildInterestDraft({ ...valid, grade: "unknown" }),
    /grade/,
  );
  assert.throws(
    () => buildInterestDraft({ ...valid, interest: "Payments" }),
    /involved/,
  );
  assert.throws(
    () => buildInterestDraft({ ...valid, message: "a".repeat(601) }),
    /600/,
  );
});
test("normalizes line breaks in parent identity without adding mail headers", () => {
  const d = buildInterestDraft({
    ...valid,
    parentName: "Alex\r\nBcc: unwanted@example.com",
  });
  const u = new URL(d.href);
  assert.equal(u.searchParams.size, 2);
  assert.match(d.body, /Parent \/ adult name: Alex Bcc: unwanted@example.com/);
});
