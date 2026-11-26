import { assetPath } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Arrow } from "./Icon";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="Santa Barbara Bengals home">
            <Image
              src={assetPath("/brand/wordmark-v1.2.webp")}
              alt="Santa Barbara Bengals"
              width={1983}
              height={793}
            />
          </Link>
          <p>
            Character First.
            <br />
            Football Forever.
          </p>
        </div>
        <div>
          <p className="footer-label">Find your team</p>
          <Link href="/programs/">The program</Link>
          <Link href="/coaches/">Coaches and volunteers</Link>
          <Link href="/safety/">Player safety</Link>
          <Link href="/sponsors/">Become a sponsor</Link>
          <Link href="/about/">Our mission and vision</Link>
          <Link href="/registration/">2027 registration</Link>
        </div>
        <div>
          <p className="footer-label">Let’s talk football</p>
          <a href={`mailto:${site.email}`}>
            {site.email} <Arrow diagonal />
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            Instagram @sb_bengals <Arrow diagonal />
          </a>
          <p className="footer-location">
            Home field
            <br />
            <strong>San Marcos High School</strong>
            <br />
            Santa Barbara, California
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Santa Barbara Bengals</span>
        <span>A 501(c)(3) nonprofit. Built for our community.</span>
        <Link href="/privacy/">Privacy &amp; your information</Link>
      </div>
    </footer>
  );
}
