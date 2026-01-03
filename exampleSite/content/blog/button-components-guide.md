---
title: "Create and Use Buttons"
date: 2026-01-01
description: "Learn how to use and custom buttons in the Clean Hugo theme."
categories: ["Documentation"]
tags: ["shortcodes"]
featured: false
---

The Clean Hugo theme includes a unified button system that provides consistent, accessible, and customizable buttons throughout your site. This guide demonstrates all available button variants and how to use them.

## Button variants

### Primary button

The primary button is by default, used for the main call-to-action on a page.

{{< button href="#" variant="primary" >}}Primary Button{{< /button >}}

```html
<!-- Using shortcode in markdown -->
{{</* button href="/get-started/" variant="primary" */>}}Get Started{{</* /button */>}}

<!-- Using HTML classes directly -->
<a href="/get-started/" class="btn btn--primary">Get Started</a>
```

### Secondary button

The secondary button is used for less prominent actions, providing an outlined style.

{{< button href="#" variant="secondary" >}}Secondary Button{{< /button >}}

```html
<!-- Using shortcode -->
{{</* button href="/learn-more/" variant="secondary" */>}}Learn More{{</* /button */>}}

<!-- Using HTML classes -->
<a href="/learn-more/" class="btn btn--secondary">Learn More</a>
```

### Accent button

The accent button is used for special actions that need to stand out.

{{< button href="#" variant="accent" >}}Accent Button{{< /button >}}

```html
<!-- Using shortcode -->
{{</* button href="/special-offer/" variant="accent" */>}}Special Offer{{</* /button */>}}

<!-- Using HTML classes -->
<a href="/special-offer/" class="btn btn--accent">Special Offer</a>
```

### Neutral button

The neutral button provides a subtle, less prominent option.

{{< button href="#" variant="neutral" >}}Neutral Button{{< /button >}}

```html
<!-- Using shortcode -->
{{</* button href="/cancel/" variant="neutral" */>}}Cancel{{</* /button */>}}

<!-- Using HTML classes -->
<a href="/cancel/" class="btn btn--neutral">Cancel</a>
```

## Button sizes

Buttons come in three sizes: small, default, and large.

### Small buttons

{{< button href="#" variant="primary" size="sm" >}}Small Button{{< /button >}}
{{< button href="#" variant="secondary" size="sm" >}}Small Secondary{{< /button >}}

```html
{{</* button href="#" variant="primary" size="sm" */>}}Small Button{{</* /button */>}}
<a href="#" class="btn btn--primary btn--sm">Small Button</a>
```

### Default size (No size parameter needed)

{{< button href="#" variant="primary" >}}Default Button{{< /button >}}
{{< button href="#" variant="secondary" >}}Default Secondary{{< /button >}}

```html
{{</* button href="#" variant="primary" */>}}Default Button{{</* /button */>}}
<a href="#" class="btn btn--primary">Default Button</a>
```

### Large buttons

{{< button href="#" variant="primary" size="lg" >}}Large Button{{< /button >}}
{{< button href="#" variant="secondary" size="lg" >}}Large Secondary{{< /button >}}

```html
{{</* button href="#" variant="primary" size="lg" */>}}Large Button{{</* /button */>}}
<a href="#" class="btn btn--primary btn--lg">Large Button</a>
```

### Full width buttons

{{< button href="#" variant="primary" size="full" >}}Full Width Button{{< /button >}}

```html
{{</* button href="#" variant="primary" size="full" */>}}Full Width Button{{</* /button */>}}
<a href="#" class="btn btn--primary btn--full">Full Width Button</a>
```

## Buttons with icons

Add Font Awesome icons to your buttons for enhanced visual communication.

### Icon on the left (default)

{{< button href="#" variant="primary" icon="download" >}}Download{{< /button >}}
{{< button href="#" variant="secondary" icon="book" >}}Read Docs{{< /button >}}

```html
{{</* button href="/download/" variant="primary" icon="download" */>}}Download{{</* /button */>}}
<a href="/download/" class="btn btn--primary btn--icon">
  <i class="fa-solid fa-download" aria-hidden="true"></i>
  Download
</a>
```

### Icon on the right

{{< button href="#" variant="primary" icon="arrow-right" iconPosition="right" >}}Continue{{< /button >}}
{{< button href="#" variant="accent" icon="external-link" iconPosition="right" >}}External Link{{< /button >}}

```html
{{</* button href="/next/" variant="primary" icon="arrow-right" iconPosition="right" */>}}Continue{{</* /button */>}}
<a href="/next/" class="btn btn--primary btn--icon">
  Continue
  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
</a>
```

### More icon examples

{{< button href="#" variant="primary" icon="rocket" >}}Launch{{< /button >}}
{{< button href="#" variant="secondary" icon="heart" >}}Favorite{{< /button >}}
{{< button href="#" variant="accent" icon="star" >}}Featured{{< /button >}}
{{< button href="#" variant="neutral" icon="gear" >}}Settings{{< /button >}}

## Button groups

Group multiple buttons together for related actions.

### Centered button group

<div class="btn-group btn-group--center">
  {{< button href="#" variant="primary" >}}Get Started{{< /button >}}
  {{< button href="#" variant="secondary" >}}Learn More{{< /button >}}
</div>

```html
<div class="btn-group btn-group--center">
  {{</* button href="/start/" variant="primary" */>}}Get Started{{</* /button */>}}
  {{</* button href="/learn/" variant="secondary" */>}}Learn More{{</* /button */>}}
</div>

<!-- Or with HTML -->
<div class="btn-group btn-group--center">
  <a href="/start/" class="btn btn--primary">Get Started</a>
  <a href="/learn/" class="btn btn--secondary">Learn More</a>
</div>
```

### Left-aligned button group (default)

<div class="btn-group">
  {{< button href="#" variant="primary" icon="download" >}}Download{{< /button >}}
  {{< button href="#" variant="secondary" icon="book" >}}Documentation{{< /button >}}
  {{< button href="#" variant="neutral" icon="code" >}}Source Code{{< /button >}}
</div>

```html
<div class="btn-group">
  {{</* button href="#" variant="primary" icon="download" */>}}Download{{</* /button */>}}
  {{</* button href="#" variant="secondary" icon="book" */>}}Documentation{{</* /button */>}}
  {{</* button href="#" variant="neutral" icon="code" */>}}Source Code{{</* /button */>}}
</div>
```

### Right-aligned button group

<div class="btn-group btn-group--right">
  {{< button href="#" variant="secondary" >}}Cancel{{< /button >}}
  {{< button href="#" variant="primary" >}}Save Changes{{< /button >}}
</div>

```html
<div class="btn-group btn-group--right">
  {{</* button href="#" variant="secondary" */>}}Cancel{{</* /button */>}}
  {{</* button href="#" variant="primary" */>}}Save Changes{{</* /button */>}}
</div>
```

## External links

For external links, the shortcode automatically adds `rel="noopener noreferrer"` when you specify `target="_blank"`.

{{< button href="https://github.com" variant="primary" icon="github" target="_blank" >}}View on GitHub{{< /button >}}

```html
{{</* button href="https://github.com/user/repo" variant="primary" icon="github" target="_blank" */>}}View on GitHub{{</* /button */>}}

<!-- Automatically becomes: -->
<a href="https://github.com/user/repo" 
   class="btn btn--primary btn--icon" 
   target="_blank" 
   rel="noopener noreferrer">
  <i class="fa-solid fa-github"></i>
  View on GitHub
</a>
```

## All sizes and variants together

Here's a visual comparison of all button variants in different sizes:

### Small buttons

<div class="btn-group">
{{< button href="#" variant="primary" size="sm" >}}Primary{{< /button >}}
{{< button href="#" variant="secondary" size="sm" >}}Secondary{{< /button >}}
{{< button href="#" variant="accent" size="sm" >}}Accent{{< /button >}}
{{< button href="#" variant="neutral" size="sm" >}}Neutral{{< /button >}}
</div>

### Default size

<div class="btn-group">
{{< button href="#" variant="primary" >}}Primary{{< /button >}}
{{< button href="#" variant="secondary" >}}Secondary{{< /button >}}
{{< button href="#" variant="accent" >}}Accent{{< /button >}}
{{< button href="#" variant="neutral" >}}Neutral{{< /button >}}
</div>

### Large buttons

<div class="btn-group">
{{< button href="#" variant="primary" size="lg" >}}Primary{{< /button >}}
{{< button href="#" variant="secondary" size="lg" >}}Secondary{{< /button >}}
{{< button href="#" variant="accent" size="lg" >}}Accent{{< /button >}}
{{< button href="#" variant="neutral" size="lg" >}}Neutral{{< /button >}}
</div>

## Accessibility features

All buttons in the Clean Hugo theme include:

- **Keyboard Navigation**: Fully accessible via keyboard (Tab to focus, Enter/Space to activate)
- **Focus States**: Clear visual focus indicators for keyboard navigation
- **ARIA Attributes**: Proper semantic HTML and ARIA support
- **Screen Reader Support**: Icons use `aria-hidden="true"` to prevent duplication
- **Color Contrast**: All button variants meet WCAG AA contrast requirements

## Best practices

### When to use each variant

- **Primary**: Main call-to-action on a page (e.g., "Get Started", "Sign Up", "Download")
- **Secondary**: Supporting actions or alternative paths (e.g., "Learn More", "View Demo")
- **Accent**: Special promotions or time-sensitive actions (e.g., "Limited Offer", "New Feature")
- **Neutral**: Less important actions or cancel operations (e.g., "Cancel", "Skip", "Maybe Later")

### Button hierarchy

On any given page:
- Use **one primary button** for the main action
- Use **secondary buttons** for alternative actions
- Limit the total number of buttons visible at once
- Place the most important action on the right in horizontal button groups

### Size guidelines

- **Small**: Use in compact spaces, cards, or when space is limited
- **Default**: Use for most button instances throughout the site
- **Large**: Use for prominent CTAs, especially above the fold on landing pages
- **Full Width**: Use in mobile layouts or forms where buttons should span the container

## Shortcode parameters reference

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `href` | string | `#` | URL the button links to |
| `variant` | string | `primary` | Button color variant: `primary`, `secondary`, `accent`, `neutral` |
| `size` | string | - | Button size: `sm`, `lg`, `full` (omit for default size) |
| `icon` | string | - | Font Awesome icon name (without `fa-` prefix) |
| `iconPosition` | string | `left` | Icon position: `left` or `right` |
| `target` | string | - | Link target (use `_blank` for external links) |
| `rel` | string | auto | Link relationship (auto-set for `target="_blank"`) |
| `class` | string | - | Additional CSS classes |

## Custom styling

If you need custom button colors for specific use cases, you can add inline styles:

{{< button href="#" class="my-custom-button" >}}Custom Button{{< /button >}}

```html
<!-- Add custom class -->
{{</* button href="#" variant="primary" class="my-custom-button" */>}}Custom Button{{</* /button */>}}

<!-- Then in your custom CSS -->
<style>
.my-custom-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
}
</style>
```

## Questions or issues?

If you have questions about using buttons or need help implementing them in your theme, please refer to the [theme documentation](#) or open an issue on GitHub.
