---
title: "Using Shortcodes to Build Dynamic Content"
date: 2025-12-24
draft: false
excerpt: "Learn how to use Hugo shortcodes to create reusable components without writing HTML. This guide covers the built-in shortcodes in Clean Hugo theme with practical examples."
category: "Tutorial"
show_author: false
tags:
  - shortcodes
  - hugo
  - tutorial
  - layouts
image:
  src: "images/unsplash-images.webp"
  alt: "Collection of scattered vintage photographs"
  credit: "Photo by Unsplash"
---

Hugo shortcodes are reusable snippets that let you add complex content to your pages without writing HTML. Think of them as pre-built components you can insert anywhere in your content files.

## Why use shortcodes?

Shortcodes give you:

- **Consistency** - Components look the same across your site
- **Maintainability** - Update the shortcode once, changes everywhere
- **Simplicity** - No HTML knowledge required
- **Flexibility** - Pass parameters to customize each instance

## Built-in shortcodes

The Clean Hugo theme includes several powerful shortcodes. Let's explore them!

### Metrics bar

Display key statistics or numbers in an eye-catching horizontal bar.

**Usage:**

```markdown
{{</* metrics-bar
  stat1="**100%** customizable"
  stat2="**15+** shortcodes"
  stat3="**3** layout types"
  stat4="**WCAG AA** accessible"
*/>}}
```

**Parameters:**
- `stat1`, `stat2`, `stat3`, `stat4` - Text for each metric
- Use `**text**` for bold (typically for numbers)
- Supports Markdown formatting

**Styling:**
The metrics bar automatically adapts to your theme colors using CSS variables. Customize the appearance in `assets/css/_metrics-bar.scss`.

### Section heading

Create consistent section headers with title and subtitle.

**Usage:**

```markdown
{{</* section-heading
  title="Theme Features"
  subtitle="Everything you need • Built-in support • Easy customization"
*/>}}
```

**Parameters:**
- `title` (required) - Main heading text
- `subtitle` (optional) - Smaller text below title, great for taglines

### Cards

Create content cards with icons, titles, and descriptions.

**Single Card:**

```markdown
{{</* card
  title="Feature Name"
  icon="fa-solid fa-star"
*/>}}

Your card content goes here. Supports Markdown!

- List items
- **Bold text**
- Links

{{</* /card */>}}
```

**Two-Column Card Row:**

```markdown
{{</* two-card-row */>}}

{{</* card title="First Card" icon="fa-solid fa-code" */>}}
Content for first card
{{</* /card */>}}

{{</* card title="Second Card" icon="fa-solid fa-palette" */>}}
Content for second card
{{</* /card */>}}

{{</* /two-card-row */>}}
```

**Parameters:**
- `title` (required) - Card heading
- `icon` (optional) - Font Awesome icon class
- `modifier` (optional) - CSS class for styling variants (e.g., `"card--white"`)

### Figure with images

Add images with captions and responsive sizing.

**Usage:**

```markdown
{{</* figure
  src="/images/example.webp"
  alt="Description for accessibility"
  caption="Image caption appears below"
*/>}}
```

**Parameters:**
- `src` (required) - Image path (relative to `static/`)
- `alt` (required) - Alt text for screen readers
- `caption` (optional) - Text displayed below image
- `class` (optional) - Additional CSS classes

**WebP Support:**
The theme includes a `<picture>` element pattern for serving WebP with PNG fallback:

```html
<picture>
  <source srcset="/images/example.webp" type="image/webp">
  <img src="/images/example.png" alt="Description">
</picture>
```

### Admonitions

Create callout boxes for notes, warnings, tips, and more.

**Usage:**

```markdown
{{</* admonition type="info" title="Pro Tip" */>}}
Shortcodes can be nested inside other shortcodes!
{{</* /admonition */>}}
```

**Types:** `info`, `success`, `warning`, `danger`, `note`

See the [Using Admonitions](../2025-12-22-using-admonitions-in-clean-hugo/) post for complete details.

### Blog list

Display recent blog posts anywhere on your site.

**Usage:**

```markdown
{{</* blog-list count="3" */>}}
```

**Parameters:**
- `count` (optional) - Number of posts to show (default: 3)

## Creating custom shortcodes

You can create your own shortcodes in `layouts/shortcodes/`. Here's a simple example:

**File:** `layouts/shortcodes/highlight-box.html`

```html
{{/* Custom highlight box shortcode */}}
{{ $color := .Get "color" | default "blue" }}
{{ $title := .Get "title" }}

<div class="highlight-box highlight-box--{{ $color }}">
  {{ if $title }}
  <h3>{{ $title }}</h3>
  {{ end }}
  <div class="highlight-box__content">
    {{ .Inner | markdownify }}
  </div>
</div>
```

**Usage:**

```markdown
{{</* highlight-box color="purple" title="Important" */>}}
This content will be highlighted!
{{</* /highlight-box */>}}
```

## Advanced techniques

### Dynamic metrics

For metrics that calculate from data (like the packages page), embed Hugo template code directly in your layout:

```html
{{ $totalItems := len .Site.Data.items }}

<div class="metrics-bar">
  <div class="metrics-bar__item">
    <span class="metrics-bar__number">{{ $totalItems }}</span>
    <span class="metrics-bar__label">Total Items</span>
  </div>
</div>
```

### Passing complex data

Use dictionaries to pass multiple values:

```markdown
{{</* custom-shortcode
  data=(dict "name" "Value" "count" 42 "active" true)
*/>}}
```

Access in shortcode:

```html
{{ $data := .Get "data" }}
{{ $data.name }} - {{ $data.count }}
```

### Conditional content

Check if parameters exist before rendering:

```html
{{ with .Get "optional-param" }}
  <div class="extra-content">{{ . }}</div>
{{ end }}
```

## Shortcode best practices

1. **Keep them simple** - Each shortcode should do one thing well
2. **Use defaults** - Provide sensible defaults with `| default "value"`
3. **Document parameters** - Add comments explaining what each parameter does
4. **Support Markdown** - Use `{{ .Inner | markdownify }}` for content
5. **Make them accessible** - Include ARIA labels and semantic HTML
6. **Test responsive** - Check how shortcodes look on mobile devices

## Styling shortcodes

Shortcode styles live in `assets/css/`. For example, metrics bar styles:

```scss
.metrics-bar {
  @apply flex justify-center gap-12 mb-12 p-8 rounded-lg;
  background: linear-gradient(135deg,
    var(--color-primary-light) 0%,
    var(--color-accent-light) 100%
  );
}

.metrics-bar__item {
  @apply flex flex-col items-center;
}

.metrics-bar__number {
  @apply text-5xl font-extrabold;
  color: var(--color-primary-dark);
}
```


## Common use cases

**Homepage features:**
```markdown
{{</* section-heading title="Our Services" */>}}

{{</* metrics-bar
  stat1="**500+** clients"
  stat2="**10 years** experience"
  stat3="**99%** satisfaction"
*/>}}
```

**Content sections:**
```markdown
{{</* two-card-row */>}}

{{</* card title="Documentation" icon="fa-solid fa-book" */>}}
Complete guides for every feature
{{</* /card */>}}

{{</* card title="Support" icon="fa-solid fa-comments" */>}}
24/7 community support
{{</* /card */>}}

{{</* /two-card-row */>}}
```

**Image galleries:**
```markdown
{{</* figure
  src="/images/project-1.webp"
  alt="Project screenshot"
  caption="Our latest project in production"
*/>}}
```

## Debugging shortcodes

If a shortcode isn't working:

1. **Check syntax** - Missing closing tags or typos in parameters
2. **Validate paths** - Image paths relative to `static/` folder
3. **Test parameters** - Add `{{ printf "%#v" . }}` to dump all params
4. **Review Hugo output** - Look for error messages in terminal
5. **Check quotes** - Use straight quotes `"`, not curly quotes `""`

## Next steps

- Explore the [Filterable Grids feature](/filterable-grids/) for advanced data-driven components
- Read about [Admonitions](../2025-12-22-using-admonitions-in-clean-hugo/) for callout boxes
- Learn [Image handling](../2025-12-23-adding-images-to-your-content/) with the figure shortcode

Shortcodes are one of Hugo's most powerful features. Start simple, experiment, and gradually build more complex components as you need them!
