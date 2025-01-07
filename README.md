# Project Setup

This project uses **Vite** and requires **Node.js v20** or higher.

## Prerequisites

- Ensure you have **Node.js v20+** installed. You can check your Node.js version with:
```bash
node -v
```

- Start the Development Server
```bash
npm install
npm run dev
```

# Project Folder Structure

This project is organized following a **modular and feature-driven architecture**. The structure is designed for scalability, maintainability, and separation of concerns.

The components/mui folder should only include the most commonly used MUI components to simplify maintenance. This reduces repetitive updates when MUI versions change or components are deprecated.

How to Use: Add or modify only the most frequently used MUI components in the components/mui directory. Import them throughout the app for consistency and easier updates.

## How to Add New Features

1. Create a new folder under `modules` for the feature.
2. Add `components` and `utils` etc (if needed) to organize the feature's code.
3. Update the `ThemeProvider` or constants in the `theme` folder if the feature requires additional theming.

## Folder Structure (example)
```bash
public
src
├── assets
├── components
│   └── mui
│       └── index.ts
├── layout
│   ├── header
│   │   └── Header.tsx
│   └── index.tsx
├── modules
│   └── markdown
│       └──components
├── pages
│   └── Home.tsx
├── theme
│   └── constants.tsx
│   └── theme.tsx
│    └── ThemeProvider.tsx
└── util
```
