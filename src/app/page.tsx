import Image from "next/image";
import Link from "next/link";
import { AppPreview } from "@/components/app-preview";
import { BrandMark } from "@/components/brand-mark";
import { HapticDemo } from "@/components/haptic-demo";
import { SiteHeader } from "@/components/site-header";
import { WaitlistForm } from "@/components/waitlist-form";

const liveSteps = [
  {
    number: "01",
    title: "Put the phone aside",
    body: "The built-in iPhone microphone listens.",
  },
  {
    number: "02",
    title: "Voxa Cue reads delivery",
    body: "On-device processing watches pace, fillers, and time.",
  },
  {
    number: "03",
    title: "Your wrist gets the signal",
    body: "Bluetooth sends one distinct haptic pattern.",
  },
  {
    number: "04",
    title: "You keep speaking",
    body: "No glance, notification, or break in eye contact.",
  },
] as const;

const insightMetrics = [
  ["Pace", "Words per minute and time in your chosen range"],
  ["Contextual fillers", "Counts with transcript evidence, not a blind word list"],
  ["Timing", "Finish against the target you set before speaking"],
  ["Intonation", "Pitch range summarized in semitones from voiced audio"],
  ["Energy", "Variation in vocal level across the session"],
  ["Talk ratio", "How much of the session contained detected speech"],
] as const;

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero__copy reveal">
          <span className="eyebrow">
            Private coaching, right on cue
          </span>
          <h1 id="hero-title">
            Stay with the room.
            <em>Your wrist will know.</em>
          </h1>
          <p>
            Voxa Cue turns pace, filler patterns, and timing into private haptic
            guidance. No screen. No break in eye contact.
          </p>
          <div className="hero__actions">
            <a className="primary-button button-press" href="#waitlist">
              Join the first wearers
              <span className="button-orb" aria-hidden="true">
                ↗
              </span>
            </a>
            <a className="text-link" href="#how-it-works">
              See the live loop
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="media-shell">
            <div className="media-core">
              <Image
                src="/images/voxa-hero-product.webp"
                alt="Two graphite Voxa Cue haptic wristbands on a warm ivory plinth"
                width={1672}
                height={941}
                sizes="(max-width: 768px) 100vw, 62vw"
                priority
              />
              <div className="hero__caption">
                <span>Voxa Cue</span>
                <p>Private cues for pace, fillers, and time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story section-shell" id="how-it-works" aria-labelledby="story-title">
        <div className="story__media reveal">
          <div className="media-shell">
            <div className="media-core">
              <Image
                src="/images/voxa-presenter.webp"
                alt="A presenter wearing Voxa Cue while speaking to a small audience with the phone set aside"
                width={1672}
                height={941}
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <span className="image-note">Phone aside. Attention forward.</span>
            </div>
          </div>
        </div>

        <div className="story__copy reveal">
          <span className="eyebrow">The live loop</span>
          <h2 id="story-title">Your phone listens. You keep the room.</h2>
          <p>
            Live decisions stay on the iPhone and never wait for the network.
          </p>
        </div>

        <ol className="live-steps">
          {liveSteps.map((step) => (
            <li key={step.number} className="reveal">
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="haptics" id="haptics" aria-labelledby="haptics-title">
        <div className="section-shell">
          <div className="section-heading reveal">
            <span className="eyebrow is-copper">A language you can feel</span>
            <h2 id="haptics-title">One language for four moments.</h2>
            <p>
              Choose the patterns and strength that help. Leave the rest off.
            </p>
          </div>
          <div className="reveal">
            <HapticDemo />
          </div>
          <p className="haptics__note reveal">
            Filler cues wait for a pattern. One calm wave, not a buzz for every word.
          </p>
        </div>
      </section>

      <section className="insights section-shell" id="insights" aria-labelledby="insights-title">
        <div className="insights__copy reveal">
          <span className="eyebrow">After the room clears</span>
          <h2 id="insights-title">See what changed.</h2>
          <p>
            Review the metric, find the transcript evidence, and choose one thing
            to practice.
          </p>
          <div className="metric-list">
            {insightMetrics.map(([name, definition]) => (
              <div key={name}>
                <span>{name}</span>
                <p>{definition}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="insights__preview reveal">
          <AppPreview />
        </div>
      </section>

      <section className="detail section-shell" aria-labelledby="detail-title">
        <div className="detail__image reveal">
          <div className="media-shell is-portrait">
            <div className="media-core">
              <Image
                src="/images/voxa-wrist-detail.webp"
                alt="Close view of a graphite Voxa Cue band worn on a gesturing wrist"
                width={941}
                height={1672}
                sizes="(max-width: 768px) 100vw, 38vw"
              />
            </div>
          </div>
        </div>
        <div className="detail__copy reveal">
          <span className="eyebrow is-copper">Designed to disappear</span>
          <h2 id="detail-title">Nothing else on your wrist.</h2>
          <p>
            Voxa Cue has one job: help you notice when delivery begins to drift.
          </p>
          <dl>
            <div>
              <dt>Distinct</dt>
              <dd>Separate patterns for pace, fillers, halfway, and target time</dd>
            </div>
            <div>
              <dt>Configurable</dt>
              <dd>Choose which cues are active, then tune pattern and strength</dd>
            </div>
            <div>
              <dt>Discreet</dt>
              <dd>No screen glow, audible alert, or visible glance away</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="privacy" id="privacy" aria-labelledby="privacy-title">
        <div className="section-shell privacy__grid">
          <div className="privacy__copy reveal">
            <span className="eyebrow is-light">Private by design</span>
            <h2 id="privacy-title">Live guidance stays on your iPhone.</h2>
            <p>
              Raw audio is not retained or uploaded. The band receives cue bytes,
              not your voice or transcript.
            </p>
          </div>
          <div className="privacy-flow reveal" aria-label="Voxa Cue data flow">
            <div>
              <span>01</span>
              <strong>iPhone microphone</strong>
              <small>Transient audio buffers</small>
            </div>
            <i aria-hidden="true">→</i>
            <div>
              <span>02</span>
              <strong>Local analysis</strong>
              <small>Pace, fillers, timing, voice</small>
            </div>
            <i aria-hidden="true">→</i>
            <div>
              <span>03</span>
              <strong>Bluetooth cue</strong>
              <small>Pattern and intensity only</small>
            </div>
          </div>
          <aside className="consent-note reveal">
            <span>Optional, after the session</span>
            <p>
              AI can analyze a finalized transcript only after you choose to send it.
            </p>
          </aside>
        </div>
      </section>

      <section className="waitlist section-shell" id="waitlist" aria-labelledby="waitlist-title">
        <div className="waitlist__shell reveal">
          <div className="waitlist__copy">
            <span className="eyebrow is-light">Come practice with us</span>
            <h2 id="waitlist-title">Take Voxa Cue into the room.</h2>
            <p>
              Join prototype demos, wear tests, and the first real presentations.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div className="site-footer__brand">
          <BrandMark compact={false} inverse={false} />
          <p>Discreet guidance. Confident delivery.</p>
        </div>
        <div className="site-footer__links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/support">Support</Link>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="site-footer__legal">© 2026 Voxa Cue. Prototype in development.</p>
      </footer>
    </main>
  );
}
