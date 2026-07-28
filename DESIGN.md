---
name: Clinica Madelcap
description: Landing medica local con recepcion luminosa, glassmorphism funcional y accion directa por WhatsApp.
colors:
  brand-orange: "#f26a21"
  brand-orange-deep: "#c94c13"
  brand-orange-dark: "#8f310d"
  brand-orange-burnt: "#9b390f"
  brand-orange-soft: "#fff0e8"
  clinical-teal: "#0b7b83"
  whatsapp-green: "#1fa855"
  whatsapp-green-deep: "#178a47"
  ink: "#17252a"
  muted-text: "#58676d"
  paper: "#fffaf6"
  clinic-white: "#ffffff"
typography:
  display:
    fontFamily: "Aptos, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(4.1rem, 11vw, 8.8rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "0"
  headline:
    fontFamily: "Aptos, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(2.35rem, 5vw, 4.8rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "0"
  body:
    fontFamily: "Aptos, Segoe UI, Arial, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.55
rounded:
  pill: "999px"
  card: "16px"
  panel: "20px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "34px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.brand-orange}"
    textColor: "{colors.clinic-white}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.74)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  glass-card:
    backgroundColor: "rgba(255, 255, 255, 0.68)"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px"
---

# Design System: Clinica Madelcap

## Overview

**Creative North Star: "Recepcion luminosa de barrio"**

The system turns the first website touchpoint into the feeling of arriving at a clean, bright clinic reception in Nemby. Real facade and professional photography carry trust; translucent surfaces carry orientation, appointment cues, service summaries, and next actions.

The visual language is warm and clinical rather than sterile. Orange is the brand signal and primary action color, white is the main material, teal gives healthcare contrast, and ink keeps serious information readable. Glassmorphism is reserved for navigation, action panels, and service cards where layered context helps the patient stay oriented.

**Key Characteristics:**

- Real Madelcap imagery leads before abstract decoration.
- Fixed glass navigation keeps appointment action available without blocking content.
- Large, plain headlines make the offer clear in seconds.
- Cards feel like translucent reception windows, not decorative blur.
- Mobile layouts favor one decision at a time.

## Colors

The palette combines brand orange and white with teal clinical support and ink text so the page stays recognizably Madelcap without becoming one-note.

### Primary
- **Brand Orange**: The main CTA, active accents, counters, and WhatsApp-adjacent urgency.
- **Deep Appointment Orange**: Button gradients, hover depth, and text links that need stronger contrast.
- **Dark Reception Orange**: Full-width service strip backgrounds and premium hover depth where white text needs a richer brand field.
- **Burnt Orange**: Secondary stop for the dark service strip gradient.
- **Soft Orange Reception Light**: Warm page wash and section transitions behind glass cards.

### Secondary
- **Clinical Teal**: Secondary service labels, diagnostic context, and cool balance against orange.
- **WhatsApp Green**: Floating WhatsApp action only, preserving the expected channel affordance.
- **Deep WhatsApp Green**: Hover state for the floating WhatsApp action.

### Neutral
- **Ink**: Headings, navigation text, and serious clinical information.
- **Muted Text**: Supporting paragraphs and card descriptions.
- **Paper**: Warm page background.
- **Clinic White**: Glass base, cards, and high-clarity reading surfaces.

### Named Rules

**The Orange Means Action Rule.** Bright orange should lead booking and high-intent movement; dark orange can own navigational service bands when the surface needs brand weight.

**The Glass Needs a Job Rule.** Blur belongs on navigation, reception data, service cards, and appointment panels where it preserves context behind information.

## Typography

**Display Font:** Aptos with Segoe UI and Arial fallbacks.
**Body Font:** Aptos with Segoe UI and Arial fallbacks.

**Character:** The type is direct, civic, and easy to scan. Heavy display headlines give confidence while body copy stays familiar for patients reading on mobile.

### Hierarchy
- **Display** (800, clamp(4.1rem, 11vw, 8.8rem), 0.88): Used only for the first viewport product name.
- **Headline** (800, clamp(2.35rem, 5vw, 4.8rem), 0.98): Section leads and conversion blocks.
- **Title** (800, 1rem-1.7rem): Service, doctor, panel, and diagnostic names.
- **Body** (400-650, 1rem, 1.55): Descriptions, practical notes, and supporting context.
- **Label** (800-900, 0.82rem-0.93rem): Navigation, panel labels, and compact action text.

### Named Rules

**The No-Eyebrow Rule.** Section headings carry the message themselves; small labels above headings are not part of this system.

## Layout

The landing uses a centered 1120px content field with full-width bands. The first viewport is a facade-led hero with copy on the left and a translucent reception panel on the right. Content alternates between broad explanatory sections, dense service grids, diagnostic lists, and a simple appointment close.

Desktop layouts use two-column moments and four-column service density. Tablet collapses to two columns. Mobile collapses to one column, keeps the nav compact, and makes WhatsApp actions full width where the thumb target matters.

## Elevation & Depth

Depth is a hybrid of translucent glass, real photography, and soft structural shadows. Shadows must have offset and blur; glow-only halos are not part of the system.

### Shadow Vocabulary
- **Glass Lift** (`0 24px 70px rgba(62, 54, 45, 0.18)`): Main translucent panels and service cards.
- **Photo Card Lift** (`0 16px 44px rgba(31, 42, 46, 0.12)`): Professional cards and contained imagery.
- **Action Lift** (`0 10px 28px rgba(242, 106, 33, 0.3)`): Primary appointment buttons.

## Shapes

The system uses gently curved rectangles for cards and panels, with pill shapes only for small controls and CTAs. Main cards use 16px radius, the appointment close uses 20px, and nav/buttons use full pill radius. Avoid nested cards and heavy framed sections.

## Components

### Buttons
- **Shape:** Pill controls with fixed 44px minimum height.
- **Primary:** Orange-to-deep-orange background, white text, bold label, and action shadow.
- **Secondary:** Translucent white surface with ink text for lower-intent navigation.
- **WhatsApp Floating:** Green pill with a circular icon well; hover deepens the green and lifts the button.
- **Hover / Focus:** Background shift or soft surface change; focus must remain visible and not depend on color alone.

### Cards / Containers
- **Corner Style:** Soft card radius at 16px.
- **Background:** Translucent white glass for service and reception cards; solid white for doctor cards.
- **Shadow Strategy:** Glass Lift for translucent panels, Photo Card Lift for image cards.
- **Border:** A subtle white glass border, never a thick colored side rule.
- **Internal Padding:** 20px for service cards, 28px-34px for larger panels.

### Navigation
- **Style:** Fixed, centered compact glass bar with logo, tight text links, delayed sibling blur on sustained hover, and a persistent appointment CTA.
- **Mobile:** Logo plus circular menu button; expanded links stay inside the glass container.

### Footer

The footer uses the Madelcap logo on a white plate, a short brand line, and practical links for address, email, Instagram, and Facebook. Footer links remain white at rest and turn Brand Orange on hover or focus.

### Service Strip

The service strip uses dark orange glass tiles over a saturated orange band. Hover lifts the tile, adds a traveling sheen, and keeps the service label legible in white.

### Reception Panel

The signature information module stacks hours, contact, and service breadth in glass-backed rows. It belongs in conversion-heavy contexts where patients need confidence before tapping WhatsApp.

## Do's and Don'ts

### Do:
- **Do** keep WhatsApp actions visible and named plainly as booking actions.
- **Do** lead with real clinic photography when introducing Madelcap.
- **Do** use glass on surfaces that organize practical information over contextual backgrounds.
- **Do** keep clinical facts specific and sourced from PRODUCT.md or `madelcap.md`.

### Don't:
- **Don't** invent testimonials, certifications, prices, insurance claims, or medical outcomes.
- **Don't** use glassmorphism as loose decoration with unreadable contrast.
- **Don't** turn the orange/white brand into a one-color page; keep ink and teal roles active.
- **Don't** use generic stock-doctor hero imagery when real facade and team assets exist.
