export type Interest = {
  parentName: string;
  parentEmail: string;
  grade: string;
  interest: string;
  message: string;
  adultConsent: boolean;
};
export const interests = [
  "Player interest",
  "Coaching or volunteering",
  "Sponsorship",
] as const;
export const grades = [
  "Not sure yet",
  "Kindergarten",
  "1st grade",
  "2nd grade",
  "3rd grade",
  "4th grade",
  "5th grade",
  "6th grade",
  "7th grade",
  "8th grade",
] as const;
const singleLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();
export function buildInterestDraft(input: Interest) {
  const name = singleLine(input.parentName);
  const email = singleLine(input.parentEmail);
  if (!name || name.length > 100)
    throw new Error("Please enter your name (up to 100 characters).");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
    throw new Error("Please enter a valid parent or guardian email.");
  if (!input.adultConsent)
    throw new Error("An adult must prepare this inquiry.");
  if (!(interests as readonly string[]).includes(input.interest))
    throw new Error("Choose how you would like to get involved.");
  if (!(grades as readonly string[]).includes(input.grade))
    throw new Error("Choose a grade or select Not sure yet.");
  if (input.message.length > 600)
    throw new Error("Please keep your message to 600 characters.");
  const subject = `Bengals — ${input.interest}`;
  const body = [
    `Hello Santa Barbara Bengals,`,
    "",
    `I'd like to learn more about ${input.interest.toLowerCase()}.`,
    "",
    `Parent / adult name: ${name}`,
    `Contact email: ${email}`,
    `Player grade (if applicable): ${input.grade}`,
    "",
    input.message.trim(),
    "",
    "Please send me the relevant program information and next steps.",
    "",
    "I understand this is an interest inquiry, not completed player registration.",
  ].join("\n");
  return {
    subject,
    body,
    href: `mailto:info@sbbengals.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
