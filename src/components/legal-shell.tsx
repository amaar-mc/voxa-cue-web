import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

type LegalShellProps = Readonly<{
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}>;

export function LegalShell({
  eyebrow,
  title,
  intro,
  children,
}: LegalShellProps) {
  return (
    <main className="legal-page section-shell">
      <nav className="legal-page__nav" aria-label="Legal page navigation">
        <Link href="/" aria-label="Back to Voxa Cue home">
          <BrandMark compact={false} inverse={false} />
        </Link>
        <Link href="/">Back home</Link>
      </nav>
      <article>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="legal-intro">{intro}</p>
        {children}
      </article>
    </main>
  );
}
