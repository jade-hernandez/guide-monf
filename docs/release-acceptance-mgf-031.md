# MGF-031 release acceptance

Date: 2026-07-28

Release-candidate baseline: `ae05e20fd3e498f36361c0f3594f8d85fe3fc243`

Final verdict: **Pass with documented limitations**

## Repository state

- Starting branch: `main`
- Starting status: clean working tree
- Remotes verified:
  - `origin`: `https://github.com/jade-hernandez/guide-monf.git`
  - `personal`: `https://github.com/f-campana/guide-monf.git`
- Hosted validation target: `personal/main` only
- Notion reference: MGF-031, read-only; Notion was not updated

## Release-blocking defect fixed

Lighthouse on the production Home route found one contrast failure in the Home caution panel:
`#65758b` text on `#fcf6ec`, ratio 4.36:1. The paragraph now uses foreground text. The fix is
limited to `src/pages/Landing.tsx`.

## Local commands

All commands were run from the repository root.

```sh
git status --short
git rev-parse HEAD
pnpm quality
pnpm preview --host 127.0.0.1 --port 4173
git diff --check
pnpm dlx lighthouse@13.0.1 http://127.0.0.1:4173/ \
  --output=json --output=html \
  --output-path=/tmp/mgf-031-acceptance-2026-07-28/lighthouse-home-after-contrast \
  --chrome-flags='--headless=new --no-sandbox --disable-gpu --user-data-dir=/tmp/mgf-031-lighthouse-profile-3 --window-size=1440,900' \
  --screenEmulation.width=1440 \
  --screenEmulation.height=900 \
  --screenEmulation.deviceScaleFactor=1 \
  --screenEmulation.mobile=false \
  --form-factor=desktop \
  --only-categories=performance,accessibility,best-practices,seo
```

Results after the fix:

- `pnpm quality`: passed
  - lint: passed
  - TypeScript: passed
  - coverage tests: 12 files / 141 tests passed
  - production build: passed
- `git diff --check`: passed
- Production preview: `http://127.0.0.1:4173/`

## Production-preview evidence

Routes checked in the production preview:

- Home `/`
- Profile `/profile`
- Explorer `/explorer`
- About `/about`
- Legal `/legal`
- Methodology `/methodology`
- Not Found `/missing-release-route` and `/not-a-real-route`

Navigation behavior checked:

- direct URL loads
- refresh on direct route
- internal navigation
- Back and Forward
- Not Found recovery to Home

Workflow behavior checked:

- fresh six-answer profile creation
- save to localStorage
- reload restoration on Explorer
- restored answers on Profile edit
- forced localStorage save failure recovery
- Explorer search for `banane`
- impossible search empty state
- compatible-only plus category filter empty state
- pagination / Show More from 16 to 32 cards

Responsive viewports checked:

- 320 x 700
- 390 x 844
- 768 x 1024
- 1440 x 900

No horizontal overflow was detected in automated geometry checks. Home source images resolved as
expected: mobile WebP at 320/390 and desktop JPEG at 1440. Methodology's Monash external link
wrapped within the 320 and 390 viewports without overflow.

## Accessibility-oriented checks

Verified in production preview and real Chrome automation:

- route H1 receives focus after route load with `tabIndex=-1`
- visible keyboard focus rings on primary buttons and profile controls
- logical tab traversal on Home and Profile
- one main landmark per route
- header/footer landmarks present
- Profile progress uses `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, and
  `aria-valuenow`
- Explorer result count uses `role="status"` / live-region semantics
- Profile choices are grouped and expose `aria-pressed`
- recovery actions exist for Not Found and route error boundary
- reduced-motion behavior is respected by source inspection for the only smooth-scroll action

## Browser coverage

- In-app browser automation: route, responsive, navigation, and workflow checks.
- Google Chrome 150.0.7871.187: real Chrome DevTools Protocol checks for keyboard, storage,
  metadata, console, and network.
- Safari 26.2: installed, but Safari WebDriver reported that "Allow remote automation" is disabled.
  A visual open attempt was also blocked by an unrelated macOS `xcodebuild` authorization prompt, so
  Safari/WebKit is documented as unavailable for clean automation in this run.
- Firefox: not installed locally.
- iOS Simulator: unavailable without installing Apple simulator components; `xcrun simctl` triggered
  an Apple software-install authorization prompt, which was not approved.

## Console, network, assets, and metadata

Clean Chrome production smoke:

- failed network requests: 0
- HTTP responses >= 400: 0
- console output: only the intentional Not Found diagnostic
  `Erreur 404 : L'utilisateur a tente d'acceder a une route inexistante`

Assets and metadata checked:

- built JS/CSS chunks resolve
- self-hosted Source Serif font resolves
- favicon resolves at `/favicon.ico`
- social preview metadata points to
  `https://raw.githubusercontent.com/jade-hernandez/guide-monf/main/public/social-preview.jpg`
- `og:title`, `og:description`, `og:image`, `og:image:alt`, `twitter:card`, `twitter:title`,
  `twitter:description`, `twitter:image`, and `twitter:image:alt` are present
- Legal footer links resolve internally; LinkedIn, GitHub, and Monash external links are present
- visible freshness wording: Legal page shows `Derniere mise a jour : Juillet 2026`

The forced save-failure run intentionally produced one localStorage warning and displayed the
profile save error with all six selections still visible.

## Lighthouse

Diagnostic run after the fix:

- route: `http://127.0.0.1:4173/`
- fetch time: `2026-07-28T17:33:55.202Z`
- browser: HeadlessChrome/150.0.0.0
- form factor: desktop
- viewport: 1440 x 900, device scale factor 1

Scores:

- Performance: 76
- Accessibility: 100
- Best Practices: 100
- SEO: 100

The color-contrast and console-error audits passed after the fix. No score target is claimed as a
release requirement.

## Evidence paths

Temporary evidence was kept outside the repository:

- `/tmp/mgf-031-acceptance-2026-07-28/route-responsive-results.json`
- `/tmp/mgf-031-acceptance-2026-07-28/methodology-responsive-focus.json`
- `/tmp/mgf-031-acceptance-2026-07-28/workflow-explorer-navigation.json`
- `/tmp/mgf-031-acceptance-2026-07-28/chrome-keyboard-storage-metadata.json`
- `/tmp/mgf-031-acceptance-2026-07-28/lighthouse-home-after-contrast.report.json`
- `/tmp/mgf-031-acceptance-2026-07-28/lighthouse-home-after-contrast.report.html`
- PNG screenshots in `/tmp/mgf-031-acceptance-2026-07-28/`

## Known limitations

- No deployment target is confirmed. Local production preview SPA route recovery passed, and
  `vercel.json` contains a Vercel-style SPA rewrite, but host-specific SPA fallback could not be
  verified without an approved host.
- Safari/WebKit and iOS Simulator checks were attempted but blocked by local machine settings or
  missing Apple components.
- Firefox smoke was not run because Firefox is not installed locally.
- Dataset provenance and reuse rights remain limited as documented in
  `docs/dataset-provenance.md`; this release acceptance does not certify clinical accuracy,
  medical use, or dataset licensing.
