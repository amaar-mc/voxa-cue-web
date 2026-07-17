export function AppPreview() {
  return (
    <div className="app-preview" aria-label="Illustrative Voxa Cue session summary">
      <div className="phone-shell">
        <div className="phone-screen">
          <div className="phone-status" aria-hidden="true">
            <span>9:41</span>
            <i />
          </div>
          <div className="phone-heading">
            <div>
              <span>Session complete</span>
              <strong>Strong finish.</strong>
            </div>
            <div className="score-ring">
              <strong>87</strong>
              <span>score</span>
            </div>
          </div>

          <div className="phone-metrics">
            <article>
              <span>Pace</span>
              <strong>148</strong>
              <small>wpm</small>
              <i className="metric-spark metric-spark--pace" />
            </article>
            <article>
              <span>Fillers</span>
              <strong>3</strong>
              <small>bursts</small>
              <i className="metric-spark metric-spark--fillers" />
            </article>
            <article>
              <span>Timing</span>
              <strong>+0:04</strong>
              <small>from target</small>
              <i className="metric-spark metric-spark--timing" />
            </article>
            <article>
              <span>Intonation</span>
              <strong>6.2</strong>
              <small>semitone range</small>
              <i className="metric-spark metric-spark--voice" />
            </article>
          </div>

          <div className="phone-trend">
            <div>
              <span>Pace consistency</span>
              <strong>Getting steadier</strong>
            </div>
            <svg viewBox="0 0 260 82" role="img" aria-label="Pace consistency trend rising across six sessions">
              <defs>
                <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#0B756F" stopOpacity="0.24" />
                  <stop offset="1" stopColor="#0B756F" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="trend-area" d="M0,72 C24,65 40,69 62,54 C82,40 101,51 123,38 C145,24 169,31 190,20 C215,8 236,15 260,5 L260,82 L0,82 Z" />
              <path className="trend-line" d="M0,72 C24,65 40,69 62,54 C82,40 101,51 123,38 C145,24 169,31 190,20 C215,8 236,15 260,5" />
            </svg>
          </div>

          <p className="phone-fixture">Illustrative session</p>
        </div>
      </div>
    </div>
  );
}
