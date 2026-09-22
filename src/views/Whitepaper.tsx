const outline = [
  ['01', 'Executive summary', 'Pending approved positioning'],
  ['02', 'Industrial programs', 'Material facts require owner sources'],
  ['03', 'Reserve and evidence model', 'Custody and verification pending'],
  ['04', 'Platform architecture', 'Proposed design available'],
  ['05', 'Rights and redemption', 'Legal analysis pending'],
  ['06', 'Token and contract model', 'Parameters pending; functions inactive'],
  ['07', 'Risk factors', 'Legal and technical review pending'],
  ['08', 'Governance and operations', 'Owner decisions pending'],
]
const locales = [
  ['English', 'Source draft', 'Structure only'],
  ['Spanish', 'Not started', 'Waits for approved English revision'],
  ['Italian', 'Not started', 'Waits for approved English revision'],
]

export function Whitepaper() {
  return (
    <section className="page-section phase-page">
      <div className="section-heading"><span className="eyebrow">Document system / proposed</span><h1>Whitepaper &amp; Localization</h1><p className="lede">A controlled content plan that keeps unknown facts visible and translations tied to an approved source revision.</p></div>
      <section className="whitepaper-layout"><div><span className="section-index">01 / PROPOSED OUTLINE</span><ol className="document-outline">{outline.map(([number, title, status]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{status}</p></div></li>)}</ol></div><aside><span className="section-index">EDITABLE SOURCE REQUIREMENT</span><h2>Source before PDF.</h2><p>The owner receives editable, version-controlled source content. Branded PDF output is generated only from an approved revision; it is not the master record.</p><div className="prototype-note"><strong>Pending information</strong><span>Unknown legal, reserve, custody, insurance, rights, pricing and supply details remain labelled pending rather than inferred.</span></div></aside></section>
      <section className="phase-block"><span className="section-index">02 / TRANSLATION STATUS</span><div className="table-wrap"><table className="control-table"><thead><tr><th>Language</th><th>Workflow state</th><th>Current status</th></tr></thead><tbody>{locales.map(([language, state, status]) => <tr key={language}><th>{language}</th><td>{state}</td><td>{status}</td></tr>)}</tbody></table></div></section>
      <section className="phase-block"><span className="section-index">03 / CONTENT WORKFLOW</span><ol className="gate-grid"><li><span>01</span><h3>Source intake</h3><p>Owner-supplied facts logged with provenance and unresolved questions.</p></li><li><span>02</span><h3>English review</h3><p>Technical, commercial and legal reviewers approve a fixed revision.</p></li><li><span>03</span><h3>Translation</h3><p>Spanish and Italian translators work from that approved revision.</p></li><li><span>04</span><h3>Bilingual QA</h3><p>Terminology, disclosures and cross-references checked against source.</p></li><li><span>05</span><h3>Publish gate</h3><p>Owner and required reviewers approve each locale independently.</p></li></ol></section>
      <section className="boundary-callout"><span className="status muted">Not offering documentation</span><h2>No whitepaper is represented as final.</h2><p>This plan does not establish legal status, token rights, reserve claims or eligibility. Definitive documents require qualified review and owner approval.</p></section>
    </section>
  )
}
