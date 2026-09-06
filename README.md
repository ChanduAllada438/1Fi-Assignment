# 1Fi Marketplace - SDE Intern Assignment

Implementation approach: Since the assignment did not provide access to the existing 1Fi source repository or backend API, this submission implements the Marketplace as a standalone Expo/React Native application. The existing 1Fi Android app was used as a reference for the Shop experience and visual language.

## What is implemented

- Shop hero, bottom navigation, and visual language informed by the provided 1Fi Android app.
- Shop sections: **Top Brands**, **Nearby Stores**, and **1Fi Marketplace**. The first two intentionally show blank-state pages, as requested.
- Marketplace product list, search, product details, variant selection, EMI-plan selection, and completion confirmation.
- Async mock repository (`lib/marketplace.ts`) that deliberately simulates API latency. UI components do not hardcode product or EMI data.
- Loading, retry/error, empty-search, and unavailable-product states.

## Getting Started

### Requirements

- Node.js 22.13+
- Expo Go
- Android phone or Android emulator

### Installation

npm install

### Start

npx expo start

### Run on Android

Press `a`

or scan the QR code using Expo Go.

## Architecture

```
app/                 Screens and Expo Router navigation
components/ui.tsx    Shared visual components and design tokens
lib/marketplace.ts   Mock asynchronous product/EMI data source and types
```

## Assignment Coverage

| Requirement | Status |
|---|---|
| Top Brands | Implemented as blank state |
| Nearby Stores | Implemented as blank state |
| 1Fi Marketplace | Implemented |
| Product listing | ✓ |
| Product images | ✓ |
| Product pricing | ✓ |
| Product variants | ✓ |
| EMI plans | ✓ |
| EMI selection | ✓ |
| Proceed CTA | ✓ |
| Mock data source | ✓ |
| Loading state | ✓ |
| Error/retry state | ✓ |
| Empty state | ✓ |


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
