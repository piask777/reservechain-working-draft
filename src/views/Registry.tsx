import { useDeferredValue, useState } from 'react'
import { filterRegistry, registryRecords } from './registryData'

export function Registry() {
  const [query, setQuery] = useState('')
  const [material, setMaterial] = useState('All')
  const [evidence, setEvidence] = useState('All')
  const deferredQuery = useDeferredValue(query)
  const records = filterRegistry(registryRecords, deferredQuery, material, evidence)

  return (
    <section className="page-section phase-page">
      <div className="section-heading"><span className="eyebrow">Public registry / demonstration</span><h1>Asset Registry</h1><p className="lede">Search the proposed record structure using illustrative test data only.</p></div>
      <div className="prototype-note" role="note"><strong>Illustrative records</strong><span>These entries do not represent verified reserves, custody, ownership or tokenized assets.</span></div>
      <form className="registry-filters" role="search" onSubmit={(event) => event.preventDefault()}>
        <label className="search-field"><span>Search records</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Record or identifier" /></label>
        <label><span>Material</span><select value={material} onChange={(event) => setMaterial(event.target.value)}><option>All</option><option>Copper powder</option><option>Nickel wire</option></select></label>
        <label><span>Evidence status</span><select value={evidence} onChange={(event) => setEvidence(event.target.value)}><option>All</option><option>Under review</option><option>Ready for review</option><option>Incomplete</option></select></label>
      </form>
      <p className="result-count" aria-live="polite">{records.length} illustrative {records.length === 1 ? 'record' : 'records'}</p>
      <div className="registry-table-wrap">
        <table className="registry-table">
          <caption className="sr-only">Filtered illustrative asset registry records</caption>
          <thead><tr><th scope="col">Record</th><th scope="col">Material</th><th scope="col">Physical reference</th><th scope="col">Evidence</th><th scope="col">Tokenization</th></tr></thead>
          <tbody>{records.map((record) => <tr key={record.id}><th scope="row"><span className="table-label">Record</span>{record.id}<small>Test data</small></th><td><span className="table-label">Material</span>{record.material}<small>{record.form}</small></td><td><span className="table-label">Physical reference</span>{record.identifier}</td><td><span className="table-label">Evidence</span><span className={`status ${record.evidence === 'Incomplete' ? 'muted' : 'amber'}`}>{record.evidence}</span></td><td><span className="table-label">Tokenization</span><span className="status muted">Inactive</span></td></tr>)}</tbody>
        </table>
        {records.length === 0 && <div className="empty-state"><h2>No matching records</h2><p>Adjust the search or filters to inspect other sample structures.</p></div>}
      </div>
    </section>
  )
}
