import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for the Voxa Cue prototype website.",
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Prototype terms"
      title="Terms of use"
      intro="This site presents a working prototype that is still being tested. Use it as a product demonstration, not as a promise of final hardware or service availability."
    >
      <p>Last updated July 16, 2026.</p>

      <h2>Prototype status</h2>
      <p>
        Voxa Cue hardware, software, analytics, and availability may change as the
        product is tested. Images on this site are product visualizations. App
        metrics shown on the page are clearly labeled illustrative session data.
      </p>

      <h2>Appropriate use</h2>
      <p>
        Voxa Cue is a practice and presentation aid. It does not guarantee speaking
        outcomes and is not a medical, accessibility, or safety device. Do not rely
        on haptic cues where distraction could create risk.
      </p>

      <h2>Content and ownership</h2>
      <p>
        The Voxa Cue name, product design, site content, and original imagery belong
        to the Voxa Cue project team unless another owner is stated. You may not
        represent the prototype as your own product or redistribute site assets as a
        separate commercial package.
      </p>

      <h2>Changes</h2>
      <p>
        These terms may be updated as testing expands or the product launches. A new
        effective date will appear at the top of this page when that happens.
      </p>
    </LegalShell>
  );
}
