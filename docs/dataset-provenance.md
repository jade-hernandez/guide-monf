# Dataset provenance and licensing evidence record

Date: 2026-07-22 MGF-020 clarification: 2026-07-23

Scope: the 104 food records currently committed in `src/lib/fodmap-db.ts`

Status for MGF-020: **methodology can proceed with explicit evidence limits**

## Owner clarification recorded for MGF-020

The project owner states that the local dataset was assembled from publicly accessible online FODMAP
information during the learning project. This statement is sufficient to describe the owner's
account when it is attributed as such. It does not supply the missing source-by-source acquisition
record, transformation history, independent clinical validation, or reuse-rights evidence documented
below.

MGF-020 therefore separates this unverified origin claim from repository-verified engineering facts.
It does not present the dataset as official Monash University data or imply affiliation,
endorsement, accuracy, permission, or guaranteed tolerance.

## Purpose and scope

This record separates facts demonstrated by this repository from statements that the repository
merely repeats. It does not validate food values, clinical meaning, source ownership, or permission
to reuse the data. No external food source was consulted for this review.

## Evidence reviewed

- Current dataset and schema: `src/lib/fodmap-db.ts` and `src/types/index.ts`.
- Repository and public claims: `README.md`, `src/config/content.ts`, `src/config/disclaimers.ts`,
  `src/components/Footer.tsx`, `src/pages/Landing.tsx`, `src/pages/About.tsx`, and
  `src/pages/Legal.tsx`.
- Package and licensing surface: `package.json`, the complete tracked-file list, and all Git
  objects.
- File history, blame, and patches for the dataset and source claims. Important commits are:
  - `ad458e1f658aa481b7d3904fe2c884da8cb066de`: first dataset commit;
  - `6453e94591fa6f16b73cb897d3c073800078c69b`: changed global version/update metadata;
  - `d3f1b7de46ca79bf41d9d1cab51774d3556e8cd7`: removed the incorrect declared total, moved one
    existing record in array order, and added README source/license statements;
  - `4e9720139d278dcfd6f17b86ded66a869afc3446`: added the footer/legal/about surfaces;
  - `82b3ccdb31ad8102d941c631dc28adbd44962e3b`: corrected public count copy to 104.

Representative reproducible checks:

```sh
rg --files
rg -n -i "source|monash|licen[cs]e|attribution|provenance|extract|dataset|csv|json|export" \
  README.md package.json src
git log --all --follow -- src/lib/fodmap-db.ts
git blame -w src/lib/fodmap-db.ts
git show ad458e1 -- src/lib/fodmap-db.ts src/config/content.ts src/config/disclaimers.ts
git rev-list --all --objects
```

The record-count and distinct-value summary can be reproduced without network access:

```sh
node --experimental-strip-types --input-type=module -e '
import { baseDonneesFodmap as db } from "./src/lib/fodmap-db.ts";
const countBy = (key) => Object.fromEntries(
  [...new Set(db.foods.map((food) => food[key]))].sort().map((value) =>
    [value, db.foods.filter((food) => food[key] === value).length]
  )
);
console.log({
  records: db.foods.length,
  uniqueIds: new Set(db.foods.map((food) => food.id)).size,
  source: countBy("source"),
  lastUpdated: countBy("lastUpdated"),
  confidence: countBy("confidence"),
  category: countBy("category")
});'
```

## Confirmed facts

- The current array contains **104 records with 104 unique IDs**. Every record has the required
  fields `id`, `name`, `category`, `limitGrams`, `fodmaps`, `confidence`, `lastUpdated`, and
  `source`.
- All 104 records carry the literal `source: "Monash University 2024"` and
  `lastUpdated: "2024-12-01"`. These strings are record metadata, not proof of extraction from a
  source, accuracy, authorization, or the date on which extraction occurred.
- Confidence labels are `elevee` for 101 records and `moyenne` for 3. The repository does not define
  how those labels were assigned or independently validate them.
- The records use 8 categories and 6 FODMAP tag types. Category counts are: cereals 25, vegetables
  18, legumes 9, fruits 16, dairy 16, nuts/seeds 10, sweeteners 3, and plant alternatives 7.
- The dataset first appears, already containing the same 104 record values, in automated commit
  `ad458e1` on 2025-10-08. The file did not exist in its parent commit.
- In `ad458e1`, the global metadata said version `2.0.0`, update date `2024-12-01`, and total 110,
  despite the array containing 104 records. Commit `6453e94` changed the version to `1.0.0` and the
  global update date to `2025-10-10` without changing record values. Commit `d3f1b7d` removed the
  declared total and moved the existing `pasteque` record into the fruit section; its record values
  remained unchanged.
- A comparison of records sorted by ID across `ad458e1`, `6453e94`, `d3f1b7d`, `4dce65b`, and the
  current commit found no record-value changes. This history shows what Git changed; it does not
  show how the original values were obtained.

## Observable schema and transformations

Each food has a French display name, category, numeric gram value, one or more FODMAP tags with an
`isPrimary` flag, a confidence label, a date string, and a free-text source string. The database
adds global `version`, `lastUpdated`, and `validationStatus` strings. The repository contains
runtime filtering and display code, but no import, normalization, unit-conversion, deduplication, or
generation script for the food records.

The committed history demonstrates later formatting, metadata, ordering, count, and helper-code
changes. It does not document an original extraction, field mapping, calculation, manual review, or
reason for the gram values, tags, primary flags, confidence labels, or dates.

## Claims present before MGF-020 and not substantiated by committed evidence

Before MGF-020, the following were repository claims rather than independently supported
conclusions:

- `README.md` says all food information is based on a 2024-2025 Monash University database and calls
  it the “gold standard”.
- `src/lib/fodmap-db.ts` labels the database and every record with Monash source strings and uses
  `validationStatus: "Données Monash University 2024-2025"`.
- `src/config/content.ts`, `src/config/disclaimers.ts`, `src/pages/Landing.tsx`, and the footer
  repeat Monash-based/source wording. `src/pages/Legal.tsx` renders the disclaimer claims;
  `About.tsx` adds no dataset citation beyond the shared footer.
- `src/config/disclaimers.ts` calls the data derived from “public sources”, says personal use is
  allowed, and says commercial use needs written authorization.
- `README.md` says the project is for educational and personal use and that food data is attributed
  to Monash University.

MGF-020 removes these unsupported public claims and replaces them with limitations-first wording.
The source strings remain inside the food records because this documentation ticket preserves
dataset values. No committed source artifact or history entry demonstrates the accuracy of the
former claims, and a source string inside a record cannot verify itself.

## Provenance and extraction-date status

**Unresolved.** There is no committed source snapshot/export, per-record citation, acquisition URL,
access receipt, extraction date, author note, generated-data script, or transformation log. Before
MGF-020, a generic footer link pointed to `https://www.monashfodmap.com/`; MGF-020 labels a public
Monash food-list link as background reading rather than evidence for these 104 records.

Neither the record date `2024-12-01`, the original global date `2024-12-01`, the later global date
`2025-10-10`, nor the phrases “2024” and “2024-2025” establish an extraction date. The metadata
change in `6453e94` occurred without record-value changes, so Git does not explain what that new
date means.

## Licensing and permitted-use status

**Unresolved.** The working tree and all reachable Git history contain no `LICENSE`, `LICENCE`, or
`COPYING` file, and `package.json` has no license field. No third-party terms, permission letter,
license grant, or source-specific reuse conditions are committed.

The educational/personal-use and public-source statements are assertions written in this project;
they are not evidence that the dataset may be copied, transformed, committed, distributed, or shown
in a public application. The repository also does not establish a license for the application code
itself.

## Attribution status

Every record retains the same generic Monash source string, and the application links to a public
Monash food list as explicitly independent background reading. Neither the internal strings nor the
external link establish that Monash supplied these values, that attribution is required or
sufficient, or that attribution cures an otherwise missing permission.

## Unresolved owner questions

1. Who assembled the 104 records, from which exact product/page/export/version, and on what date?
2. Is there an original source artifact or contemporaneous citation log? If it cannot be committed,
   can its location, checksum, access date, and custodian be recorded?
3. How were `limitGrams`, tags, `isPrimary`, confidence, and date fields mapped or calculated? Were
   any values translated, rounded, combined, inferred, or manually edited?
4. What do version `1.0.0`, global date `2025-10-10`, record date `2024-12-01`, and confidence
   labels mean, and who approved them?
5. What terms or written permission applied when the data was acquired, and do they permit
   repository storage, transformation, redistribution, and public display? What attribution is
   required?
6. Who can license the project code, and under which terms should the repository be distributed?

## Publishing consequences and MGF-020

The current repository is not enough to publish a methodology with verified provenance, extraction
date, transformation history, or permitted-use status. It is enough to publish a limitations-first
methodology that attributes the owner's account, states these evidence gaps, and keeps them separate
from verified engineering facts.

Minimum missing evidence:

1. An owner-backed acquisition record naming the exact source/version, access or extraction date,
   and the source artifact or a traceable restricted record (location, checksum, and custodian).
2. A transformation record explaining how the source became the committed schema and how each
   non-obvious field was assigned, including manual changes and review.
3. The applicable source terms or written permission covering the intended storage, transformation,
   redistribution, and public display, plus the required attribution wording.

If the source artifact cannot legally be committed, the evidence record must not reproduce it; a
rights-approved citation, checksum, custody reference, and permission record are the minimum safe
substitute. Until those items exist, MGF-020 can describe the repository's observable behavior and
known evidence gaps, but it cannot honestly claim confirmed dataset provenance or reuse rights.
