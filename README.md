# Monefy - Modern Financial Dashboard

A premium, interactive financial management experience built with React 19, Vite, and Tailwind CSS v4, featuring 3D-perspective cards and real-time analytics visualizations.

## Getting Started

To get the project running locally, follow these steps:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

🔗 **[Live Demo]
(https://monefy-dashboard.netlify.app/)**

<img width="776" height="619" alt="image" src="https://github.com/user-attachments/assets/7304c028-2203-4559-908a-ce84de2e0ba3" />


---

## Project Structure

```text
src/
│
├── App.jsx            # Main application entry (Dashboard components & logic)
├── App.css            # Component-specific transitions and styles
├── index.css          # Global styles & Tailwind CSS configuration
├── main.jsx           # React DOM mounting
│
├── assets/            # Static assets and design files
│   ├── hero.png       # Background illustration
│   ├── react.svg      # Framework logo
│   └── vite.svg       # Build tool logo
│
```        

## Design Decisions

### Interactive 3D UI — Modern Perspective
I implemented custom **tilt and perspective effects** using CSS variables and JavaScript event listeners on the dashboard cards. This provides a high-end, tactile feel to the interface, making the financial data more engaging.

### Styling — Tailwind CSS v4
The project leverages **Tailwind CSS v4** for its advanced styling capabilities, including modern color palettes, backdrop blurs, and container queries, ensuring a zero-runtime CSS footprint with a premium look.

### Architecture — Component-Rich Layout
The dashboard is structured using a **centralized state management** approach within the main App component for real-time updates across the charts, transaction lists, and balance cards.

### Performance — Minimal Dependencies
By using custom **SVG icons** and optimized Tailwind utilities, the application maintains exceptionally fast load times while delivering a feature-rich, high-fidelity experience.

---

## Features Implemented

- [x] **Responsive Design**: Fluid layout optimized for mobile, tablet, and desktop screens.
- [x] **3D Interactive Cards**: Dynamic cards that respond to mouse movement for a premium feel.
- [x] **Analytics Dashboard**: Weekly spending and savings visualizations with custom bar charts
---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Vite + React 19 |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Custom SVGs + React Icons |
| **Storage** | React State (Local) |
| **Layout** | CSS Grid & Flexbox |

---
