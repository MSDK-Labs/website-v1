/* C-01..C-10 — the signature certificate object. Lives only in the hero.
   Static, zero radius (seal is SVG), zero numeric traction values. */
export default function CertificateMotif() {
  const rows: [string, string, boolean][] = [
    ['DECISION REF', 'AT-2026-••••', false],
    ['SEALED AT', '14:32:07 UTC', false],
    ['TIMESTAMP', 'INDEPENDENT AUTHORITY', false],
    ['FINGERPRINT', '••••••••A3F8', false],
    ['RETENTION', '5 YEARS (FCA SYSC 9)', false],
    ['STATUS', 'VERIFIED ✓', true],
  ]

  return (
    <div className="cert" aria-label="Illustrative example of an Aegis Trace certificate">
      <div className="cert-head" aria-hidden="true">
        <span className="cert-head-l">AEGIS TRACE</span>
        <span className="cert-head-r">ILLUSTRATIVE</span>
      </div>
      <div className="cert-rule" aria-hidden="true" />
      <div aria-hidden="true">
        {rows.map(([k, v, verified]) => (
          <div className="cert-row" key={k}>
            <span className="cert-key">{k}</span>
            <span className={verified ? 'cert-val cert-val--verified' : 'cert-val'}>{v}</span>
          </div>
        ))}
      </div>
      <svg className="cert-seal" viewBox="0 0 44 44" aria-hidden="true" focusable="false">
        <circle cx="22" cy="22" r="21" fill="#181B26" stroke="#B8956A" strokeWidth="1" />
        <text
          x="22"
          y="27"
          textAnchor="middle"
          fill="#B8956A"
          fontFamily="'Instrument Serif', serif"
          fontSize="16"
        >
          AT
        </text>
      </svg>
    </div>
  )
}
