# Digital Garage — Intro Website

A single-page intro/marketing site for the two Digital Garage mobile apps
(Car Owner + Provider), built with React + TypeScript + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

## Before you deploy

**1. Add your APK files.** Build each app:
```bash
flutter build apk --release
```
Then copy the output (`build/app/outputs/flutter-apk/app-release.apk`) into
this project as:
```
public/downloads/digital-garage-car-owner.apk
public/downloads/digital-garage-provider.apk
```
(see `public/downloads/README.md`)

**2. Replace the placeholder icons.** `public/apple-touch-icon.png`,
`public/icon-192.png`, and `public/icon-512.png` are simple generated
placeholders (an orange square with a wrench glyph) — swap them for a
real app icon once you have one, keeping the same filenames and sizes.

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

## How the "install" flows work

- **Android**: the download buttons link directly to the `.apk` files in
  `public/downloads/`. The browser downloads it, then the person opens
  the file from their notifications to install it (after allowing
  "install from unknown sources" on first use — Android APKs installed
  outside the Play Store always require this).
- **iPhone**: iOS cannot install `.apk` files at all (that's an
  Android-only format) — there's no way around this without a native iOS
  build submitted to the App Store. What this site offers instead is
  installing *the website itself* as a Home Screen shortcut (a
  lightweight PWA) via Safari's Share → Add to Home Screen, so it opens
  full-screen without browser chrome next time. The `DownloadSection`
  component detects the visitor's OS and highlights the right
  instructions automatically.
# digital-garage-website
