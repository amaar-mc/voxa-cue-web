import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the Voxa Cue website and prototype handle data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Clear by design"
      title="Privacy"
      intro="Voxa Cue is built around a simple boundary: live speech stays on the phone, and the band only receives haptic commands."
    >
      <p>Last updated July 16, 2026.</p>

      <h2>This preview website</h2>
      <p>
        The waitlist form in this local preview stores the email and presenter role
        you enter in your browser&apos;s local storage. It does not transmit that
        information to a server. You can remove it by choosing “Use a different
        email” after submitting, or by clearing site data in your browser.
      </p>

      <h2>The Voxa Cue prototype</h2>
      <p>
        During an active session, the iPhone microphone supplies temporary audio
        buffers to Apple speech recognition and local signal processing. The
        prototype does not create or retain a raw audio recording. It saves session
        metrics, transcript text, and cue history on the device so you can review
        your delivery.
      </p>

      <h2>The wearable</h2>
      <p>
        The phone sends a compact Bluetooth command containing a cue pattern,
        intensity, repeat count, and sequence. Audio, transcript text, and identity
        are not sent to the Voxa Cue band.
      </p>

      <h2>Optional post-session AI</h2>
      <p>
        A finalized transcript and selected aggregate metrics may be sent for AI
        coaching only after you explicitly choose that action. Live haptic guidance
        does not depend on an internet connection or AI request. Raw audio is never
        included.
      </p>

      <h2>Questions</h2>
      <p>
        For prototype privacy questions, visit the <a href="/support">support page</a>.
      </p>
    </LegalShell>
  );
}
