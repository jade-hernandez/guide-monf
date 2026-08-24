# MGF-032 Design QA

## Comparison Targets

### Source visual truth

- Landing:
  `/Users/fabiencampana/Downloads/mon-guide-fodmap/ChatGPT Image Jul 19, 2026, 05_30_07 PM.png`
  - Source pixels: 1911 x 823.
- Profile:
  `/Users/fabiencampana/Downloads/mon-guide-fodmap/ChatGPT Image Jul 19, 2026, 05_29_58 PM.png`
  - Source pixels: 1536 x 1024.
- Explorer:
  `/Users/fabiencampana/Downloads/mon-guide-fodmap/ChatGPT Image Jul 19, 2026, 05_30_00 PM.png`
  - Source pixels: 1536 x 1024.

The source boards are art-direction composites rather than 1:1 browser captures. They establish
editorial hierarchy, restrained green and neutral tokens, compact controls, and product-screen
prominence. Their tri-state profile, master-detail Explorer, botanical decoration, and stronger
personalization claims were explicitly excluded by the approved product constraints.

### Rendered implementation

- Landing desktop: `.codex/mgf-032/final-landing-desktop.jpg`
  - Pixels and CSS viewport: 1440 x 900 at 1x density.
- Landing mobile: `.codex/mgf-032/landing-mobile-pass2.png`
  - Pixels and CSS viewport: 390 x 844 at 1x density.
- Profile desktop: `.codex/mgf-032/profile-desktop-pass1.png`
  - Pixels and CSS viewport: 1440 x 1000 at 1x density.
- Profile mobile: `.codex/mgf-032/final-profile-mobile.jpg`
  - Pixels and CSS viewport: 390 x 844 at 1x density.
- Explorer desktop: `.codex/mgf-032/explorer-preview-fruits.png`
  - Pixels and CSS viewport: 1440 x 900 at 1x density.
- Explorer mobile: `.codex/mgf-032/final-explorer-mobile.jpg`
  - Pixels and CSS viewport: 390 x 844 at 1x density.
- Methodology desktop: `.codex/mgf-032/methodology-desktop.png`
  - Pixels and CSS viewport: 1440 x 900 at 1x density.

The desktop full views were compared for composition and hierarchy. Profile controls, Explorer cards
and filters, the Landing product image, mobile wrapping, and the trust-page warning treatments were
also compared as focused regions. No density normalization was required for implementation
screenshots. Source crops were treated as directional because their aspect ratios and fictional
states do not match the production routes.

## Findings

No actionable P0, P1, or P2 differences remain.

- Fonts and typography: Source Serif 4 Display is self-hosted for editorial headings, with the
  existing system sans-serif retained for controls and body copy. Heading weight, wrapping, and line
  height remain legible at 390 px and 1440 px. Letter spacing remains 0.
- Spacing and layout rhythm: The implementation follows the source's asymmetric editorial/product
  composition without copying its fictional app frame. Controls use stable dimensions, 8 px radii,
  restrained shadows, and denser Explorer cards.
- Colors and tokens: Warm neutral surfaces, ink text, emerald brand color, red avoid state, amber
  caution state, and green compatible state remain semantically distinct and readable. Gradients and
  decorative blobs were removed.
- Image quality and asset fidelity: The Landing and social card use a real browser capture of the
  current Explorer. The 1440 x 900 JPEG is sharp at its rendered sizes and is not stretched.
  Botanical linework was omitted because no approved production asset exists.
- Copy and content: Production copy retains the 104-item fact, binary profile model, educational
  status, unverified dataset provenance, reference-portion qualification, and no-guarantee wording.
  Unsupported attribution, tri-state behavior, and personalized tolerance claims from the boards
  were not carried over.
- Accessibility and interaction: DOM inspection confirmed one H1 per route, semantic progress,
  result live status, grouped binary controls, labeled search and filters, and profile-relative card
  labels. Keyboard Tab moved from search to the next filter control.

## Comparison History

1. Initial mobile Profile comparison found a P2 overlap: the bottom-sticky Continue action covered
   the first card controls at 390 x 844.
   - Fix: make the action static below 640 px and sticky only in layouts that can support it.
   - Post-fix evidence: `.codex/mgf-032/final-profile-mobile.jpg`.
2. Initial mobile Landing comparison found a P2 composition issue: the 390 x 844 first viewport did
   not reveal the next section.
   - Fix: use concise mobile support copy, reduce mobile spacing, shorten the product crop, hide the
     caption below 640 px, and keep the full copy and image treatment on larger screens.
   - Post-fix evidence: `.codex/mgf-032/landing-mobile-pass2.png`.
3. Independent review found a P1 social-delivery issue and two P2 content/semantics issues.
   - Fix: use an absolute GitHub raw URL for the social image, replace overconfident About claims
     with comparison-specific language, hide decorative Explorer icons from assistive technology,
     and correct the recovery-action typo.
   - Post-fix evidence: final source inspection plus the passing complete quality gate.
4. Final combined source/implementation comparison found no further P0/P1/P2 issue.

## Browser Validation

- Local implementation: `http://localhost:8080/`.
- Primary CTA navigated from Landing to `/profile`.
- A saved six-answer profile restored and continued to `/explorer`.
- Explorer search for `banane` produced the live `1 aliment(s) trouvé(s)` status and the Banane
  card.
- Category filtering, route navigation, and keyboard focus progression worked.
- Landing, Profile, Explorer, Methodology, and Legal were inspected at desktop and mobile sizes.
- No runtime error overlay or failed interaction surfaced. The current in-app browser API did not
  expose a console-log extraction method; the production build and complete automated quality gate
  completed without errors.

## Open Questions

- A canonical `og:url` remains deferred until a public hosting URL is selected. The social image
  already uses an absolute repository URL.
- The tri-state profile and Explorer detail panel shown in the source boards remain intentionally
  out of scope.

## Implementation Checklist

- [x] Self-host editorial font and retain its OFL license.
- [x] Replace the animation-heavy Landing with a shorter product-led flow.
- [x] Refine Profile, Explorer, FoodCard, shared header, footer, loading, empty, and 404 states.
- [x] Standardize Methodology, Legal, and About.
- [x] Add a real-product social preview and metadata.
- [x] Pass responsive browser checks and the complete quality gate.

## Follow-up Polish

- P3: A future approved botanical asset could restore the source boards' organic edge detail without
  changing the information hierarchy.
- P3: Shared-state components have browser evidence and indirect workflow coverage, but do not yet
  have dedicated visual-regression tests.

final result: passed
