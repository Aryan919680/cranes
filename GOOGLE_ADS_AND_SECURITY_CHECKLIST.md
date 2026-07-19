# Google Ads and Website Security Checklist

This rebuild reduces website-level risks, but no website code can guarantee Google Ads approval or remove an account-level Circumventing systems suspension.

## Before deployment

1. Confirm that the business name, address, phone number, email, service areas and service claims are accurate.
2. Remove any service, crane capacity, availability claim or image that the business cannot support.
3. Use the same final domain shown in the ad. Avoid unrelated redirect domains or tracking templates that change the destination unexpectedly.
4. Do not show different content to Google AdsBot, mobile users, geographic regions or visitors from ads.
5. Keep Privacy Policy, Terms, Contact, service details and pricing limitations accessible from every page.
6. Run `npm run check` and review the output before deployment.

## Clean the hosting environment

1. Back up only known-good business assets.
2. Delete the old deployed website files rather than copying the new build over them.
3. Rotate hosting, domain registrar, DNS, CDN, FTP/SFTP, repository and administrator passwords.
4. Enable multi-factor authentication.
5. Remove unknown administrators, deployment tokens, webhooks, cron jobs, workers and serverless functions.
6. Inspect DNS records and CDN redirect/page rules for unknown destinations.
7. Check the live HTML and response headers after deployment, not only the repository.
8. Review Google Search Console Security Issues and Manual Actions.
9. Check the domain in Google Safe Browsing after the clean deployment.
10. Keep dependencies updated and rerun `npm audit` regularly.

## Google Ads account behaviour

- Do not create replacement Google Ads accounts or domains to bypass a suspension.
- Do not repeatedly submit appeals before the website, account information and billing identity are consistent.
- Do not change the landing page after approval to show materially different content.
- Ensure ads describe services that are clearly available on the landing page.
- Keep advertiser verification information truthful and consistent with the website and payment profile.

## After deployment

1. Test every route in desktop and mobile browsers.
2. Confirm direct access to `/services`, `/fleet`, `/locations`, `/about`, `/contact`, `/privacy-policy` and `/terms-and-conditions` returns the website rather than a 404 or access-denied page.
3. Confirm `robots.txt` and `sitemap.xml` are publicly accessible.
4. Confirm there are no automatic cross-domain redirects.
5. Recheck the production source for unknown scripts, iframes or injected links.
6. Submit an appeal only after the live destination is clean and all business/account details are consistent.
