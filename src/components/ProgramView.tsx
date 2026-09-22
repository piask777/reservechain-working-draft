import { Link } from 'react-router-dom'
import { MetalArt } from './MetalArt'

type ProgramProps = {
  type: 'copper' | 'nickel'
  title: string
  subtitle: string
  description: string
  fields: string[]
  evidence: string[]
}

export function ProgramView({ type, title, subtitle, description, fields, evidence }: ProgramProps) {
  return (
    <>
      <section className="program-hero page-section">
        <div className="program-copy">
          <span className="eyebrow">Initial program / proposed</span>
          <h1>{title}</h1>
          <p className="lede">{subtitle}</p>
          <p>{description}</p>
          <div className="status-row"><span className="status amber">In development</span><span className="status muted">Tokenization inactive</span></div>
          <div className="program-switch" aria-label="Program switcher">
            <Link className={type === 'copper' ? 'active' : ''} to="/copper">Copper powder</Link>
            <Link className={type === 'nickel' ? 'active' : ''} to="/nickel">Nickel wire</Link>
          </div>
        </div>
        <MetalArt type={type} />
      </section>

      <section className="page-section split-section">
        <div>
          <span className="section-index">01 / DATA MODEL</span>
          <h2>Supported record fields</h2>
          <p>Structured fields prepare each illustrative material record for review without asserting verification or ownership.</p>
        </div>
        <div className="field-grid">
          {fields.map((field, index) => <div className="field" key={field}><span>{String(index + 1).padStart(2, '0')}</span>{field}</div>)}
        </div>
      </section>

      <section className="page-section evidence-panel">
        <div>
          <span className="section-index">02 / EVIDENCE</span>
          <h2>Verification workspace</h2>
          <p>Documents would move through controlled review gates. No uploaded evidence in this demonstration represents a live asset.</p>
          <Link className="text-link" to="/passport">View illustrative passport <span aria-hidden="true">→</span></Link>
        </div>
        <div className="document-stack">
          {evidence.map((item, index) => (
            <article className="document-row" key={item}>
              <span className="doc-icon" aria-hidden="true">{index + 1}</span>
              <div><h3>{item}</h3><p>Required field set / awaiting evidence</p></div>
              <span className="status muted">Not submitted</span>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section registry-preview">
        <div><span className="section-index">03 / REGISTRY STRUCTURE</span><h2>Lot-level traceability, by design</h2></div>
        <div className="registry-line"><span>Material intake</span><i /><span>Evidence review</span><i /><span>Registry record</span><i /><span>Approval gate</span></div>
        <button className="disabled-action" type="button" disabled>Tokenization unavailable</button>
      </section>
    </>
  )
}
