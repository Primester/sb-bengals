import type { CSSProperties } from "react";
export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`arrow ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function FieldLines({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 650 400"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="20"
        y="20"
        width="610"
        height="360"
        rx="2"
        stroke="currentColor"
      />
      <path
        d="M81 20v360M142 20v360M203 20v360M264 20v360M325 20v360M386 20v360M447 20v360M508 20v360M569 20v360"
        stroke="currentColor"
      />
      <path
        d="M20 140h610M20 260h610"
        stroke="currentColor"
        strokeDasharray="4 12"
      />
    </svg>
  );
}
export function Shield({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="42"
      height="48"
      viewBox="0 0 42 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 3 37 9v15c0 10-16 20-16 20S5 34 5 24V9L21 3Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="m13 23 6 6 11-12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
