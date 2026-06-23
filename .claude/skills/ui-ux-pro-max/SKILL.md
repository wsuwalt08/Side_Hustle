---
name: ui-ux-pro-max
description: UI/UX design intelligence. 67 styles, 161 palettes, 57 font pairings, 25 charts, 16 stacks (React, Next.js, Vue, Svelte, Astro, SwiftUI, React Native, Flutter, Nuxt, Nuxt UI, Tailwind, shadcn/ui, Jetpack Compose, Three.js, Angular, Laravel). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, mobile app, .html, .tsx, .vue, .svelte. Elements: button, modal, navbar, sidebar, card, table, form, chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, flat design. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing, hover, shadow, gradient.
---

# UI/UX Pro Max - Design Intelligence

Comprehensive design guide for web and mobile applications. Contains 67 styles, 161 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 16 technology stacks. Searchable database with priority-based recommendations.

## Search Command

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> [-n <max_results>]
```

**Domains:** `product` · `style` · `typography` · `color` · `landing` · `chart` · `ux`

**Stack search:**
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack <stack>
```
Stacks: `html-tailwind` · `react` · `nextjs` · `astro` · `vue` · `nuxtjs` · `svelte` · `shadcn` · `react-native` · `flutter` · `swiftui` · `angular` · `laravel`

---

## When to Apply

Use this skill whenever the task involves **UI structure, visual design decisions, interaction patterns, or UX quality**.

**Must use:** new pages, UI components, color/type/spacing choices, UX reviews, navigation, animations, responsive behavior, design-system decisions.

**Skip:** pure backend, API/DB design, non-UI performance, infra/DevOps, non-visual scripting.

**Rule of thumb:** if the task changes how something *looks, feels, moves, or is interacted with* — use this skill.

---

## Rule Categories by Priority

| Priority | Category | Impact | Domain |
|----------|----------|--------|--------|
| 1 | Accessibility | CRITICAL | `ux` |
| 2 | Touch & Interaction | CRITICAL | `ux` |
| 3 | Performance | HIGH | `ux` |
| 4 | Style Selection | HIGH | `style`, `product` |
| 5 | Layout & Responsive | HIGH | `ux` |
| 6 | Typography & Color | MEDIUM | `typography`, `color` |
| 7 | Animation | MEDIUM | `ux` |
| 8 | Forms & Feedback | MEDIUM | `ux` |
| 9 | Navigation Patterns | HIGH | `ux` |
| 10 | Charts & Data | LOW | `chart` |

---

## How to Use This Skill

| Scenario | Action |
|----------|--------|
| New page / feature | Search style + color + typography, then build |
| Existing UI review | Search ux domain, apply findings |
| Component design | Search style + stack for implementation guidance |
| Chart selection | Search chart domain for type recommendations |

**Workflow:**
1. Run search for relevant domain(s)
2. Apply top results to inform design decisions
3. Cross-check against priority rules above
4. Build with accessibility (P1) and performance (P3) baked in
