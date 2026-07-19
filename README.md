# Chawla Cranes — Clean React Website

A new, basic React website built with Vite and Tailwind CSS. It replaces the previous TanStack Start structure with a smaller client-side application and a limited dependency set.

## Main changes

- Standard Vite + React + React Router structure.
- Tailwind CSS styling with no remote font or icon stylesheet.
- No server runtime, database client, API keys, obfuscated code or hidden landing pages.
- No automatic redirects based on device, location, referrer or user agent.
- Contact form opens a customer-prepared WhatsApp message and clearly explains that the website does not store the form submission.
- Privacy Policy, Terms & Conditions, business contact details and service limitations are visible.
- Google Analytics is disabled by default and can be enabled only with a valid environment variable.
- Security headers are included for Vercel and hosts that support a `_headers` file.
- Google AdsBot is allowed in `robots.txt`.
- A local security scan checks for common high-risk JavaScript patterns.

## Run locally

```bash
npm install
npm run dev
```

## Validate before deployment

```bash
npm run check
```

This runs the security scan, ESLint and the production build.

## Production build

```bash
npm run build
```

Deploy the generated `dist` directory, or import the project into Vercel.

## Optional Google Analytics

Analytics is disabled unless a valid ID is supplied:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Before enabling analytics, confirm whether a consent banner is required for the locations you target.

## Important deployment requirement

Do not upload this build on top of an unknown or compromised hosting account without cleaning the environment. Delete the previous deployed files, inspect DNS and redirects, rotate hosting credentials, review administrator accounts and deploy from a trusted machine. See `GOOGLE_ADS_AND_SECURITY_CHECKLIST.md`.
# cranes
