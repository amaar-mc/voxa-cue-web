import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Support",
  description: "Prototype support and compatibility information for Voxa Cue.",
};

export default function SupportPage() {
  return (
    <LegalShell
      eyebrow="Prototype support"
      title="We will get you back on cue."
      intro="Voxa Cue is in active prototype testing. These checks resolve the most common session and band issues."
    >
      <h2>The band does not appear</h2>
      <ul>
        <li>Power the Voxa Cue band and keep it close to the iPhone.</li>
        <li>Confirm Bluetooth is enabled and the app has Bluetooth permission.</li>
        <li>Disconnect the band from another Bluetooth utility before scanning again.</li>
      </ul>

      <h2>The band connects but does not vibrate</h2>
      <ul>
        <li>Open Device Lab in the app and send a test pattern.</li>
        <li>Check the DRV2605L and motor wiring before changing app settings.</li>
        <li>Reconnect the band after flashing new wearable firmware.</li>
      </ul>

      <h2>Speech metrics do not start</h2>
      <ul>
        <li>Allow microphone and speech recognition access in iPhone Settings.</li>
        <li>Use the built-in iPhone microphone, not an external audio input.</li>
        <li>Keep the phone within practical speaking distance in a quiet room.</li>
      </ul>

      <h2>Prototype compatibility</h2>
      <p>
        The current app targets iPhone on iOS 26 or later. The wearable prototype
        uses a Nano 33 IoT, DRV2605L haptic driver, and a 3 V linear resonant actuator.
      </p>

      <h2>Need hands-on help?</h2>
      <p>
        Bring the phone, Voxa Cue band, and USB cable to the project team so firmware,
        Bluetooth, and motor output can be checked together.
      </p>
    </LegalShell>
  );
}
