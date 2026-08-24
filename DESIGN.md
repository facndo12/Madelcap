---
name: Clinica Madelcap
description: Landing medica local con recepcion luminosa, identidad anclada en el isotipo y accion directa por WhatsApp.
colors:
  brand-orange: "#fe5800"
  orange-action: "#d24200"
  orange-deep: "#b03700"
  orange-dark: "#8f2e00"
  orange-burnt: "#a83505"
  orange-soft: "#fff1e9"
  brand-grey: "#58595b"
  ink: "#2c2d30"
  muted-text: "#6e6f74"
  paper: "#fffaf6"
  clinic-white: "#ffffff"
  whatsapp-green: "#1fa855"
typography:
  display:
    fontFamily: "Montserrat, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(4.1rem, 11vw, 8.8rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Montserrat, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 4.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Montserrat, Segoe UI, Arial, sans-serif"
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
    backgroundColor: "{colors.orange-action}"
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
  service-card:
    backgroundColor: "{colors.clinic-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "18px"
  glass-panel:
    backgroundColor: "rgba(255, 255, 255, 0.68)"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px"
---

# Design System: Clinica Madelcap

## Overview

**Creative North Star: "Recepcion luminosa de barrio"**

The system turns the first website touchpoint into the feeling of arriving at a clean, bright clinic reception in Nemby. Real facade and professional photography carry trust; translucent surfaces carry orientation, appointment cues, and next actions.

The palette, the display type, and the page motif are all derived from the existing isotipo rather than invented alongside it. The mark supplies two colors and one graphic device, and the system does not add a third hue.

**Key Characteristics:**

- Every brand value in this system is sampled from the logo file, not chosen next to it.
- Real Madelcap imagery leads before abstract decoration.
- Fixed glass navigation keeps appointment action available without blocking content.
- Large serif headlines echo the wordmark and make the offer clear in seconds.
- Mobile layouts favor one decision at a time.

## Colors

The palette is orange plus a neutral ramp. Both come from the isotipo: the pulse is `#fe5800` and the wordmark is `#58595b`. There is no third hue, and the earlier clinical teal has been retired because it appeared nowhere in the brand and survived only as 0.82rem labels.

### Primary

- **Brand Orange** (`#fe5800`): The literal ink of the isotipo. Reserved for signal — the mark, the pulse motif, numerals, and thin rules.
- **Action Orange** (`#d24200`): The lightest orange that carries white text at AA. Start of the primary button gradient.
- **Deep Orange** (`#b03700`): End of the button gradient, and orange text on light surfaces.
- **Dark Reception Orange** (`#8f2e00`) and **Burnt Orange** (`#a83505`): The full-width service band.
- **Soft Orange Reception Light** (`#fff1e9`): Warm page wash and section transitions.

### Neutral

- **Brand Grey** (`#58595b`): The wordmark grey. Panel labels and mid-tone UI.
- **Ink** (`#2c2d30`): Headings, body copy, and the footer field. A darker step of the same neutral family.
- **Muted Text** (`#6e6f74`): Supporting paragraphs and card descriptions.
- **Paper** (`#fffaf6`) and **Clinic White** (`#ffffff`): Page and card surfaces.

### Named Rules

**The Signal-Not-Surface Rule.** Brand Orange is 3.2:1 against white and 3.1:1 as text on paper. It never sits under white text and is never used for text below 24px. Anything carrying text uses Action Orange or darker. Every pair in this system was measured, not eyeballed; the previous palette shipped buttons at 3.05:1.

**The Orange Means Action Rule.** Bright orange leads booking and high-intent movement; dark orange owns navigational service bands when the surface needs brand weight.

**The Glass Needs a Job Rule.** Blur belongs where it preserves context behind information: the navigation and the reception panel, both of which float over photography. Service cards are solid white. When every surface is translucent, translucency stops signalling hierarchy and becomes wallpaper.

## Typography

**Display and Body Font:** Montserrat (OFL, self-hosted, variable 400-900, latin subset) with Segoe UI and Arial fallbacks.

**Character:** Montserrat is the face the clinic already uses across its Instagram pieces, so the site and the feed read as one brand. That is a stronger anchor than the logo alone: the wordmark is a static asset, while the social posts are the brand expression patients actually see every week. One family covers display and body, differentiated by weight rather than by contrast of family.

### Hierarchy

- **Display** (Montserrat 800, clamp(4.1rem, 11vw, 8.8rem), 0.88): The first viewport product name only.
- **Headline** (Montserrat 800, clamp(2.2rem, 4.4vw, 4rem), 1.02): Section leads and conversion blocks.
- **Title** (sans 800, 1.08rem-1.6rem): Service, doctor, panel, and diagnostic names.
- **Body** (400-650, 1rem, 1.55): Descriptions, practical notes, and supporting context.
- **Label** (800-900, 0.82rem-0.93rem): Navigation, panel labels, and compact action text.

### Named Rules

**The No-Eyebrow Rule.** Section headings carry the message themselves; small labels above headings are not part of this system.

**The Diacritic Headroom Rule.** Display leading below 1.0 only holds for strings whose wrapped lines carry no diacritic above cap height. A capital Ñ reaches about 0.95em over its baseline and will sit on the line above at 0.88 leading. Check the actual string before tightening leading, and remember the copy is Spanish.

## The Pulse Motif

The isotipo contains a pulse trace inside a broken ring. That trace is the one ownable graphic device the brand has, and it is extracted to `public/images/pulso.svg` (orange) and `pulso-blanco.svg` (white).

It appears in exactly three places, and adding a fourth needs a reason:

- **Favicon and touch icon**, cropped from the logo file itself so the tab shows the mark rather than a squashed wordmark.
- **Service band**, tiled at 9% opacity across the dark orange field.
- **Diagnostics section**, one large low-opacity watermark anchored bottom-right.

## Layout

The landing uses a centered 1120px content field with full-width bands. The first viewport is a facade-led hero with copy on the left and a translucent reception panel on the right. Content alternates between broad explanatory sections, dense service grids, diagnostic lists, and a simple appointment close.

Desktop layouts use two-column moments and four-column service density. Tablet collapses to two columns. Mobile collapses to one column, keeps the nav compact, and makes WhatsApp actions full width where the thumb target matters.

## Elevation & Depth

Depth is a hybrid of translucent glass, real photography, and soft structural shadows. Shadows must have offset and blur; glow-only halos are not part of the system.

### Shadow Vocabulary

- **Glass Lift** (`0 24px 70px rgba(46, 38, 32, 0.16)`): Translucent panels.
- **Card Lift** (`0 14px 40px rgba(44, 45, 48, 0.1)`): Solid service cards.
- **Photo Card Lift** (`0 16px 44px rgba(44, 45, 48, 0.12)`): Professional cards and contained imagery.
- **Action Lift** (`0 10px 28px rgba(210, 66, 0, 0.28)`): Primary appointment buttons.

## Shapes

The system uses gently curved rectangles for cards and panels, with pill shapes only for small controls and CTAs. Main cards use 16px radius, the appointment close uses 20px, and nav/buttons use full pill radius. Avoid nested cards and heavy framed sections.

## Components

### Buttons

- **Shape:** Pill controls with fixed 44px minimum height.
- **Primary:** Action-to-deep orange background, white text, bold label, and action shadow.
- **Secondary:** Translucent white surface with ink text for lower-intent navigation.
- **WhatsApp Floating:** Green pill, preserving the expected channel affordance.
- **Focus:** A 3px Deep Orange outline at 3px offset on every interactive element. Movement alone is not a focus indicator.

### Cards / Containers

- **Service cards:** Solid white, 16px radius, hairline border, Card Lift. The whole card is the WhatsApp link.
- **Doctor cards:** Solid white with Photo Card Lift.
- **Glass panels:** Reception panel, clarity card, and appointment close only.

### Photography

Source photography is uneven: a real facade, stock specialty images from mixed origins, and portraits shot in studio, outdoors, and casually. Until it is replaced, the system unifies rather than hides.

- Specialty images carry a shared warm-to-ink tint and are desaturated to 0.82.
- Portraits carry a lighter warm wash with a foot fade, desaturated to 0.88.
- Do not add a new specialty image without the same treatment, or the grid returns to reading like a collage.

Replacing the stock specialty images and reshooting portraits against a consistent background remains the single largest available improvement to this page.

### Navigation

- **Style:** Fixed, centered compact glass bar with logo, tight text links, and a persistent appointment CTA.
- **Logo:** The PNG is cropped to its content (582x313). The original had 51% empty padding, which rendered the mark at roughly 44x24px inside its box and left the wordmark illegible.
- **Mobile:** Logo plus circular menu button; expanded links stay inside the glass container.

### Footer

The footer uses the Madelcap logo on a white plate, a short brand line, and practical links for address, email, Instagram, and Facebook. Footer links remain white at rest and turn Brand Orange on hover or focus.

## Do's and Don'ts

### Do:

- **Do** keep WhatsApp actions visible and named plainly as booking actions.
- **Do** lead with real clinic photography when introducing Madelcap.
- **Do** measure contrast before introducing a color pair.
- **Do** keep clinical facts specific and sourced from PRODUCT.md or `madelcap.md`.

### Don't:

- **Don't** invent testimonials, certifications, prices, insurance claims, or medical outcomes.
- **Don't** put white text on Brand Orange.
- **Don't** use glassmorphism as loose decoration with unreadable contrast.
- **Don't** add a third brand hue; the mark has two.
- **Don't** use generic stock-doctor hero imagery when real facade and team assets exist.
