# MonGuide FODMAP

A personalized FODMAP dietary guide for people with IBS who have completed FODMAP reintroduction testing.

## Overview

MonGuide FODMAP is a web application that helps individuals with Irritable Bowel Syndrome (IBS) navigate their diet after completing FODMAP reintroduction with a healthcare professional. Unlike generic low-FODMAP food lists, this app filters a comprehensive food database according to each user's specific, individually-tested FODMAP intolerances.

## Key Features

- **Personalized Profile**: Configure your specific FODMAP intolerances (fructanes, galactanes, lactose, fructose, mannitol, sorbitol)
- **Food Explorer**: Browse and search 110 foods with real-time compatibility filtering
- **Smart Filtering**: See only foods that match your tolerance profile
- **Detailed Food Cards**: View safe portion sizes, FODMAP content, and category information
- **Offline-First**: Profile saved locally in your browser for privacy and speed
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

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:8080`

## Usage

1. **Create Your Profile**: Navigate to the Profile page and configure which FODMAPs you tolerate or avoid
2. **Explore Foods**: Use the Explorer to browse the food database
3. **Filter by Compatibility**: Toggle "Compatible for me" to see only foods that match your profile
4. **Search & Filter**: Use search and category filters to find specific foods quickly

## Data Source

All food information is based on the **Monash University FODMAP Database** (2024-2025), the gold standard for FODMAP content research.

## Important Disclaimers

This application is designed for people who have:
- Been diagnosed with IBS by a healthcare professional
- Completed FODMAP reintroduction testing under medical supervision
- Identified their specific FODMAP intolerances

**This is NOT a diagnostic tool** and should not replace medical advice. Always consult with your doctor or registered dietitian before making dietary changes.

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

## License

This project is for educational and personal use. Food data is attributed to Monash University.

## Contact

For questions or contributions, please open an issue on this repository.
