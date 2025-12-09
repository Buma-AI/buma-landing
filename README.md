# BumaAI Landing Page

Professional landing page for BumaAI - designed to acquire early adopters and communicate the value proposition to parents.

**Live:** [Deployed on Vercel](https://bumaai.vercel.app)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Next.js** 16.0.7 (App Router)
- **TypeScript** 5.x
- **Tailwind CSS** 4.x
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Inter Font** (Typography)

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles

components/
├── layout/
│   └── Header.tsx      # Navigation header
├── sections/
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Problem.tsx     # Problem statement
│   ├── Solution.tsx    # Solution presentation
│   ├── HowItWorks.tsx  # How it works
│   ├── Pillars.tsx    # Core pillars
│   ├── Benefits.tsx   # Benefits for parents
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── CTA.tsx         # Call-to-action section
│   └── Footer.tsx      # Footer
└── ui/
    ├── Button.tsx      # Reusable button component
    ├── Card.tsx        # Reusable card component
    └── EmailForm.tsx  # Email collection form

lib/
├── constants.ts        # Constants and data
├── design-tokens.ts    # Design tokens
└── utils.ts           # Utility functions
```

## 🎨 Design System

### Colors

- **Primary Orange**: `#D04A1B` (Professional orange)
- **Success Green**: `#059669`
- **Info Blue**: `#2563EB`
- **Purple**: `#7C3AED`
- **Rose**: `#E11D48`

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large scale
- **Body**: Medium weight, readable sizes

### Components

All UI components are in `components/ui/` and follow a consistent design system with:
- Neumorphism-style cards
- Subtle animations
- Responsive design
- Accessibility considerations

## 📱 Sections

1. **Hero** - Main value proposition with email signup
2. **Problem** - Parent pain points
3. **Solution** - How BumaAI solves problems
4. **How It Works** - Step-by-step explanation
5. **Pillars** - Core value pillars
6. **Benefits** - Benefits for children
7. **FAQ** - Frequently asked questions
8. **CTA** - Final call-to-action with email signup
9. **Footer** - Links and information

## 🔧 Configuration

### Environment Variables

No environment variables required for basic functionality.

### Vercel Deployment

The project is configured for Vercel deployment via `vercel.json`. Automatic deployments are triggered on push to the `landing-page` branch.

## 🧪 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## 📝 Features

- ✅ Fully responsive design
- ✅ Email collection forms
- ✅ Smooth animations
- ✅ SEO optimized
- ✅ Performance optimized (Next.js Image, code splitting)
- ✅ Accessible (semantic HTML, ARIA labels)

## 🚀 Deployment

The landing page is automatically deployed to Vercel when changes are pushed to the `landing-page` branch.

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📄 License

[To be determined]

---

_Last Updated: December 2025_
