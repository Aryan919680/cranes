# Validation Report

Validation performed on 19 July 2026.

## Passed

- `npm run security:scan`
- `npm run lint`
- `npm run build`
- Production output created in `dist/`
- Direct preview request to `/` returned HTTP 200
- Direct preview request to `/services` returned HTTP 200
- `robots.txt` was accessible and explicitly allowed Google AdsBot
- Source scan found no `eval`, `atob`, `document.write`, user-agent cloaking, automatic `location.replace`, iframe injection, Supabase keys, Lovable runtime or TanStack Start runtime

## Environment limitations

- `npm audit --omit=dev` could not complete because the configured package-registry audit endpoint returned HTTP 502. This is an audit-service error, not a build failure. Run the command again from the deployment environment before release.
- A Chromium screenshot test could not complete in the sandbox because the browser process lacked required DBus, netlink and file-watcher permissions. The production build and direct route HTTP checks completed successfully.

## Deployment reminder

Replace the old deployed files from a clean hosting account or clean deployment project. Do not merely overlay the new `dist` folder onto an unknown server state.
