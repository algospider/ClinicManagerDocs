# Clinic Manager Documentation Website

This is the official documentation and presentation website for the **Clinic Manager** Android application. Built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build (Static Export)
```bash
npm run build
```
The static files will be generated in the `out/` directory.

## 📱 How to Replace Screenshots
To update the app screenshots shown on the website:
1. Go to `public/assets/img/`.
2. Replace the existing images (`1.png`, `2.png`, etc.) with your new screenshots using the same filenames.
3. If you add more images or change filenames, update the references in `components/Screenshots.tsx`.

## 🌐 Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Option 1: Manual Deployment
1. Run `npm run build`.
2. Push the contents of the `out/` directory to your `gh-pages` branch.

### Option 2: GitHub Actions (Recommended)
Create a file at `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## 🛠 Tech Stack
- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages (Static Export)

## 📄 License
This project is licensed under the MIT License.
