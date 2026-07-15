# SaaS Homepage - Figma Implementation

## Project Overview

This project is a responsive SaaS homepage built with **Next.js**, **TypeScript**, and **Tailwind CSS** based on the provided Figma design.

The homepage is implemented using reusable React components and follows responsive design principles for desktop, tablet, and mobile devices.

---

# Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React

---

# Figma Design Analysis

## Navbar and Hero Layout

- Responsive navigation bar
- Company logo on the left
- Navigation links in the center
- Primary CTA button on desktop
- Mobile menu button on small screens
- Large centered hero heading
- Supporting description
- Primary and secondary CTA buttons
- Dashboard preview below the hero

---

## Typography and Colour Palette

### Typography

- Large bold heading
- Medium body text
- Small navigation links
- Rounded buttons

### Colours

- Light blue hero background
- White content cards
- Black primary buttons
- White outline buttons
- Gray supporting text

---

## Buttons and Visual Hierarchy

Primary Button

- Black background
- White text
- Hover effect

Secondary Button

- Outline style
- Rounded corners
- Hover effect

Visual hierarchy is maintained using:

- Large headings
- Medium descriptions
- CTA buttons
- Dashboard preview

---

## Container Width and Section Spacing

- Responsive max-width container
- Consistent horizontal padding
- Large spacing between sections
- Proper vertical spacing for desktop and mobile

---

## Reusable Components

The homepage is divided into reusable components:

- Navbar
- HeroSection
- DashboardPreview
- Features
- ClaritySection
- Testimonial
- JournalSection
- CTASection
- Footer
- Button
- Container

---

## Responsive Behaviour

### Desktop

- Full navigation links
- Large hero heading
- Side-by-side layouts

### Tablet

- Responsive spacing
- Flexible layout
- Scaled typography

### Mobile

- Menu button displayed
- Stacked buttons
- Responsive typography
- No horizontal scrolling

---

# TypeScript Practice

The project also includes a TypeScript practice file.

Implemented:

- String types
- Number types
- Boolean types
- Arrays
- Object types
- NavigationItem interface
- ButtonVariant union type
- HeroContent interface
- Typed utility function

File:

```
src/practice/typescript-practice.ts
```

---

# TypeScript Validation

Project successfully passes:

```bash
npx tsc --noEmit
```

No TypeScript errors.

---

# Responsive Testing

Tested using Chrome Developer Tools.

Devices tested:

- Desktop
- iPad Pro
- iPhone SE

No horizontal scrolling observed.

---

# Folder Structure

```
src/
 ├── app/
 ├── components/
 │    ├── layout/
 │    ├── sections/
 │    └── ui/
 └── practice/
```

---

# Deliverables

✅ Responsive Navbar

✅ Hero Section

✅ Dashboard Preview

✅ First Feature Section

✅ Reusable Components

✅ TypeScript Practice

✅ README Updated

✅ Responsive Design

✅ TypeScript Check Passed

---

# Git Commands Used

```bash
git add .
git commit -m "Build responsive SaaS homepage from Figma"
git push origin master
```

---

# Author

**Amna Iqbal**

BS Computer Science

University of Gujrat