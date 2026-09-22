import { useState } from 'react'

const layers = [
  ['Public app', 'Read-only program, registry, passport and disclosure views.'],
  ['API / CMS', 'Proposed validation, editorial workflow and controlled publication boundary.'],
  ['Registry', 'Structured material, lot, batch, container and coil records.'],
  ['Evidence vault', 'Restricted document references, checksums and review metadata.'],
  ['Audit log', 'Append-only event history separated from editable content.'],
  ['Identity gates', 'Planned KYC/KYB, sanctions and jurisdiction checks by approved providers.'],
  ['Contract boundary', 'Inactive issuance integration isolated behind final legal and technical approvals.'],
  ['Mobile clients', 'Planned authenticated review and field-capture clients.'],
] as const

const permissions = [
  ['Public visitor', 'Published/redacted', 'None', 'None', 'None'],
  ['Editor', 'Draft/read', 'Create metadata', 'None', 'None'],
  ['Reviewer', 'Review/read', 'Review', 'Read', 'None'],
  ['Publisher', 'Publish', 'Read status', 'Read', 'None'],
  ['Auditor', 'Read', 'Read metadata', 'Read/export', 'None'],
  ['Contract operator', 'Read approved', 'None', 'Read', 'Future gated'],
]

const flow = ['Capture draft', 'Validate schema', 'Store evidence privately', 'Independent review', 'Approve publication', 'Publish redacted view']

const threats = [
  ['Unauthorized publication', 'Role separation, required approvals and immutable decision events'],
  ['Document exposure', 'Private storage, short-lived grants, redaction and access logging'],
  ['Record tampering', 'Revision history, append-only events and hash-chain verification'],
  ['Credential abuse', 'MFA, least privilege, rotation and anomaly alerts'],
]

export function Architecture() {
  const [selected, setSelected] = useState(0)
  return (
    <section className="page-section phase-page">
      <div className="section-heading"><span className="eyebrow">System design / proposed</span><h1>Architecture Explorer</h1><p className="lede">Inspectable production boundaries and controls. Nothing on this page represents a live integration or deployed control.</p></div>
      <div className="architecture-explorer">
        <div className="layer-list" role="tablist" aria-label="Architecture layers">{layers.map(([name], index) => <button type="button" role="tab" aria-selected={selected === index} aria-controls="layer-detail" id={`layer-${index}`} onClick={() => setSelected(index)} key={name}><span>{String(index + 1).padStart(2, '0')}</span>{name}</button>)}</div>
        <div className="layer-detail" role="tabpanel" id="layer-detail" aria-labelledby={`layer-${selected}`}><span className="section-index">SELECTED LAYER</span><h2>{layers[selected][0]}</h2><p>{layers[selected][1]}</p><dl><div><dt>Environment</dt><dd>Local development, isolated staging and access-controlled production proposed</dd></div><div><dt>Security</dt><dd>Least privilege, encryption, review gates and monitoring proposed</dd></div><div><dt>Ownership</dt><dd>Owner-controlled source, domains, cloud accounts, keys, runbooks and deployment access</dd></div></dl></div>
      </div>

      <section className="phase-block"><span className="section-index">01 / ROLE-PERMISSION MATRIX</span><div className="table-wrap"><table className="control-table"><thead><tr><th>Role</th><th>CMS</th><th>Evidence</th><th>Audit</th><th>Contract</th></tr></thead><tbody>{permissions.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={`${index}-${cell}`}>{cell}</th> : <td key={`${index}-${cell}`}>{cell}</td>)}</tr>)}</tbody></table></div></section>

      <section className="phase-block"><span className="section-index">02 / PROPOSED DATA FLOW</span><ol className="flow-stages">{flow.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span>{stage}</li>)}</ol></section>

      <section className="phase-block operations-grid">
        <article><span className="section-index">ENVIRONMENTS</span><h3>Separated promotion</h3><p>Local uses synthetic fixtures. Staging uses non-production accounts and redacted test records. Production receives only reviewed builds through an approval gate; databases and credentials are never shared.</p></article>
        <article><span className="section-index">SECRETS</span><h3>Outside source control</h3><p>Use a managed secret store, scoped service identities, rotation schedules and audited break-glass access. Client bundles receive no private keys.</p></article>
        <article><span className="section-index">RATE LIMITS</span><h3>Boundary-specific quotas</h3><p>Proposed per-IP public read limits, tighter authenticated write limits, payload caps and temporary backoff. Exact thresholds require load testing and owner approval.</p></article>
        <article><span className="section-index">RECOVERY</span><h3>Test the restore</h3><p>Encrypted, versioned backups with separate retention, documented recovery objectives and scheduled restoration exercises. Final frequency and retention remain pending.</p></article>
        <article><span className="section-index">MONITORING</span><h3>Actionable signals</h3><p>Availability, error rate, latency, rejected access, workflow changes and backup health feed owner-controlled alerts with escalation runbooks.</p></article>
      </section>

      <section className="phase-block threat-block"><div><span className="section-index">03 / THREAT-CONTROL MAP</span><h2>Controls follow the risk.</h2></div><dl>{threats.map(([threat, control]) => <div key={threat}><dt>{threat}</dt><dd>{control}</dd></div>)}</dl></section>

      <section className="phase-block hash-chain"><div><span className="section-index">04 / TAMPER-EVIDENT AUDIT EXAMPLE</span><h2>Each event commits to the previous event.</h2><p>This illustrative chain shows the proposed structure. Hashing and immutable storage are not active in this prototype.</p></div><ol><li><code>event 001</code><span>previous: GENESIS</span><span>hash: 91c4…2ae0</span></li><li><code>event 002</code><span>previous: 91c4…2ae0</span><span>hash: 7bb1…af39</span></li><li><code>event 003</code><span>previous: 7bb1…af39</span><span>hash: d802…113c</span></li></ol><p className="sample-note">Proposed hash input: canonical event payload + timestamp + actor ID + previous hash. Verification recomputes the chain and flags any changed or missing event.</p></section>

      <section className="boundary-callout"><span className="status muted">Inactive boundary</span><h2>No contract, wallet or payment connection.</h2><p>Smart-contract integration remains outside this demonstration and subject to definitive legal structure, audits and owner approval.</p></section>
    </section>
  )
}
