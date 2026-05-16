---
name: Executive Synthesis
colors:
  surface: '#faf9fe'
  surface-dim: '#dad9df'
  surface-bright: '#faf9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#eeedf3'
  surface-container-high: '#e9e7ed'
  surface-container-highest: '#e3e2e7'
  on-surface: '#1a1b1f'
  on-surface-variant: '#414753'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#727784'
  outline-variant: '#c1c6d5'
  surface-tint: '#005cba'
  primary: '#004e9f'
  on-primary: '#ffffff'
  primary-container: '#0066cc'
  on-primary-container: '#dfe8ff'
  inverse-primary: '#aac7ff'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#90efef'
  on-secondary-container: '#006e6e'
  tertiary: '#883700'
  on-tertiary: '#ffffff'
  tertiary-container: '#af4900'
  on-tertiary-container: '#ffe3d6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00458e'
  secondary-fixed: '#93f2f2'
  secondary-fixed-dim: '#76d6d5'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#793000'
  background: '#faf9fe'
  on-background: '#1a1b1f'
  surface-variant: '#e3e2e7'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

The design system is engineered for an AI Product Manager, balancing executive authority with technical fluency. The brand personality is "High-End Business + Light Tech"—it avoids the cluttered aesthetic of consumer apps in favor of a restrained, premium SaaS aesthetic.

The visual direction utilizes **Minimalism** with **Modern Corporate** influences. It prioritizes clarity, whitespace, and precision. The emotional goal is to evoke a sense of reliability, strategic thinking, and "intelligent restraint." The UI should feel like a high-performance dashboard that is both accessible to stakeholders and respected by engineers.

## Colors

The palette is anchored by "Executive Blue" (#0066CC), a classic tech primary that signals stability. A secondary "Data Cyan" (#008080) is used sparingly for interactive elements or data-driven highlights.

- **Light Mode:** Uses a pure white background (#FFFFFF) with high-contrast slate text (#1A1A1A) for maximum readability.
- **Dark Mode:** Transitions to a deep charcoal (#121316) with off-white text (#F5F5F7) to reduce eye strain while maintaining a premium feel.
- **System Grays:** Secondary text and dividers utilize #8E8E93, providing a soft contrast that recedes in the visual hierarchy.

## Typography

This design system uses a tripartite typographic scale:
1. **Hanken Grotesk** for headlines: A sharp, contemporary grotesque that feels "designed" and executive.
2. **Inter** for body text: The industry standard for SaaS, chosen for its exceptional legibility and neutral tone.
3. **Geist** for labels and technical data: Its monospaced-adjacent metrics provide the "light tech" feel required for an AI professional.

Use `display-lg` for hero statements, ensuring negative letter spacing for a tighter, high-end editorial look. Use `label-md` for eyebrow headers and categories.

## Layout & Spacing

The layout follows a **Fixed Grid** approach for desktop (1200px max-width) to ensure content remains centered and readable. 

- **Grid:** 12-column layout on desktop, 4-column on mobile.
- **Rhythm:** An 8px base unit governs all dimensions.
- **Sectioning:** Generous vertical padding (120px) is used between major sections to emphasize a "minimalist/premium" feel, allowing each case study or value proposition to breathe.
- **Alignment:** Consistent left-alignment for body text; headlines may be centered for high-impact hero sections.

## Elevation & Depth

Hierarchy is established through **Low-contrast outlines** and **Tonal layers** rather than heavy shadows.

- **Surface Levels:** The main background is Level 0. "Logic Cards" sit on Level 1, defined by a 1px border (#8E8E93 at 20% opacity) rather than a shadow.
- **Interactive Depth:** On hover, elements may gain a very subtle, highly diffused "Ambient Shadow" (0px 10px 30px rgba(0,0,0, 0.05)) to suggest lift.
- **The "AI Glow":** Selected technical components use a subtle 1px border-image gradient utilizing the Primary Blue and Secondary Cyan to indicate "active" or "intelligent" states.

## Shapes

The shape language is **Soft** (0.25rem - 0.75rem). This avoids the playfulness of fully rounded "pill" shapes while softening the harshness of sharp corners.

- **Small Components:** Checkboxes and small tags use 4px (0.25rem).
- **Cards & Containers:** "Logic Cards" and main input fields use 8px (0.5rem).
- **Hero Elements:** Large featured images or call-to-action blocks use 12px (0.75rem).

## Components

### Logic Cards
The signature component. These containers house project details or AI frameworks. They feature a white (or #121316) background, a subtle gray border, and a "breathing" 1px Tech Blue (#0066CC) border-bottom or left-accent to denote technical depth.

### Premium Buttons
- **Primary:** Solid #0066CC with white text. On hover, apply a `scale(1.02)` transform and a subtle increase in shadow diffusion.
- **Secondary:** Ghost style with #0066CC border and text.
- **Interaction:** All transitions must be 200ms ease-out.

### Anchor Navigation
A sticky top-bar navigation using a "blur-behind" (glassmorphism) effect (backdrop-filter: blur(12px)). Links use `label-md` typography. The active section is indicated by a simple Secondary Cyan (#008080) dot below the label.

### Technical Chips
Used for listing skills (e.g., "LLMs", "Python", "Strategy"). These use a Geist font, #8E8E93 background at 10% opacity, and no border.

### Input Fields
Minimalist 1px bottom-border only (#8E8E93) that transitions to Tech Blue (#0066CC) on focus.