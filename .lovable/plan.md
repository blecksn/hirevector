
# Making HireVector Fully Functional — Implementation Plan

## Overview
Right now HireVector is a static single-page marketing site. Making it "fully functional" means every link works, every button leads somewhere meaningful, and users can actually sign up and explore the product. Here's a phased approach, starting with the quickest wins.

---

## Phase 1: Fix Navigation and Add Core Pages

**Goal:** Every link in the navbar and footer leads to a real destination.

### 1.1 Smooth-scroll nav links
- Add matching `id` attributes to homepage sections (e.g., `id="features"` on ProblemSolution or a new Features section, `id="pricing"`, `id="about"`)
- Update Navbar links to use smooth scrolling to these anchors

### 1.2 Create Pricing Page (`src/pages/Pricing.tsx`)
- Pricing tiers (e.g., Free, Pro, Enterprise) with feature comparison table
- CTA buttons linking to signup
- Add route in `App.tsx`

### 1.3 Create About Page (`src/pages/About.tsx`)
- Company mission, team, story
- Add route in `App.tsx`

### 1.4 Create Contact Page (`src/pages/Contact.tsx`)
- Contact form (name, email, message) using react-hook-form + zod validation
- Success toast on submission
- Add route in `App.tsx`

### 1.5 Fix Footer Links
- Link product links (Vector Analysis, Career Matching, etc.) to relevant homepage sections or pages
- Link resource links (Blog, Help Center, etc.) to placeholder pages or anchors
- Add legal pages: Privacy Policy and Terms of Service (simple static content pages)

---

## Phase 2: CTA Flows and Demo

**Goal:** All call-to-action buttons do something meaningful.

### 2.1 Signup/Get Started Flow
- Create a signup page (`src/pages/Signup.tsx`) with email + password form
- "Get Started", "Calculate My Career Vector", and "Start Your Free Trial" buttons all route to this page
- Form validation with zod, success feedback with toast

### 2.2 Login Page (`src/pages/Login.tsx`)
- Email + password login form
- Link between Login and Signup pages

### 2.3 Demo Video Modal
- "Watch 2-Min Demo" button opens a dialog/modal
- Embed a video placeholder (or YouTube embed) inside the modal
- Uses the existing Radix Dialog component

---

## Phase 3: User Dashboard (Product Experience)

**Goal:** After "signing up", users land on a dashboard that represents the product.

### 3.1 Dashboard Layout (`src/pages/Dashboard.tsx`)
- Sidebar or top-nav layout
- Overview cards showing mock vector score, match count, application stats

### 3.2 Vector Analysis View
- Visual representation of career vector (radar chart using recharts)
- Mock data for skills, goals, culture fit dimensions

### 3.3 Job Matches View
- List of matched opportunities with match percentage
- Filter/sort controls

### 3.4 Trajectory Tracking View
- Line chart showing vector score over time (recharts)
- Activity feed of recent actions

---

## Phase 4: SEO and Polish

### 4.1 Meta Tags
- Add page titles, descriptions, and Open Graph tags to each page using `document.title` or a head manager

### 4.2 Legal Pages
- Privacy Policy (`src/pages/Privacy.tsx`)
- Terms of Service (`src/pages/Terms.tsx`)
- Static content pages, added to footer links

### 4.3 404 Page Enhancement
- Improve the existing `NotFound.tsx` with a back-to-home button

---

## Technical Details

### Routing Updates (`src/App.tsx`)
New routes to add:
- `/pricing` - Pricing page
- `/about` - About page
- `/contact` - Contact page
- `/signup` - Signup page
- `/login` - Login page
- `/dashboard` - Dashboard (with sub-routes for vector, matches, tracking)
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

### Component Reuse
- Navbar and Footer will be shared across pages (wrap in a layout component or include per-page)
- Existing UI components (Button, Input, Form, Card, Dialog, Tabs) are already installed and ready to use
- Recharts is already installed for dashboard charts

### No Backend Required Initially
- All forms will show success feedback without actually persisting data
- Dashboard will use mock/static data
- This keeps the site fully functional as a frontend demo

### Files to Create
- `src/pages/Pricing.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Signup.tsx`
- `src/pages/Login.tsx`
- `src/pages/Dashboard.tsx`
- `src/pages/Privacy.tsx`
- `src/pages/Terms.tsx`
- `src/components/DemoModal.tsx`
- `src/components/DashboardLayout.tsx`

### Files to Modify
- `src/App.tsx` — add all new routes
- `src/components/Navbar.tsx` — update links to use react-router `Link` and smooth scroll
- `src/components/Footer.tsx` — update links to real routes
- `src/components/HeroSection.tsx` — wire CTA buttons to routes, add demo modal
- `src/components/BottomCTA.tsx` — wire CTA button to signup route

---

## Recommended Starting Point
I'd suggest starting with **Phase 1** (navigation + core pages) since it immediately makes the site feel complete and professional. Each phase builds on the previous one. Would you like me to implement all phases, or start with Phase 1?
