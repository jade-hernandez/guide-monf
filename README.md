# MonGuide FODMAP

An educational junior frontend portfolio project by Jade. It explores a profile-relative way to read
a local FODMAP reference dataset after supervised reintroduction; it is not a clinical product.

## Overview

MonGuide FODMAP is a web application that helps individuals with Irritable Bowel Syndrome (IBS)
navigate their diet after completing FODMAP reintroduction with a healthcare professional. Unlike
generic low-FODMAP food lists, this app compares a local reference dataset with each user's saved
binary FODMAP profile.

## Key Features

- **Personalized Profile**: Configure your specific FODMAP intolerances (fructanes, galactanes,
  lactose, fructose, mannitol, sorbitol)
- **Food Explorer**: Browse and search 104 foods with real-time compatibility filtering
- **Profile-Relative Filtering**: Hide foods carrying any FODMAP tag marked `avoid` in your profile
- **Detailed Food Cards**: View reference portions, FODMAP content, and category information
- **Local Profile**: Profile saved in your browser with no account
- **Mobile-Friendly**: Responsive design optimized for on-the-go use

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and builds
- **React Router** for navigation
- **Tailwind CSS** + **Shadcn/ui** for styling
- **React Context API** for state management
- **localStorage** for profile persistence

## Getting Started

### Prerequisites

- Node.js 20.19 or newer
- pnpm

This repository uses pnpm exclusively; `pnpm-lock.yaml` is the authoritative dependency lockfile.

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run lint, type checks, tests, and the production build
pnpm quality

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The app will be available at `http://localhost:8080`

## Usage

1. **Create Your Profile**: Navigate to the Profile page and configure which FODMAPs you tolerate or
   avoid
2. **Explore Foods**: Use the Explorer to browse the food database
3. **Filter by Profile**: Toggle "Sans FODMAP évité détecté" to apply the saved-profile comparison
4. **Search & Filter**: Use search and category filters to find specific foods quickly

## Methodology and data limits

The v1 profile records one binary answer (`tolerate` or `avoid`) for each of six categories:
fructanes, galactanes, lactose, fructose, mannitol, and sorbitol. The Explorer flags a food when any
of its recorded FODMAP tags matches a category marked `avoid`. Portion, confidence, and
primary/secondary tag status do not participate in that comparison. Displayed gram values are
reference portions, not personal tolerance guarantees.

The current local dataset contains **104 records with 104 unique IDs**. Repository tests validate
its structure, required fields, positive gram values, dates, categories, confidence labels, and
FODMAP tag shapes. These are engineering checks, not clinical validation.

According to the project owner, the dataset was assembled from publicly accessible online FODMAP
information. The original source-by-source acquisition and transformation lineage was not retained,
and the records were not independently clinically validated for this project. Source strings stored
on the records do not prove exact origin, accuracy, permission, or reuse rights.

The dataset is not presented as official Monash University data. This project is not affiliated
with, endorsed by, certified by, or published with reuse permission from Monash University.

The application exposes this explanation at `/methodology`. The supporting repository evidence is
recorded in [`docs/dataset-provenance.md`](docs/dataset-provenance.md).

## Important Disclaimers

This application is designed for people who have:

- Been diagnosed with IBS by a healthcare professional
- Completed FODMAP reintroduction testing under medical supervision
- Identified their specific FODMAP intolerances

**This is not a diagnostic tool** and cannot guarantee that a food or quantity will be tolerated. It
should not replace medical advice. Always consult a doctor or registered dietitian before making
dietary changes.

## Project Structure

```
src/
   components/     # UI components including Shadcn/ui library
   pages/          # Main application pages (Landing, Profile, Explorer, etc.)
   context/        # React Context for user profile management
   lib/            # Food database and utility functions
   config/         # Content, categories, and disclaimers
   styles/         # Design system and color palette
   hooks/          # Custom React hooks
   types/          # TypeScript type definitions
   constants/      # Application constants
```

## License and reuse status

No repository-level license or source-specific dataset reuse permission is currently documented.
Public accessibility and attribution alone do not establish a right to reuse or redistribute data.

## Contact

For questions or contributions, please open an issue on this repository.
