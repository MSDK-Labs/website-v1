/* PH-01..05 — shared interior page header band. */
import Eyebrow from './Eyebrow'
import { DotMatrixPlane } from './Textures'

export default function PageHeader({
  eyebrow,
  head,
  tail,
  lead,
  texture = false,
}: {
  eyebrow: string
  head: string
  tail: string
  lead?: string
  texture?: boolean
}) {
  return (
    <header className="pageheader">
      {texture ? (
        <div className="texture">
          <DotMatrixPlane opacity={0.06} style={{ position: 'absolute', top: '50%', right: '-4%', transform: 'translateY(-50%)' }} />
        </div>
      ) : null}
      <div className="container">
        <div className="grid12">
          <div style={{ gridColumn: '1 / -1' }}>
            <Eyebrow onBand>{eyebrow}</Eyebrow>
          </div>
          <h1 className="display-page ph-h1">
            {head} <span className="tone2">{tail}</span>
          </h1>
          {lead ? <p className="body ph-lead">{lead}</p> : null}
        </div>
      </div>
    </header>
  )
}
