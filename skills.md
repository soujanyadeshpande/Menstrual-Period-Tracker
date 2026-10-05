## Project
**Menstrual Period Tracker** — responsive MERN web app for tracking menstrual cycles, detecting delays/preponement, analyzing patterns, and providing personalized insights.

## Tech Stack
- **Frontend:** React.js, JavaScript, HTML5, CSS3 / Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Charts:** Recharts
- **Icons:** Lucide React

## Frontend Goals
- Clean, modern, calm healthcare-focused UI.
- Mobile-first and fully responsive across mobile, tablet, laptop, and desktop.
- Minimal UI with clear hierarchy and easy navigation.
- Use reusable components and consistent spacing, typography, colors, and cards.
- Never overcrowd screens with unnecessary information.
- Accessible contrast, readable typography, keyboard-friendly controls.

## Core Pages

### 1. Dashboard
Show:
- Current menstrual phase
- Cycle day
- Next expected period
- Days remaining / delay
- Quick cycle summary
- Recent cycle history
- Key health insights
- CTA to log period

### 2. Cycle Tracker
Show:
- Calendar-based period tracking
- Period start/end dates
- Cycle length
- Expected vs actual period
- Delayed/preponed status
- Cycle history
- Add/edit period entries

### 3. Analysis & Insights
Show:
- Cycle-length trends
- Delay/preponement analysis
- Period regularity
- Historical comparisons
- Charts and statistics
- Possible contributing factors
- Personalized actionable suggestions

> Insights must be presented as informational guidance, not medical diagnosis.

### 4. Profile / Settings
Show:
- User profile
- Average cycle length
- Average period duration
- Notification preferences
- Data/privacy settings
- Edit tracking preferences

## Navigation
Desktop:
`Logo → Dashboard → Tracker → Analysis → Profile`

Mobile:
- Bottom navigation with 4 primary sections.
- Keep important actions easily reachable.

## Reusable Components
Create reusable:
- Navbar
- Mobile bottom navigation
- Cards
- Calendar
- Cycle status badge
- Charts
- Insight cards
- Modal/Form
- Buttons
- Empty states
- Loading states
- Error states

## Design System
- Soft healthcare-inspired visual language.
- Use one primary accent color with neutral backgrounds.
- Rounded cards, subtle borders/shadows.
- Clear status indicators for:
  - On time
  - Delayed
  - Preponed
- Avoid excessive gradients, animations, and decorative elements.

## Responsive Requirements
Use mobile-first responsive design.

Test at minimum:
- 320px mobile
- 375px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop

No horizontal scrolling.
Charts, calendars, cards, forms, and navigation must adapt correctly.

## Frontend Architecture
```text
src/
├── components/
├── pages/
│   ├── Dashboard.jsx
│   ├── Tracker.jsx
│   ├── Analysis.jsx
│   └── Profile.jsx
├── hooks/
├── services/
├── utils/
├── assets/
├── App.jsx
└── main.jsx