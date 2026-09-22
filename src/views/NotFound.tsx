import { Link } from 'react-router-dom'

export function NotFound() {
  return <section className="page-section phase-page not-found"><span className="eyebrow">404 / route not found</span><p className="error-code" aria-hidden="true">404</p><h1>This record does not exist.</h1><p className="lede">The requested page is not part of this demonstration.</p><Link className="primary-action" to="/">Return to overview</Link></section>
}
