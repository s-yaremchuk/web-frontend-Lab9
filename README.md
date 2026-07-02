# Ukrzaliznytsia Train Search — React SPA

A single-page React application that replicates the core search experience of Ukraine's national railway operator **Ukrzaliznytsia**. Users can browse a static catalogue of train routes, filter them in real time by departure city, arrival city, or train number, and narrow results to a specific travel date — all within a responsive, brand-consistent UI.

This lab focuses on **client-side data management**: filtering a local dataset without a backend, composing reusable React components, and implementing a polished UX with micro-animations and mobile-first CSS.

---

## 🛠 Tech Stack

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?logo=css3&logoColor=white&style=flat-square)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-Inter-4285F4?logo=google&logoColor=white&style=flat-square)

| Concern        | Solution                            |
|----------------|-------------------------------------|
| UI framework   | React 19                            |
| Styling        | Vanilla CSS + CSS Modules + CSS variables |
| Data layer     | Static JS module (`trains.js`)       |
| Filtering      | Client-side `Array.filter()` on controlled inputs |
| Typography     | Inter (Google Fonts)                |
| Bundler        | Vite 8                              |

---

## ✨ Features

- **Train catalogue display** — each card shows train number, route (departure → arrival), departure and arrival time, trip duration, available wagon classes, and the minimum ticket price
- **Real-time search** — a single search input filters across three fields simultaneously: departure city, arrival city, and train number; results update on every keystroke with no debounce lag at this dataset size
- **Date filter** — a native date picker lets users narrow results to a specific travel date; only trains operating on the selected date are shown
- **Combined filtering** — text search and date filter compose correctly; both conditions are applied simultaneously
- **Responsive layout** — the card grid adapts from a single column on mobile to a multi-column layout on wider screens using CSS Grid and media queries
- **Micro-animations** — cards appear with a staggered fade-in on first load; hover effects on cards and buttons provide tactile feedback
- **Brand styling** — the colour palette, typography, and visual language follow the Ukrzaliznytsia identity (navy, yellow accents, Inter typeface)

---

## 🏗 Architecture

```
src/
├── App.jsx                   # Root component (no routing needed — single page)
├── index.css                 # Global reset, CSS custom properties (brand colours, spacing)
├── data/
│   └── trains.js             # Static dataset — array of train objects
├── pages/
│   ├── Home.jsx              # Manages filter state; composes SearchBar + TrainList
│   └── Home.module.css
└── components/
    ├── SearchBar.jsx         # Controlled input + date picker; calls onFilter callback
    ├── SearchBar.module.css
    ├── TrainList.jsx         # Dumb list — receives filtered array, renders TrainCard per item
    ├── TrainList.module.css
    ├── TrainCard.jsx         # Presentational card: all train details, no state
    └── TrainCard.module.css
```

### Design Decisions

**State lives in the page, not the components**
`Home.jsx` owns `query` (text filter) and `date` (date filter) state. `SearchBar` receives `onFilter` callbacks and is fully controlled. `TrainList` and `TrainCard` are purely presentational — they receive data and render it, with no internal state. This makes the filter logic trivial to test and reason about.

**Static data module over a mock API**
The dataset is a plain JavaScript array imported directly into the page. This keeps the project zero-dependency on a running backend and keeps the focus on React component design and CSS. The data structure mirrors what a real API response would look like, so replacing the import with a `fetch()` call would require minimal changes.

**CSS Modules for style isolation**
Each component has its own `.module.css` file. Global styles (resets, CSS variables for the brand palette) live in `index.css` and are imported once at the root. This prevents class name collisions and makes the style ownership of each component explicit.

**CSS custom properties for theming**
All brand colours, border radii, and shadows are defined as CSS variables on `:root`. This makes it straightforward to apply a dark mode or adjust branding without touching individual component stylesheets.

---

## 🚀 Installation & Running

**Prerequisites:** Node.js ≥ 18

```bash
# Clone and enter the directory
git clone https://github.com/s-yaremchuk/web-frontend-Lab9.git
cd web-frontend-Lab9

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. No backend or environment configuration required.

---

## 📖 Usage

1. **Browse** — all trains are shown on load
2. **Search** — type a city name or train number in the search field; the list filters immediately
3. **Filter by date** — open the date picker and select a travel date; only trains for that date remain visible
4. **Clear** — remove the text from the search input or deselect the date to reset that filter

---

## 🔍 Challenges & Learnings

**Composing multiple independent filters** — applying text search AND date filter simultaneously required understanding how to chain `Array.filter()` calls so that each condition is independent and the order does not matter. A single filter function with multiple `&&` conditions is simpler and more predictable than chaining `.filter()` calls, especially when either condition can be empty (which means "no filter").

**CSS Grid for responsive card layout** — using `auto-fill` with `minmax()` allows the grid to decide how many columns fit without breakpoints, which proved more maintainable than explicit media queries for each screen width.

**Brand consistency without a design system** — replicating a brand identity in pure CSS without a pre-built component library required defining a coherent set of CSS variables up front. This discipline paid off: adjusting any colour required a single variable change rather than hunting through multiple files.

---

## 🔭 Roadmap / What Could Be Improved

- [ ] Connect to the real Ukrzaliznytsia API (or a proxy) for live schedule data
- [ ] Add route selection (from/to city as separate autocomplete inputs)
- [ ] Implement sorting by price, departure time, or trip duration
- [ ] Add a loading skeleton for when the data source is replaced with a real API call
- [ ] Extend to LB10 — add wagon selection and seat booking (see the next lab)

---

## 👤 Author

**Serhii Yaremchuk** — 2nd year student, Client-Side Programming course  
GitHub: [s-yaremchuk](https://github.com/s-yaremchuk)
