# Digital Garage — Intro Website

A single-page intro/marketing site for the two Digital Garage mobile apps
(Car Owner + Provider), built with React + TypeScript + Tailwind CSS v4.
Android only — see below for why.

## Getting started

```bash
npm install
npm run dev
```

## Before you deploy

**1. Add your APK files.** Build each app split by architecture:
```bash
flutter build apk --release --split-per-abi
```
This produces three files in `build/app/outputs/flutter-apk/`. Copy all
three into the matching folder here (see `public/downloads/README.md`
for exact filenames):
```
public/downloads/car-owner/   <- from digital_garage_car_owner
public/downloads/provider/    <- from digital_garage_provider
```

**2. Replace the placeholder icons.** `public/icon-192.png` and
`public/icon-512.png` are simple generated placeholders (a green square
with a wrench glyph) — swap them for a real app icon once you have one,
keeping the same filenames and sizes.

**3. Add real screenshots (optional).** `src/components/PhoneMockup.tsx`
currently hand-recreates each app's home screen in CSS/Tailwind rather
than using a real screenshot. Once you have real device screenshots,
swap the mockup's inner content for an `<img>` — the phone bezel frame
can stay as-is.

## Build for production

```bash
npm run build
```
Output lands in `dist/` — deploy that folder to any static host (Vercel,
Netlify, GitHub Pages, S3+CloudFront, or a simple nginx server all work
fine, since this is a fully static site with no backend).

## Why Android only

Both Digital Garage apps are distributed as direct APK downloads, not
through the Play Store or App Store. iOS **cannot** install `.apk` files
at all — that's an Android-only format — so there's no way to offer an
equivalent "download and install" flow on iPhone without a real native
iOS build submitted through Apple's App Store. This site reflects that
honestly rather than offering an iPhone path that doesn't actually work.
