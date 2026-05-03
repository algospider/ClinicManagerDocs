# Clinic Manager Product Presentation Website

This is the official presentation and internal documentation website for the **Clinic Manager** Android application. Built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start (Development)

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

## 📱 How to Update Screenshots
To update the app screenshots shown on the website:
1. Go to `public/assets/img/`.
2. Replace the existing images (`home.jpg`, `pharmacy.jpg`, etc.) with your new screenshots.
3. Update the references in `components/Screenshots.tsx` if filenames change.

## 🌐 Deployment to GitHub Pages

### Option 1: Manual Deployment
1. Run `npm run build`.
2. Push the contents of the `out/` directory to your hosting branch.

### Option 2: GitHub Actions (Automated)
The project includes a `.github/workflows/deploy.yml` for automated deployment to GitHub Pages. Ensure "GitHub Actions" is selected as the source in your repo settings.

## 🛠 Tech Stack
- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages (Static Export)

## 📄 License
Proprietary Software. All rights reserved.
