# BeeBite.com Design Guidelines

## Design Approach
**Reference-Based**: Inspired by Google's clean search interface combined with playful, friendly aesthetics. Think Google Doodles meets modern search simplicity with a charming bee theme.

**Core Principles:**
- Friendly & approachable, not corporate
- Clean search-focused interface
- Immediate clarity of purpose
- Delightful bee-themed personality

---

## Typography

**Font Families:**
- Primary (headings/brand): Poppins (playful, rounded, friendly)
- Secondary (body/results): Inter (clean, readable)

**Hierarchy:**
- Brand/Logo: text-4xl to text-5xl, font-bold
- Tagline: text-xl, font-medium
- Search result titles: text-lg, font-semibold
- Descriptions: text-base, font-normal
- Helper text: text-sm

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, and 16 for consistent rhythm (p-4, m-8, gap-6, etc.)

**Container Strategy:**
- Homepage: max-w-2xl centered (focused search experience)
- Landing pages: max-w-4xl centered (wider for result cards)
- Padding: px-4 mobile, px-6 desktop

---

## Component Library

### Homepage Structure
**Hero Section (60-70vh):**
- Centered bee logo/mascot illustration (playful, friendly bee character - 120px-150px size)
- "BeeBite" wordmark directly below
- Tagline beneath (e.g., "Sweet Finds for Smart Shoppers" or "Buzzing with the Best Deals")
- Large search input (non-functional, decorative aesthetic element)
- Quick vertical buttons/pills below search: "Real Estate" "Insurance" "Income Tax"

### Landing Page Structure
**Header (sticky):**
- Small bee logo + BeeBite wordmark (left)
- Breadcrumb/category indicator (center)
- "Search Again" button linking to home (right)

**Results Section:**
- Title: "Top [Category] Partners" (text-2xl, mb-8)
- 3 result cards in vertical stack (gap-4)

### Result Card Component (Search Result Style)
**Card Structure:**
- Border with subtle shadow, rounded corners (rounded-lg)
- Padding: p-6
- Hover state: subtle lift effect (shadow-md to shadow-lg)

**Card Content:**
- Partner logo/favicon (left, 40px-48px)
- Title/Partner name (text-lg, font-semibold, brand color)
- URL preview (text-sm, subtle, truncated)
- Description (text-base, 2-3 lines, text-gray-600)
- CTA button (right side or bottom): "Visit Site →" (rounded-full, px-6, py-2)

### Navigation (All Pages)
**Minimal footer:**
- Small bee icon
- Links: Home | Privacy | Terms
- Text: text-sm, centered, py-8

---

## Images

**Homepage Hero:**
- Cute bee mascot illustration (cartoon style, friendly face, positioned centrally above logo)
- Style: Flat design or slightly 3D, warm yellow/amber with black stripes
- Optional: Subtle honeycomb pattern as background texture (very light, non-distracting)

**Landing Pages:**
- Partner logos/favicons only (no hero image needed - maintain search results authenticity)
- Optional decorative bee elements in header/footer

**Image Placement:**
- Homepage: Central hero illustration
- Landing pages: Small bee icon in header, partner logos in result cards

---

## Visual Personality

**Bee Theme Elements:**
- Rounded corners throughout (friendly, approachable)
- Warm accent touches (without specifying colors)
- Playful micro-copy ("Buzz over to...", "Sweet results for...")
- Subtle honeycomb patterns as background textures (very light)

**Search Engine Authenticity:**
- Clean, uncluttered layouts
- Fast-scanning card designs
- Clear visual hierarchy in result cards
- Familiar search result patterns (logo-title-url-description)

---

## Key UX Patterns

**Homepage Flow:**
1. Immediate visual delight (bee mascot)
2. Clear value proposition (tagline)
3. Easy navigation to verticals (large clickable buttons)

**Landing Page Flow:**
1. Quick context (header shows vertical)
2. Immediate results visibility (no scrolling needed for all 3 cards)
3. Clear CTAs (prominent "Visit Site" buttons)

**Interaction Design:**
- Buttons: rounded-full style, medium size, clear hover states
- Cards: Entire card clickable OR isolated CTA button (choose one for consistency)
- Links: Underline on hover for text links
- No complex animations - keep it snappy and simple