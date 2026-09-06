# 1Fi Marketplace - SDE Intern Assignment

A standalone Expo/React Native implementation of the requested **1Fi Marketplace** feature. It was built as a separate application because the assignment did not provide a 1Fi source repository or backend API.

## What is implemented

- Shop hero, bottom navigation, and visual language informed by the provided 1Fi Android app.
- Shop sections: **Top Brands**, **Nearby Stores**, and **1Fi Marketplace**. The first two intentionally show blank-state pages, as requested.
- Marketplace product list, search, product details, variant selection, EMI-plan selection, and completion confirmation.
- Async mock repository (`lib/marketplace.ts`) that deliberately simulates API latency. UI components do not hardcode product or EMI data.
- Loading, retry/error, empty-search, and unavailable-product states.

## Run locally

Prerequisite: Node.js 18+ and the Expo Go Android app (or an Android emulator).

```bash
npm install
npx expo start
```

Scan the QR code in Expo Go, or press `a` to run with a configured Android emulator.

## Architecture

```
app/                 Screens and Expo Router navigation
components/ui.tsx    Shared visual components and design tokens
lib/marketplace.ts   Mock asynchronous product/EMI data source and types
```

## Assumptions

- The product catalogue, images, eligibility data, and EMI calculations are mocked because no backend contract was supplied.
- All EMI options are labelled no-cost to match the product premise in the assignment. A real integration would obtain eligibility and final plan values server-side before confirmation.
- The existing 1Fi app screenshots were used only as visual reference; no proprietary code or assets were copied.

## Screenshots

| Marketplace catalogue | Product Searching |
| --- | --- |
| ![Marketplace Catalogue](<Screenshots/WhatsApp Image 2026-09-06 at 2.33.32 PM (1).jpeg>) | ![Product Searching](<Screenshots/WhatsApp Image 2026-09-06 at 2.33.32 PM.jpeg>) |

| EMI plan selection | Plan confirmation |
| --- | --- |
| ![EMI plan selection](<Screenshots/WhatsApp Image 2026-09-06 at 2.32.45 PM.jpeg>) | ![Plan confirmation](<Screenshots/WhatsApp Image 2026-09-06 at 2.33.05 PM.jpeg>) |
