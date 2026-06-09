/* T-07 — mono eyebrow: bronze dash, optional bronze number, pipe, uppercased label */
export default function Eyebrow({
  n,
  children,
  plain = false,
  onBand = false,
}: {
  n?: string
  children: React.ReactNode
  plain?: boolean
  onBand?: boolean
}) {
  const cls = ['eyebrow', plain ? 'eyebrow--plain' : '', onBand ? 'eyebrow--on-band' : '']
    .filter(Boolean)
    .join(' ')
  return (
    <div className={cls}>
      {n ? (
        <>
          <span className="eyebrow-n">{n}</span>{' | '}
        </>
      ) : null}
      {children}
    </div>
  )
}
