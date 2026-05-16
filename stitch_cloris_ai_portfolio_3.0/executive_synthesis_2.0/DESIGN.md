---
name: Executive Synthesis 2.0
colors:
  surface: '#f9f9ff'
  surface-dim: '#d8d9e2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3fc'
  surface-container: '#ecedf6'
  surface-container-high: '#e6e8f1'
  surface-container-highest: '#e1e2eb'
  on-surface: '#191c22'
  on-surface-variant: '#414753'
  inverse-surface: '#2e3037'
  inverse-on-surface: '#eff0f9'
  outline: '#727784'
  outline-variant: '#c1c6d5'
  surface-tint: '#005cba'
  primary: '#004e9f'
  on-primary: '#ffffff'
  primary-container: '#0066cc'
  on-primary-container: '#dfe8ff'
  inverse-primary: '#aac7ff'
  secondary: '#5d5e63'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfe4'
  on-secondary-container: '#626267'
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
  secondary-fixed: '#e3e2e7'
  secondary-fixed-dim: '#c6c6cb'
  on-secondary-fixed: '#1a1b1f'
  on-secondary-fixed-variant: '#46464b'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#793000'
  background: '#f9f9ff'
  on-background: '#191c22'
  surface-variant: '#e1e2eb'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1280px
---

## Brand & Style

The design system is engineered for high-stakes decision-making environments where clarity and authority are paramount. It targets an executive audience that values efficiency, precision, and a "light tech" aesthetic that feels innovative yet grounded in corporate reliability.

The visual style is **Minimalist / Corporate Modern**. It utilizes a "less but better" philosophy, relying on intentional whitespace, a high-contrast monochromatic base, and strategic use of tech-blue accents to guide the eye. The interface should feel "quiet" to reduce cognitive load, using thin line weights and subtle tonal shifts rather than heavy shadows or decorative elements. The emotional goal is to evoke a sense of calm intelligence and technological sophistication.

## Colors

The palette is restricted to provide a focused, executive-ready experience. 

- **Primary Brand & CTAs:** Classic Tech Blue (#0066CC) is used exclusively for actionable elements, progress indicators, and subtle "breathing" borders.
- **Typography:** Matte Black (#1A1A1A) provides high legibility for headlines and primary body text. 
- **Secondary Text & UI:** Matte Cold Gray (#8E8E93) is used for metadata, inactive states, and hair-line dividers to maintain a low-noise environment.
- **Surface & Lift:** The background remains Pure White (#FFFFFF). For "Logic Cards" and container nesting, a subtle lift using #F5F5F7 is applied to create a clear but soft hierarchical distinction without relying on heavy shadows.

## Typography

The system uses **Hanken Grotesk** as the primary typeface for its sharp, contemporary geometry and professional neutrality. 

### Hierarchy Rules
- **Headlines:** Use Medium (500) or SemiBold (600) weights with slightly tightened letter-spacing to create a "dense" and authoritative look.
- **Body:** Regular (400) weight is used for all descriptive text to ensure maximum readability against the white background.
- **Chinese Support:** When rendering Chinese characters, the system defaults to "PingFang SC" or "Noto Sans SC," maintaining the same optical weight and line-height ratios as the Hanken Grotesk English counterparts.
- **Data Display:** Labels use a slightly heavier weight (500/600) at smaller sizes to ensure they remain legible even when using the Matte Cold Gray color.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to maintain a composed, editorial feel, while transitioning to a **Fluid Grid** for mobile devices.

### Grid & Rhythm
- **Desktop:** 12-column grid with a 1280px max-width. Gutters are fixed at 24px.
- **Mobile:** 4-column fluid grid with 16px margins.
- **Spacing Scale:** Built on a 4px base unit. Component padding should strictly follow increments of 8px (8, 16, 24, 32, 48, 64) to maintain a rigid vertical rhythm.
- **Vertical Spacing:** Generous whitespace (macro-spacing) is encouraged between major sections to emphasize the minimalist aesthetic and separate "logic blocks."

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional drop shadows.

- **Level 0 (Base):** Pure White (#FFFFFF) background.
- **Level 1 (Logic Cards):** Surfaces use #F5F5F7 with a 1px border of #E5E5EA.
- **Focus State:** Elements requiring attention use "Breathing Borders"—a 1px or 1.5px solid stroke of #0066CC.
- **Interactive Depth:** On hover, cards do not "rise" with shadows; instead, the border color shifts from light gray to #0066CC, or the background tint darkens by 2%. This keeps the interface "flat" and architecturally sound.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding provides a modern touch that prevents the UI from feeling overly aggressive or dated, while remaining sharp enough to appear professional and structured.

- **Buttons & Inputs:** 4px (0.25rem) corner radius.
- **Logic Cards:** 8px (0.5rem) corner radius to create a container-within-a-container feel.
- **Icons:** Use a 1.5pt or 2pt stroke width with slightly rounded caps to match the component geometry.

## Components

### Buttons
- **Primary:** Solid #0066CC background with #FFFFFF text. No gradients.
- **Secondary:** Transparent background with #0066CC border and text.
- **Tertiary/Ghost:** #1A1A1A text with no border, becoming #F5F5F7 on hover.

### Logic Cards
The core container for the design system. 
- **Style:** Background #F5F5F7, 1px border #E5E5EA, 8px corner radius.
- **Header:** Cards should include a clear headline-md and a subtle 1px gray divider if the content is data-heavy.

### Input Fields
- **Default:** White background, 1px #E5E5EA border. 
- **Active/Focus:** 1px #0066CC border.
- **Labeling:** Text labels sit 8px above the field in Label-sm (#8E8E93).

### Chips & Tags
- Used for status and filtering. They feature a light gray fill (#E5E5EA) and #1A1A1A text. Success or Warning states use high-saturation tints with white text to maintain the "Tech" feel.

### Lists
- Clean, hair-line separation using #E5E5EA. High horizontal padding (16px-24px) to ensure the executive "breathing room."