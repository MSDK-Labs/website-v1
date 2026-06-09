# Changelog

All notable changes to the Aegis Trace marketing site are documented in this file.

## 2026-06-09 — Light institutional redesign

Full redesign of the marketing site to a warm, near-monochrome, narrative-led
register aimed at non-technical regulated-industry buyers (compliance officers,
heads of risk), with all implementation detail relocated to `/developers`.

### Design system
- Polarity flip from the dark navy theme to a warm off-white base
  (`--bg #F7F4EE`, `--text #14161F`, `--muted #6B6B66`, `--accent #B8956A`,
  `--verified #15803D`, `--card-surface #FFFFFF`).
- The bronze accent is now used only for non-text marks (ticks, focus rings,
  dividers, the certificate seal) to preserve WCAG AA contrast on readable text.
- Display headings set in Instrument Serif; body and UI in Inter (400/500/600);
  JetBrains Mono confined to the certificate motif and `/developers` code.

### Information architecture
- Homepage restructured into six numbered narrative beats: 01 Why now,
  02 What Aegis Trace is, 03 How it works, 04 Where it applies, 05 Proof,
  06 Get started.
- Primary navigation: Product · How it works · Use cases · Trust · About,
  with a single "Request access" CTA. Developers and Insights moved to the footer.
- New `/trust` page (merges the former security, deployment, and regulatory
  content). New `/about` page (merges Company and Team).
- `/company`, `/team`, and `/regulatory` are now redirect stubs (to `/about`,
  `/about`, and `/trust` respectively) so existing inbound links do not 404.
- `/use-cases` keeps its five narratives; all JSON/terminal cards removed.
- `/how-it-works` is now the canonical, plain-English explainer with a
  "For engineers" link to `/developers`.

### Content removed (unverified or implied-traction claims)
- Fabricated dashboard metrics (record counts, pass rates) removed; replaced
  with a clearly labelled "Illustrative" certificate motif containing no
  numeric traction values.
- Removed unqualified "GDPR Compliant" and "EU AI Act Ready" badges; footer
  badges are now "SOC 2 Type II: In Progress", "ISO 27001: Pursuing",
  "UK GDPR aligned", and "Built for EU AI Act Article 12".
- Removed unverified latency figures ("sub-200ms p99", "sub-2s") site-wide;
  replaced with "in seconds".

### Factual corrections
- **D1/D2** — FCA SYSC 9 retention corrected from seven years to **five years**
  (certificate motif and `/trust` regulatory mapping).
- **D3** — blog post: "made in the last seven years" → "made in the last five years".
- EU AI Act Annex III enforcement date tightened to **2 August 2026**, with the
  correct Article 12 penalty exposure stated as **up to €15 million or 3% of
  global turnover** for record-keeping failures.

### API documentation correction
- Ingestion endpoint corrected from `POST /v1/audit` to **`POST /v1/certificates`**.
- Request body corrected to `agent_id`, `decision_type`, `decision_payload`,
  `regulatory_context` (`FCA_CONSUMER_DUTY | EU_AI_ACT_ART12 | GDPR_ART22`),
  and optional `client_ref`. Removed `tenant_id` (derived from API key) and the
  client-supplied input hash (computed server-side). Auth via `X-API-Key`.
  All five example payloads rewritten to this schema.

### Repo hygiene
- Consolidated the two duplicate GitHub Pages workflows into one (`deploy.yml`);
  removed `nextjs.yml`.
- Pinned devDependencies to versions consistent with Next 14 / React 18
  (`@types/react@^18`, `typescript@^5`, `@types/node@^20`).
- `public/CNAME`, `public/.nojekyll`, `next.config.js` (static export,
  `trailingSlash`, `basePath`), and the Formspree form ID are unchanged.
