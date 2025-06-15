# Preparing for Production Project

This demo project shows how to prepare a small front‑end application for production.

## Getting Started

```bash
npm install
npm run start   # start dev server on http://localhost:1234
```

## Production Build

```bash
npm run build   # outputs minified assets to ./dist
```

## Testing

```bash
npm test        # unit tests with Mocha
npm run e2e     # Cypress end‑to‑end tests (headless)
```

## Gulp Tasks

```bash
gulp           # runs build, test, and e2e tasks in sequence
```
