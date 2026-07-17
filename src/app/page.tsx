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
    title: "Set your goal",
    body: "Choose pace, time, and the cues that help.",
  },
  {
    number: "02",
    title: "Start speaking",
    body: "Your iPhone reads delivery as you present.",
  },
  {
    number: "03",
    title: "Feel the cue",
    body: "The band taps. You adjust without looking away.",
  },
] as const;

const insightMetrics = [
  ["Pace", "Words per minute against your range"],
  ["Fillers", "Clusters with transcript evidence"],
  ["Timing", "Your finish against the target"],
  ["Intonation", "Pitch movement while voiced"],
] as const;

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero__copy reveal">
          <span className="eyebrow">
            Phone-first speaking coach
          </span>
          <h1 id="hero-title">
            Stay with the room.
            <span>Your wrist keeps pace.</span>
          </h1>
          <p>
            Pace, filler patterns, and time become quiet signals on your wrist.
          </p>
          <div className="hero__actions">
            <a className="primary-button button-press" href="#waitlist">
              Join the prototype
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
            </div>
          </div>
        </div>

        <div className="story__copy reveal">
          <h2 id="story-title">Your phone listens. You stay present.</h2>
          <p>
            Live coaching runs on your iPhone, not in the cloud.
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
            <span className="eyebrow is-copper">The haptic language</span>
            <h2 id="haptics-title">One cue. One meaning.</h2>
            <p>
              Turn on only what helps.
            </p>
          </div>
          <div className="reveal">
            <HapticDemo />
          </div>
        </div>
      </section>

      <section className="insights section-shell" id="insights" aria-labelledby="insights-title">
        <div className="insights__copy reveal">
          <span className="eyebrow">After the room clears</span>
          <h2 id="insights-title">See what shifted.</h2>
          <p>
            Find the moment. Know what to practice next.
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
          <h2 id="detail-title">Made to fade away.</h2>
          <p>
            No glow, sound, or glance down.
          </p>
          <dl>
            <div>
              <dt>Distinct</dt>
              <dd>A pattern for each cue</dd>
            </div>
            <div>
              <dt>Configurable</dt>
              <dd>Choose pattern and strength</dd>
            </div>
            <div>
              <dt>Discreet</dt>
              <dd>Silent, private, eyes-free</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="privacy" id="privacy" aria-labelledby="privacy-title">
        <div className="section-shell privacy__grid">
          <div className="privacy__copy reveal">
            <span className="eyebrow is-light">Private by design</span>
            <h2 id="privacy-title">Your voice stays on your iPhone.</h2>
            <p>
              Raw audio is never saved or sent. The band receives a pattern and
              intensity, nothing more.
            </p>
          </div>
          <div className="privacy-flow reveal" aria-label="Voxa Cue data flow">
            <div>
              <span>01</span>
              <strong>iPhone microphone</strong>
              <small>Listens while you speak</small>
            </div>
            <i aria-hidden="true">→</i>
            <div>
              <span>02</span>
              <strong>Local analysis</strong>
              <small>Reads delivery on-device</small>
            </div>
            <i aria-hidden="true">→</i>
            <div>
              <span>03</span>
              <strong>Bluetooth cue</strong>
              <small>Sends pattern and strength</small>
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
            <span className="eyebrow is-light">Prototype access</span>
            <h2 id="waitlist-title">Try it in a real room.</h2>
            <p>
              Join a demo or wear test.
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
