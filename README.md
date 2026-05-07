# Clinic Manager Docs

Presentation and internal documentation site for the Ramm Healthcare Android app.

The site explains what the app does, how the clinic workflow moves from registration to consultation and pharmacy billing, and how the Android implementation is structured around SQLite, Firebase Realtime Database, Firebase Auth, ML Kit barcode scanning, UPI QR generation, staff roles, and local backup/restore.

## Product Summary

Ramm is an Android clinic manager for small healthcare practices. It replaces paper registers with a local-first workflow:

- Patient lookup and registration by phone number.
- Doctor fee collection and visit notes with symptoms, diagnosis, category, and payment mode.
- Pharmacy cart, barcode scanning, discounts, cash or UPI QR payments, and stock reduction.
- Admin tools for inventory, illness categories, staff invitations, financial reports, backup, and restore.
- Firebase workspace sync for shared clinic settings, patients, visits, invitations, staff membership, medicine inventory, and real-time signals.

## Local Development

```bash
npm install
npm run dev
```

Open the local Next.js URL printed by the command.

## Static Build

```bash
npm run build
```

The site uses static export through `next.config.js`, so production files are generated in `out/`.

## Content Map

- `components/Hero.tsx` introduces Ramm and shows the live app dashboard screenshot.
- `components/Features.tsx` summarizes clinic capabilities.
- `components/UserFlow.tsx` documents the patient journey.
- `components/SystemDesign.tsx` explains the local schema and sync contract.
- `components/Screenshots.tsx` renders the app screenshot gallery.
- `components/Documentation.tsx` contains operator, schema, Firebase, permission, and build notes.
- `components/Architecture.tsx` explains the Android, SQLite, Firebase, and signaling layers.
- `components/TechStack.tsx` lists the implementation technologies.

## Screenshot Updates

Screenshots live in `public/assets/img/`.

Replace the existing image files when the Android UI changes. If filenames change, update `components/Screenshots.tsx` and any hero image references. Keep screenshots uncropped enough to show real app state; the docs site is meant to demonstrate the actual product, not generic mockups.

## Android Facts Reflected In The Docs

- Android namespace and application ID: `com.ramm`.
- Current local database: `clinicdb`, `DBHelper.DATABASE_VERSION = 7`.
- Main SQLite tables: `patients`, `visits`, `categories`.
- Inventory file: `/clinic/medicines.txt`.
- Backup directory: `/Clinic/Backup`.
- Main roles: `Admin`, `Doctor`, `Manager`, `Staff`.
- Important permissions: `CAMERA`, `INTERNET`, `ACCESS_NETWORK_STATE`, storage access, `POST_NOTIFICATIONS`, and foreground data sync.
- Barcode stack: CameraX + ML Kit barcode scanning.
- QR stack: ZXing QR generation for UPI payment URIs.

## Deployment

The repo includes a GitHub Pages workflow in `.github/workflows/deploy.yml`.

Manual deploy:

```bash
npm run build
npm run deploy
```

## Maintenance Notes

When the Android app changes, update the docs in the same pass:

1. New screen or workflow: update `Screenshots.tsx`, `UserFlow.tsx`, and `Documentation.tsx`.
2. New database columns: update the DB Schema tab in `Documentation.tsx`.
3. New Firebase node or sync behavior: update the Firebase Model tab.
4. New Android permission: update the Permissions tab and this README.
5. New dependency or SDK target: update `TechStack.tsx` and Build Setup.

