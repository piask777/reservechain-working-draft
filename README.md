# ReserveChain phase 1

Responsive prelaunch demonstration built with Vite, React and TypeScript.

## Run locally

```sh
npm install
npm run dev
```

Use `npm run build` for a production bundle and `npm run preview` to inspect it locally. `npm test` is configured for the test suite introduced with later interactive phases.

## Architecture

React Router provides route-aware views inside a shared responsive layout. Reusable program, disclosure and material illustration components keep status language and presentation consistent. All artwork is local CSS and markup.

## Limitations

This phase includes Home, Copper, Nickel and an illustrative Digital Asset Passport. It contains no network submission, authentication, wallet, payment, KYC, blockchain or financial operations. Registry, admin, architecture, delivery-plan and interactive waitlist views are reserved for later phases.

## Deployment

Deploy the generated `dist/` directory to a static host configured to return `index.html` for application routes.
