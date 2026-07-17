"use client";

import { FormEvent, useState } from "react";
import {
  createWaitlistEntry,
  normalizeEmail,
  validateEmail,
} from "@/lib/waitlist";

const STORAGE_KEY = "voxa-cue-waitlist-preview";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student presenter");
  const [error, setError] = useState<string | null>(null);
  const [savedEmail, setSavedEmail] = useState<string | null>(null);

  function submit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const validationError = validateEmail(email);

    if (validationError !== null) {
      setError(validationError);
      return;
    }

    const entry = createWaitlistEntry(email, role, new Date().toISOString());
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
    setEmail(entry.email);
    setSavedEmail(entry.email);
    setError(null);
  }

  if (savedEmail !== null) {
    return (
      <div className="waitlist-success" role="status">
        <span className="waitlist-success__signal" aria-hidden="true">
          ✓
        </span>
        <div>
          <strong>You are on the preview list.</strong>
          <p>
            We saved {savedEmail} on this device. The production form will connect
            before launch.
          </p>
          <button
            type="button"
            onClick={() => {
              window.localStorage.removeItem(STORAGE_KEY);
              setSavedEmail(null);
              setEmail("");
            }}
          >
            Use a different email
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={submit} noValidate>
      <div className="waitlist-form__fields">
        <label>
          <span>Email address</span>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            aria-invalid={error !== null}
            aria-describedby={error === null ? "waitlist-note" : "waitlist-error"}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error !== null) {
                setError(validateEmail(event.target.value));
              }
            }}
            onBlur={() => {
              if (email.length > 0) {
                setEmail(normalizeEmail(email));
              }
            }}
          />
        </label>
        <label>
          <span>I present as a</span>
          <select value={role} onChange={(event) => setRole(event.target.value)}>
            <option>Student presenter</option>
            <option>Early-career professional</option>
            <option>Coach or educator</option>
            <option>Speech and debate competitor</option>
          </select>
        </label>
      </div>

      {error !== null ? (
        <p className="form-message is-error" id="waitlist-error">
          {error}
        </p>
      ) : (
        <p className="form-message" id="waitlist-note">
          Local preview only. Nothing is transmitted from this form yet.
        </p>
      )}

      <button className="primary-button button-press" type="submit">
        Save my spot
        <span className="button-orb" aria-hidden="true">
          ↗
        </span>
      </button>
    </form>
  );
}
