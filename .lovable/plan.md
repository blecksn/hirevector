

# Waitlist, Social Links, Logo, and StaticForms Integration

## Overview
Transform all CTA buttons to open a "Coming Soon — Join the Waiting List" modal, add social media links to the footer, update the logo branding, and integrate StaticForms to send submissions to hello@hirevector.ai.

---

## 1. Create WaitlistModal Component

**New file: `src/components/WaitlistModal.tsx`**

A reusable Dialog (Radix) component with:
- Header: "Coming Soon" with subheading "Join the Waiting List"
- Form fields: Name, Email, Role/Title (optional)
- Hidden fields for StaticForms: `apiKey`, `subject`, `replyTo`, `accessKey`
- Submit via `fetch("https://api.staticforms.dev/submit")` with JSON body
- On success: show toast "You're on the list!" and close modal
- On error: show error toast
- Zod validation for name + email
- Expose via React context so any component can trigger it

**New file: `src/components/WaitlistContext.tsx`**

A simple context provider with `openWaitlist()` function so any button anywhere can open the modal without prop drilling:

```text
WaitlistProvider
  +-- state: isOpen
  +-- openWaitlist()
  +-- closeWaitlist()
  +-- WaitlistModal rendered inside provider
```

## 2. StaticForms Integration

The form will POST to `https://api.staticforms.dev/submit` with:
- `name`, `email` from form fields
- `subject`: "New HireVector Waitlist Signup"
- `replyTo`: the user's email
- `accessKey`: StaticForms API key (this is a **public/publishable key**, safe to store in code)

**Important**: You'll need to register at [staticforms.dev](https://www.staticforms.dev) and get your API key (access key). I'll add a placeholder that you can replace with your actual key, or you can provide it to me.

## 3. Wire All CTA Buttons to Open Waitlist

Replace all `Link to="/signup"` CTA buttons with `onClick={() => openWaitlist()}`:

| File | Button Text | Current Action |
|------|------------|---------------|
| `Navbar.tsx` | "Get Started" (desktop + mobile) | Link to /signup |
| `HeroSection.tsx` | "Calculate My Career Vector" | Link to /signup |
| `BottomCTA.tsx` | "Start Your Free Trial" | Link to /signup |
| `Pricing.tsx` | "Get Started Free" / "Start Free Trial" / "Contact Sales" | Link to /signup or /contact |

Each button changes from `<Button asChild><Link to="/signup">` to `<Button onClick={openWaitlist}>`.

## 4. Update Footer with Social Links

Add a "Connect" column to the footer with:
- LinkedIn: https://www.linkedin.com/company/hire-vector
- Instagram: https://instagram.com/hirevector.ai (using @hirevector.ai)
- X/Twitter: https://x.com/hirevector
- GitHub: https://github.com/hirevector

These will open in new tabs (`target="_blank" rel="noopener noreferrer"`).

## 5. Update Logo

Replace the current ArrowUpRight icon + "HireVector" text logo with a refined version. Since no logo image file was provided, I'll keep the text-based logo but update the styling to be more distinctive. If you upload a logo image later, I can swap it in.

Changes in `Navbar.tsx` and `Footer.tsx`:
- Update the brand mark styling for a cleaner look

## 6. Wrap App in WaitlistProvider

Update `App.tsx` to wrap routes in `<WaitlistProvider>` so the modal is accessible from any page.

---

## Files to Create
- `src/components/WaitlistModal.tsx` — modal with form + StaticForms integration
- `src/components/WaitlistContext.tsx` — context provider for opening modal globally

## Files to Modify
- `src/App.tsx` — wrap in WaitlistProvider
- `src/components/Navbar.tsx` — CTA buttons open waitlist, update logo
- `src/components/HeroSection.tsx` — CTA button opens waitlist
- `src/components/BottomCTA.tsx` — CTA button opens waitlist
- `src/pages/Pricing.tsx` — CTA buttons open waitlist
- `src/components/Footer.tsx` — add social links column, update logo

