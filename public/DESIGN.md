---
name: Clinical Integrity
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#444651'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#1d4ed8'
  on-secondary: '#ffffff'
  secondary-container: '#4069f2'
  on-secondary-container: '#fffbff'
  tertiary: '#3e2400'
  on-tertiary: '#ffffff'
  tertiary-container: '#5c3800'
  on-tertiary-container: '#ef9900'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  surface-canvas: '#F8FAFC'
  surface-card: '#FFFFFF'
  text-muted: '#64748B'
  border-subtle: '#E2E8F0'
  status-compliant: '#059669'
  status-pending: '#D97706'
  status-alert: '#DC2626'
  brand-accent-glow: '#FDE68A'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  badge-status:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

This design system establishes an authoritative, precision-engineered mobile medical environment designed for healthcare administrators, commercial transport compliance officers, legal counsel, and individual patients. Operating within critical diagnostics—including DOT-mandated workplace drug panels, chain-of-custody tracking, and court-admissible DNA testing—the interface prioritizes indisputable legibility, audit-level structure, and unwavering regulatory trust.

The aesthetic blends **Modern Corporate** with high-clarity **Clinical Utility**. It eliminates ornamental fluff in favor of structured data sheets, explicit validation states, tamper-evident color cues, and tactile confidence. Every touch target and status badge conveys legal rigor, technical precision, and empathetic medical confidentiality under HIPAA guidelines.

## Colors

The palette derives from clinical diagnostic rigor and regulatory standards:
- **Primary Navy (`#1E3A8A`)**: Anchors critical navigation, executive headers, primary actions, and institutional certification elements.
- **Secondary Cobalt (`#1D4ED8`)**: Powers active interactive elements, focused input rings, primary tabs, and progressive timeline links.
- **Tertiary Golden Amber (`#F59E0B`)**: Sourced directly from the diagnostic test strip emblem in the brand identity. Applied selectively to draw attention to chain-of-custody milestones, pending lab verification, court-ready badge accents, and required physical specimen confirmations.
- **Dark Slate Neutral (`#0F172A`)**: Ensures high-contrast readability across all medical test results, forensic markers, and legal disclaimers.
- **Medical Canvas Slate (`#F8FAFC`)**: Provides a clinical, glare-free background that prevents eye fatigue during intensive field audits.

Operational state colors are strictly isolated: **Compliant Green (`#059669`)** for verified chain-of-custody and clear DOT panels; **Alert Red (`#DC2626`)** for non-negative results, tampered seals, or missing signatures.

## Typography

The type system pairs **Plus Jakarta Sans** for structural headlines with **Inter** for dense diagnostic body text, tabular lab results, and audit labels. 

- **Display & Headlines**: Rendered in Plus Jakarta Sans to project confidence, modernity, and medical authority without harshness. 
- **Body & Tabular Data**: Set in Inter to leverage its tall x-height and exceptional character distinction (essential when distinguishing specimen IDs, panel cutoff values like `50 ng/mL`, and alphanumeric specimen barcodes).
- **Compliance Labels**: Rendered in uppercase `label-caps` with slight letter tracking (`0.06em`) for regulatory tags such as `DOT 49 CFR PART 40`, `AABB ACCREDITED`, or `SAMHSA CERTIFIED`.

## Layout & Spacing

A disciplined 8pt spatial grid anchors the mobile application to support rapid thumb navigation in mobile clinics, roadside testing units, and distribution hubs.

- **Mobile Viewports (<640px)**: 4-column fluid layout with `1rem` outer canvas padding. Action buttons, specimen acceptance banners, and test checklists adhere to a minimum 48px tactile zone to allow confident interaction by lab technicians wearing medical gloves.
- **Tablet & Splitting States (640px - 1024px)**: 8-column layout with split-screen functionality (e.g., patient identity and custody status pinned left; running diagnostic timeline or test order details right).
- **Desktop / Clinical Dashboard (>1024px)**: 12-column layout with a fixed 280px clinical navigation sidebar and standard central work surface.

## Elevation & Depth

To convey medical sanitation and precision, the system employs **low-contrast outlines combined with shallow, clinical ambient shadows**. Deep heavy drops are rejected to prevent visual noise during critical reviews.

- **Surface Level 0 (Canvas)**: Non-reflective matte light grey (`#F8FAFC`).
- **Surface Level 1 (Card & Containers)**: Crisp white (`#FFFFFF`) with a 1px structural boundary stroke (`#E2E8F0`). Shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.05)`.
- **Surface Level 2 (Interactive Cards & Overlays)**: Specimen details or open order cards during swipe gestures use `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Surface Level 3 (Modal Sheets & HIPAA Sign-off Drawers)**: High-altitude container elevated above darkened scrim (`rgba(15, 23, 42, 0.6)`) with `0 10px 15px -3px rgba(15, 23, 42, 0.12)`.

## Shapes

The design system adopts a balanced **Rounded** visual language (`roundedness: 2`). Standard containers, cards, and input fields use `0.5rem` (8px) corners to provide clean technical containment. Larger card enclosures and bottom modal sheets utilize `1rem` (16px), delivering an approachable modern feel while maintaining the rigid boundaries required for scientific documentation. Status pills and chain-of-custody chips use full 9999px pill shapes for immediate visual separation from rectangular record containers.

## Components

### Buttons
- **Primary Action**: Solid Deep Navy (`#1E3A8A`) background, white text, 8px border-radius, minimum height of 48px. Includes a subtle active state shift to `#1D4ED8`.
- **Secondary / Lab Action**: Ghost container with `#1E3A8A` border (1.5px) and matching text for secondary tasks (e.g., "Download CCF Copy").
- **Urgent / Re-Test Action**: Solid Golden Amber (`#F59E0B`) with dark slate text (`#0F172A`) for immediate donor intervention or re-collection notices.

### Badges & Compliance Indicators
- **DOT / Court-Ready DNA Badges**: Compact pill layout with an embedded icon (e.g., scale or shield), 1px solid border, and uppercase tracked text.
  - *Court-Ready Admissible*: Navy container tint (`#EFF6FF`), Navy border (`#BFDBFE`), Navy text (`#1E3A8A`).
  - *DOT Compliant*: Emerald container tint (`#ECFDF5`), Emerald border (`#A7F3D0`), Emerald text (`#065F46`).
  - *Custody Review / Pending*: Warm amber tint (`#FEF3C7`), border (`#FDE68A`), dark amber text (`#92400E`).

### Cards
- **Diagnostic Panel Card**: Pure white surface, 1px `#E2E8F0` border. Headers feature a distinct top accent strip (2px) indicating panel type: Deep Navy for Drug & Alcohol screens, Amber for DNA Paternity / Legal testing.
- **Specimen Tracking Card**: Contains donor identifier, tracking/barcode number in monospaced numeric formatting, current lab stage (Collected, In-Transit, Lab In-Review, Released), and secure physician digital stamp.

### Input Fields & Verification Controls
- **Medical Text Fields**: White background with 1px `#CBD5E1` border. Focused state introduces a 2px outer glow in `#1D4ED8` at 20% opacity. 
- **Sign-off / Fingerprint Capture**: Pinned canvas box with subtle `#F1F5F9` background and dotted guide outline for digital custody initials.
- **Checkboxes & Radios**: 20px tactile target, 2px border, filled with `#1E3A8A` and an inset white checkmark upon selection.