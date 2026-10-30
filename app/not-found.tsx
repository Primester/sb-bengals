import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="container">
        <p className="eyebrow">404 / Out of bounds</p>
        <h1>
          LET’S GET YOU
          <br />
          BACK IN THE GAME.
        </h1>
        <p>That page isn’t here. Your team is just a click away.</p>
        <Link className="button" href="/">
          Back to the Bengals →
        </Link>
      </div>
    </main>
  );
}
