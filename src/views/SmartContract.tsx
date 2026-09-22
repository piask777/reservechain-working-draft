const transitions = [
  ['Requested', 'Holder request accepted only after eligibility checks'],
  ['Under review', 'Evidence, identity and asset status reviewed'],
  ['Approved', 'Authorized decision recorded; no automatic settlement'],
  ['Fulfilment pending', 'Off-chain delivery/custody process remains controlling'],
  ['Completed or rejected', 'Final reason and audit reference recorded'],
]

export function SmartContract() {
  return (
    <section className="page-section phase-page">
      <div className="section-heading"><span className="eyebrow">Smart-contract boundary / proposed</span><h1>Contract Design</h1><p className="lede">A gated design brief only. No contract is deployed, compiled or connected, and no token parameters or addresses are asserted.</p></div>
      <div className="contract-grid">
        <section><span className="section-index">01 / PLANNED ROLES</span><h2>Separated authority.</h2><dl><div><dt>Governance multisig</dt><dd>Approve upgrades and sensitive role changes after documented review.</dd></div><div><dt>Issuer</dt><dd>Request minting only against an approved off-chain record and policy gate.</dd></div><div><dt>Burn operator</dt><dd>Execute approved burn/redemption instructions with reason references.</dd></div><div><dt>Pauser</dt><dd>Emergency pause only; cannot mint or redirect assets.</dd></div><div><dt>Auditor</dt><dd>Read events and reconcile approved records; no mutation rights.</dd></div></dl></section>
        <section className="function-panel"><span className="section-index">02 / FUNCTIONS</span><div><b>mint</b><span>Planned / gated</span><p>Requires eligible record, authorization and supply-policy checks.</p></div><div><b>burn</b><span>Planned / gated</span><p>Requires approved redemption state and reconciliation.</p></div><div><b>pause</b><span>Planned safety control</span><p>Emergency stop with logged reason and recovery procedure.</p></div><div><b>upgrade</b><span>Decision pending</span><p>Only if governance and audit review justify upgradeability.</p></div></section>
      </div>
      <section className="phase-block"><span className="section-index">03 / PROPOSED REDEMPTION STATES</span><ol className="flow-stages redemption-flow">{transitions.map(([state, detail], index) => <li key={state}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{state}</strong><small>{detail}</small></div></li>)}</ol></section>
      <section className="phase-block controls-grid"><article><span className="section-index">MULTISIG ADMINISTRATION</span><h3>No single-key control</h3><p>Proposed threshold approval, hardware-backed signer keys, role separation, signer replacement procedure and delayed high-impact actions. Signers and threshold remain unconfirmed.</p></article><article><span className="section-index">TESTNET GATE</span><h3>Adversarial rehearsal</h3><p>Unit, invariant, access-control and integration tests; deployment rehearsal; event reconciliation; pause and recovery exercise; owner acceptance.</p></article><article><span className="section-index">INDEPENDENT AUDIT</span><h3>Remediate before release</h3><p>Scope freeze, independent review, severity-based remediation, retest and public disclosure policy are required before a production decision.</p></article></section>
      <section className="boundary-callout mainnet-gate"><span className="status muted">Mainnet prohibited</span><h2>Conditions before any mainnet action</h2><ul><li>Final corporate, legal, jurisdiction and offering structure approved</li><li>Custody, reserve verification, ownership and redemption mechanics confirmed</li><li>Token specification and administration policy formally approved</li><li>Independent contract audit findings remediated and retested</li><li>Testnet acceptance, incident response and multisig ceremony completed</li><li>Explicit owner go-live authorization recorded</li></ul></section>
    </section>
  )
}
