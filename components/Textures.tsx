/* X-01..X-07 — deterministic generative textures for dark band panels only.
   Server components, no animation, no external assets, seeded for build
   reproducibility (server/client identical → no hydration warnings). */

import type { CSSProperties } from 'react'

// X-03 mulberry32
const mulberry32 = (a: number) => () => {
  a |= 0
  a = (a + 0x6d2b79f5) | 0
  let t = Math.imul(a ^ (a >>> 15), 1 | a)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

const FILL = '#F2F0EB'

/* X-01 — diamond halftone (Ethyca footer/pre-footer band) */
export function HalftoneField({
  width = 1200,
  height = 620,
  cell = 18,
  minSize = 2,
  maxSize = 9,
  opacity = 0.07,
  className,
  style,
}: {
  width?: number
  height?: number
  cell?: number
  minSize?: number
  maxSize?: number
  opacity?: number
  className?: string
  style?: CSSProperties
}) {
  const cols = Math.floor(width / cell)
  const rows = Math.floor(height / cell)
  const rects = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const t = (col + row) / (cols + rows)
      const e = t * t
      const s = Math.max(1, Math.round(minSize + (maxSize - minSize) * e))
      const cx = col * cell + cell / 2
      const cy = row * cell + cell / 2
      rects.push(
        <rect
          key={`${col}-${row}`}
          x={Math.round(cx - s / 2)}
          y={Math.round(cy - s / 2)}
          width={s}
          height={s}
          transform={`rotate(45 ${cx} ${cy})`}
        />,
      )
    }
  }
  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      focusable="false"
    >
      <g fill={FILL} opacity={opacity}>
        {rects}
      </g>
    </svg>
  )
}

/* X-02 — isometric dot-matrix plane (Ethyca Fides hero) */
export function DotMatrixPlane({
  cols = 64,
  rows = 40,
  spacing = 10,
  r = 1.2,
  opacity = 0.08,
  seed = 42,
  annotate = false,
  className,
  style,
}: {
  cols?: number
  rows?: number
  spacing?: number
  r?: number
  opacity?: number
  seed?: number
  annotate?: boolean
  className?: string
  style?: CSSProperties
}) {
  const rand = mulberry32(seed)
  const densities = [0.85, 0.25, 0.6, 0.12, 0.7, 0.35, 0.9, 0.2]
  const circles = []
  for (let c = 0; c < cols; c++) {
    const band = Math.floor(c / 8)
    const density = densities[band % densities.length]
    for (let rr = 0; rr < rows; rr++) {
      if (rand() < density) {
        circles.push(<circle key={`${c}-${rr}`} cx={c * spacing} cy={rr * spacing} r={r} />)
      }
    }
  }
  const w = cols * spacing
  const h = rows * spacing
  // skewed bounds are larger; widen viewBox so nothing clips
  const vbW = Math.ceil(w + h * 0.62)
  const vbH = Math.ceil(h + w * 0.18)
  return (
    <svg
      className={className}
      style={style}
      width={vbW}
      height={vbH}
      viewBox={`${-h * 0.62} 0 ${vbW} ${vbH}`}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="matrix(1, 0.18, -0.62, 0.5, 0, 0)" fill={FILL} opacity={opacity}>
        {circles}
      </g>
      {annotate ? (
        <text
          x={Math.round(w * 0.18)}
          y={Math.round(h * 0.62)}
          transform={`rotate(-10 ${Math.round(w * 0.18)} ${Math.round(h * 0.62)})`}
          fill={FILL}
          opacity={0.4}
          fontFamily="'JetBrains Mono', monospace"
          fontSize={10}
          letterSpacing="0.08em"
        >
          DECISION RECORD 00481
        </text>
      ) : null}
    </svg>
  )
}
