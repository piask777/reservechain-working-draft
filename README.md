# ReserveChain prelaunch demonstration

A responsive Vite, React and TypeScript working draft for a proposed industrial-asset evidence and registry platform. The demonstration is informational and uses only local illustrative data.

## Hosted demo

Public working draft: <https://piask777.github.io/reservechain-working-draft/>

The deployment uses hash-based routes for static-host compatibility. For example, the architecture view is available at <https://piask777.github.io/reservechain-working-draft/#/architecture>.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local development URL. Other commands:

```sh
npm test
npx tsc -b
npm run build
npm run preview
```

## Routes and interactions

| Route | Implemented view and interaction |
| --- | --- |
| `/` | Home, prelaunch status, chain-of-trust flow, initial programs, evidence discipline, modules and waitlist link |
| `/copper` | Ultrafine Copper Powder program, program switcher, proposed fields, evidence panel, registry preview and disabled tokenization |
| `/nickel` | Ultrafine Nickel Wire 0.025 mm program, program switcher, coil/container fields, evidence panel, registry preview and disabled tokenization |
| `/passport` | Illustrative Digital Asset Passport, identifiers, expandable evidence checklist, status timeline and disabled tokenization |
| `/registry` | Searchable and filterable illustrative records with material/evidence filters and responsive table/card presentation |
| `/admin` | Temporary workflow controls, language/mode preview, role and audit concepts, plus a proposed WordPress mapping for post types, APIs, documents and translations |
| `/architecture` | Selectable architecture layers, role-permission matrix, data flow, operational controls, threat mapping and illustrative audit hash chain |
| `/mobile` | Coded responsive mobile-client concept, planned screens, shared API/auth boundary, notifications, store ownership and release gates |
| `/contract-design` | Proposed roles, gated mint/burn/pause functions, multisig administration, redemption states, testnet/audit gates and mainnet preconditions |
| `/whitepaper` | Proposed outline, pending-information discipline, editable-source requirement, English/Spanish/Italian workflow and approval states |
| `/delivery` | Selectable schedule phases, deliverables, acceptance gates, dependencies, exclusions and links to planning workstreams |
| `/waitlist` | Client-side validation, jurisdiction acknowledgement, consent and deterministic success/reset state; no submission leaves the browser |
| Any unmatched path | Dedicated not-found view with a route back home |

The sticky header provides a responsive menu. Detailed planning routes are grouped under `Planning` to avoid crowding while remaining keyboard-accessible and discoverable. Every route includes the mandatory development disclosure and legal-status footer.

## Architecture

- `React Router` maps each view inside a shared layout and fallback route.
- React state powers the local filters, tabs, workflow demonstration and waitlist state.
- Reusable program, disclosure and CSS illustration components keep status language consistent.
- Registry and validation logic are separated into testable TypeScript modules.
- All artwork is local SVG/CSS/markup; no external tracker, form endpoint, wallet or API is used.
- The Admin, Architecture, Mobile, Contract Design and Whitepaper views document proposed production boundaries. They do not claim those services or controls are deployed.
- A proposed production implementation uses WordPress as the governed content source, a versioned/redacted API projection for the React clients, separate private evidence storage, and an append-only audit service.

## Checks

`npm test` covers dedicated route rendering, navigation inventory, registry filtering, disabled tokenization, waitlist validation/success, the WordPress mapping and inactive contract boundaries. `npx tsc -b` performs the TypeScript check. `npm run build` runs TypeScript and creates the production bundle.

Before release, scan source files for prohibited markers, placeholders, credentials and live financial endpoints as required by `../SPEC.md`. Also test keyboard navigation and layouts at 360 px, tablet and desktop widths in a browser.

## Deployment

1. Run `npm ci`, `npm test` and `npm run build` in CI.
2. Publish only `dist/` to an owner-controlled static host.
3. Configure unknown application paths to return `index.html` so client-side routes work on direct load.
4. Keep HTTPS enabled and add appropriate security headers at the host/CDN layer.
5. Verify all routes, the disclosure, responsive navigation and the local-only waitlist on the deployed URL.

The Vite `base` is relative (`./`) for static-host portability. No runtime environment variables or production secrets are required by this demonstration.

## Current limitations

- The hosted site is a static working draft; production hosting, service accounts, monitoring and operational ownership are not configured.
- Data is illustrative and resets on reload; there is no database, CMS connection, authentication or persistence.
- WordPress, API, evidence-vault, audit, monitoring, backup and security controls are proposals only.
- The mobile view is responsive web UI, not a signed iOS/Android binary; notifications and store accounts are not connected.
- No whitepaper or translation is represented as approved or final.
- No token, wallet, payment, KYC/KYB, sanctions, email, custody, insurance, reserve, redemption, blockchain or financial operation is active.
- No contract is compiled, deployed or connected; roles, signers, parameters, supply, pricing and addresses remain unconfirmed.
- Production legal structure, jurisdictions, providers, source documents and owner decisions remain required inputs.
