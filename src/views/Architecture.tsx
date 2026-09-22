import { useState } from 'react'

const layers = [
  ['Public app', 'Read-only program, registry, passport and disclosure views.'],
  ['API / CMS', 'Proposed validation, editorial workflow and controlled publication boundary.'],
  ['Registry', 'Structured material, lot, batch, container and coil records.'],
  ['Evidence vault', 'Restricted document references, checksums and review metadata.'],
  ['Audit log', 'Append-only event history separated from editable content.'],
  ['Identity gates', 'Planned KYC/KYB, sanctions and jurisdiction checks by approved providers.'],
  ['Contract boundary', 'Inactive issuance integration, isolated behind final legal and technical approvals.'],
  ['Mobile clients', 'Planned authenticated review and field-capture clients.'],
] as const

export function Architecture() {
  const [selected, setSelected] = useState(0)
  return (
    <section className="page-section phase-page">
      <div className="section-heading"><span className="eyebrow">System design / proposed</span><h1>Architecture Explorer</h1><p className="lede">A layered design that keeps public information separate from evidence, identity and any future issuance path.</p></div>
      <div className="architecture-explorer">
        <div className="layer-list" role="tablist" aria-label="Architecture layers">{layers.map(([name], index) => <button type="button" role="tab" aria-selected={selected === index} aria-controls="layer-detail" id={`layer-${index}`} onClick={() => setSelected(index)} key={name}><span>{String(index + 1).padStart(2, '0')}</span>{name}</button>)}</div>
        <div className="layer-detail" role="tabpanel" id="layer-detail" aria-labelledby={`layer-${selected}`}><span className="section-index">SELECTED LAYER</span><h2>{layers[selected][0]}</h2><p>{layers[selected][1]}</p><dl><div><dt>Environment</dt><dd>Local / staging / production separation planned</dd></div><div><dt>Security</dt><dd>Least privilege, encryption, review gates and monitoring proposed</dd></div><div><dt>Ownership</dt><dd>Source, runbooks and deployment access included in handover model</dd></div></dl></div>
      </div>
      <section className="boundary-callout"><span className="status muted">Inactive boundary</span><h2>No contract, wallet or payment connection.</h2><p>Smart-contract integration remains outside this demonstration and subject to definitive legal structure, audits and owner approval.</p></section>
    </section>
  )
}
