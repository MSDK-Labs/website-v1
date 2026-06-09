export default function CertificateMotif() {
  const rows = [
    { key: 'Decision ref', val: 'AT-2026-07-14-c3a9f1e' },
    { key: 'Decision type', val: 'Portfolio recommendation' },
    { key: 'Sealed at', val: '14 Jul 2026, 09:31 UTC' },
    { key: 'Regulatory', val: 'FCA Consumer Duty · MiFID II' },
    { key: 'Retention', val: '5 years (FCA SYSC 9)' },
  ]

  return (
    <div className="certificate-motif" role="img" aria-label="Illustrative Aegis Trace certificate showing a sealed, verified AI decision record">
      <span className="certificate-illustrative">Illustrative</span>
      <div className="certificate-header">
        <span className="certificate-header-title">AEGIS TRACE CERTIFICATE</span>
        <span className="verified-badge">VERIFIED</span>
      </div>
      <div className="certificate-body">
        {rows.map((r) => (
          <div className="certificate-row" key={r.key}>
            <span className="certificate-key">{r.key}</span>
            <span className="certificate-val">{r.val}</span>
          </div>
        ))}
        <div className="certificate-row">
          <span className="certificate-key">Status</span>
          <span className="certificate-val certificate-val-verified">VERIFIED</span>
        </div>
      </div>
      <div className="certificate-footer">
        Sealed so it can never be altered, backdated, or deleted.
      </div>
    </div>
  )
}
