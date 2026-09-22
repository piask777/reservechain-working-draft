import { useState } from 'react'

const phases = [
  { name: 'Foundation', window: 'Weeks 1-3', output: 'Discovery, data model, design system and environment plan', gate: 'Owner approves requirements and information architecture' },
  { name: 'Platform', window: 'Weeks 4-8', output: 'Public application, CMS workflow, registry and evidence interfaces', gate: 'Accessibility, security and acceptance review' },
  { name: 'Assurance', window: 'Weeks 9-12', output: 'Integration testing, operational documentation and training', gate: 'Owner accepts tested release candidate and handover package' },
  { name: 'Future gates', window: 'Schedule pending', output: 'Identity, custody and contract integrations only after approvals', gate: 'Legal, provider, audit and jurisdiction decisions completed' },
] as const

export function Delivery() {
  const [selected, setSelected] = useState(0)
  return (
    <section className="page-section phase-page">
      <div className="section-heading"><span className="eyebrow">Implementation roadmap / indicative</span><h1>Delivery Plan</h1><p className="lede">A gated path from confirmed requirements to an owned, documented platform.</p></div>
      <div className="schedule-tabs" role="tablist" aria-label="Delivery phases">{phases.map((phase, index) => <button type="button" role="tab" aria-selected={selected === index} aria-controls="phase-detail" id={`phase-${index}`} onClick={() => setSelected(index)} key={phase.name}><small>{phase.window}</small>{phase.name}</button>)}</div>
      <article className="schedule-detail" role="tabpanel" id="phase-detail" aria-labelledby={`phase-${selected}`}><span className="section-index">PHASE {selected + 1}</span><h2>{phases[selected].name}</h2><div><h3>Deliverable</h3><p>{phases[selected].output}</p></div><div><h3>Acceptance gate</h3><p>{phases[selected].gate}</p></div></article>
      <div className="delivery-grid"><section><span className="section-index">DEPENDENCIES / OWNER INPUTS</span><h2>Required decisions</h2><ul><li>Approved corporate and legal structure</li><li>Confirmed jurisdictions and eligibility policy</li><li>Selected custody, inspection and identity providers</li><li>Approved source documents, translations and brand assets</li></ul></section><section><span className="section-index">EXPLICIT EXCLUSIONS</span><h2>Not in this prototype</h2><ul><li>Token issuance, supply or pricing</li><li>Wallet, payment or exchange functions</li><li>KYC/KYB or sanctions processing</li><li>Live custody, insurance or reserve attestations</li></ul></section></div>
      <p className="plan-note">Dates are indicative planning windows, not a commercial commitment. Third-party review and provider timelines remain unconfirmed.</p>
    </section>
  )
}
