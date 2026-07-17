"use client";

import Image from "next/image";
import { useState } from "react";

type CuePattern = Readonly<{
  id: string;
  name: string;
  signal: string;
  explanation: string;
  bars: readonly number[];
}>;

const patterns: readonly CuePattern[] = [
  {
    id: "slow-down",
    name: "Slow down",
    signal: "Two quick taps",
    explanation: "Pace has stayed above your range.",
    bars: [72, 72],
  },
  {
    id: "fillers",
    name: "Reset fillers",
    signal: "One calm wave",
    explanation: "A contextual filler pattern is building.",
    bars: [26, 44, 68, 92, 68, 44, 26],
  },
  {
    id: "halfway",
    name: "Halfway",
    signal: "Three light taps",
    explanation: "Half of your planned time has passed.",
    bars: [52, 52, 52],
  },
  {
    id: "target",
    name: "Target reached",
    signal: "One long hold",
    explanation: "Your planned time is up.",
    bars: [100],
  },
] as const;

export function HapticDemo() {
  const [activeId, setActiveId] = useState(patterns[1].id);
  const [run, setRun] = useState(0);
  const active = patterns.find((pattern) => pattern.id === activeId) ?? patterns[1];

  function choosePattern(id: string): void {
    setActiveId(id);
    setRun((current) => current + 1);
  }

  return (
    <div className="haptic-demo">
      <figure className="haptic-demo__engineering">
        <Image
          src="/images/voxa-engineering.webp"
          alt="Exploded engineering view of the Voxa Cue enclosure, circuit board, haptic actuator, and band"
          width={1619}
          height={971}
          sizes="(max-width: 820px) 100vw, 62vw"
        />
        <figcaption>
          Engineering visualization
          <span>Prototype signal path and haptic actuator</span>
        </figcaption>
      </figure>

      <div className="haptic-demo__panel">
        <div className="haptic-demo__controls" role="group" aria-label="Preview haptic cues">
          {patterns.map((pattern, index) => (
            <button
              key={pattern.id}
              type="button"
              className={pattern.id === activeId ? "is-active" : undefined}
              aria-pressed={pattern.id === activeId}
              onClick={() => choosePattern(pattern.id)}
            >
              <small>0{index + 1}</small>
              <span>{pattern.name}</span>
              <i aria-hidden="true">→</i>
            </button>
          ))}
        </div>

        <div className="haptic-demo__readout" aria-live="polite">
          <span>{active.name}</span>
          <strong>{active.signal}</strong>
          <p>{active.explanation}</p>
          <div className="pulse-track" key={`${active.id}-${run}`} aria-hidden="true">
            {active.bars.map((height, index) => (
              <i
                key={`${active.id}-${index}`}
                style={
                  {
                    "--pulse-height": `${height}%`,
                    "--pulse-index": index,
                    "--pulse-count": active.bars.length,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
          <button type="button" className="replay-button" onClick={() => choosePattern(active.id)}>
            Preview pattern
            <span aria-hidden="true">↻</span>
          </button>
        </div>
      </div>
    </div>
  );
}
