---
title: "Layouts & Shortcodes"
date: 2025-12-28
draft: false
layout: "docs"
excerpt: "Page layouts and shortcodes for creating rich content"
header:
  color: "primaryDark"
---

## Page Layouts

The theme includes several pre-built layouts for different content types.

### Splash Layout

Perfect for homepages. Includes hero section, page content, and recent blog posts.

```yaml
---
title: "Homepage"
layout: "splash"
hero:
  title: "Welcome"
  subtitle: "Your tagline"
  excerpt: "Description"
  image:
    src: "images/hero.jpg"
    alt: "Hero image description"
---
```

### Docs Layout

Documentation pages with automatic sidebar navigation (like this page!).

```yaml
---
title: "Documentation"
layout: "docs"
excerpt: "Page description"
---
```

The sidebar automatically generates from your page headings (h2, h3).

### Blog Layouts

**Single Post** (`blog/single`) - Individual blog post layout with clean typography

**Blog Listing** (`blog/list`) - Blog listing page with:
- Featured section for most recent post
- Category filtering
- Responsive grid layout
- Pagination

### Gallery Layouts

**Single Item** (`gallery/single`) - Individual gallery item with images

**Gallery Grid** (`gallery/list`) - Gallery grid with filtering capabilities

## Creating Content

### Blog Posts

Blog posts live in `content/blog/`. Each post requires front matter:

```yaml
---
title: "My Blog Post"
date: 2025-12-28
draft: false
excerpt: "Short summary for listings"
image:
  src: "images/featured-image.jpg"
  alt: "Description for accessibility"
  credit: "Photo by Jane Doe on Unsplash"  # optional
category: "Tutorial"
show_author: false
tags:
  - hugo
  - web-development
---

Your post content in Markdown...
```

### Gallery Items

If you've enabled the gallery feature, create items in `content/gallery/`:

```yaml
---
title: "Item Name"
groups: ["category1", "category2"]
hero:
  title: "Item Title"
  subtitle: "Description"
  image:
    src: "images/item-image.jpg"
    alt: "Image description"
---

Additional details about this item...
```

Use Hugo's archetype to create new gallery items:

```bash
hugo new gallery/item-name/index.md
```

## Shortcodes

Shortcodes let you add special content types in Markdown without writing HTML.

### Figure

Add images with captions and automatic WebP support:

```markdown
{{</* figure 
  src="/images/photo.png" 
  alt="Description" 
  caption="Caption text with **Markdown** support"
*/>}}
```

The shortcode automatically looks for a WebP version (`photo.webp`) and uses it for modern browsers with PNG/JPG fallback.

### Admonitions

Create callout boxes for important information:

```markdown
{{</* admonition type="info" title="Optional Title" */>}}
Your message here with **Markdown** support.
{{</* /admonition */>}}
```

Available types: `info`, `success`, `warning`, `danger`, `note`

**Example:**

{{< admonition type="info" title="Pro Tip" >}}
Admonitions are great for highlighting important information in documentation!
{{< /admonition >}}

### Cards

Create card layouts:

```markdown
{{</* card title="Card Title" icon="fa-solid fa-star" */>}}
Card content with **Markdown** support.
{{</* /card */>}}
```

### Two-Card Row

Display two cards side-by-side:

```markdown
{{</* two-card-row */>}}

{{</* card title="First Card" */>}}
Content for first card
{{</* /card */>}}

{{</* card title="Second Card" */>}}
Content for second card
{{</* /card */>}}

{{</* /two-card-row */>}}
```

### Single Card Wide

Full-width card for emphasis:

```markdown
{{</* single-card-wide title="Wide Card" icon="fa-solid fa-gift" */>}}
Content that spans the full width
{{</* /single-card-wide */>}}
```

### Impact Cards

Display front matter cards in an impact layout:

```yaml
---
cards:
  - title: "Feature One"
    icon: "fa-solid fa-star"
    excerpt: "Description"
  - title: "Feature Two"
    icon: "fa-solid fa-bolt"
    excerpt: "Description"
---

{{</* impact-cards */>}}
```

### Blog List

Display recent blog posts on any page:

```markdown
{{</* blog-list title="Recent Posts" limit=3 */>}}
```

### Section Heading

Add styled section headings:

```markdown
{{</* section-heading
  title="Section Title"
  subtitle="Optional subtitle • With separators"
*/>}}
```

### Metrics Bar

Display key statistics:

```markdown
{{</* metrics-bar
  stat1="**100%** customizable"
  stat2="**15+** shortcodes"
  stat3="**3** layouts"
  stat4="**WCAG AA** accessible"
*/>}}
```

### YouTube

Embed YouTube videos:

```markdown
{{</* youtube id="VIDEO_ID" */>}}
```

The video ID is the string after `v=` in the YouTube URL.

### Feature Section

Display structured features from front matter:

```yaml
---
feature_section:
  title: "What I've Built"
  subtitle: "Your subtitle"
  sections:
    - title: "Section Title"
      lead: "Optional lead paragraph"
      items:
        - bold: "Bold Text:"
          text: " Rest of the text"
        - text: "Plain text item"
        - text: "Linked Item"
          url: "https://example.com"
---

{{</* feature-section */>}}
```

## Customization

### Custom CSS

Add custom styles in `assets/css/custom.scss` (create if it doesn't exist). The theme will automatically include it.

### Custom JavaScript

Add custom scripts to `static/js/` and reference them in your templates or content.

### Override Templates

To customize a template, copy it from `themes/clean-hugo/layouts/` to your site's `layouts/` directory with the same path. Your version will override the theme's version.

Example: To customize the footer, copy:
- From: `themes/clean-hugo/layouts/partials/footer.html`
- To: `layouts/partials/footer.html`

## Next Steps

- **[Working with Images](/documentation/images/)** - Learn about featured images and optimization
- **[SEO & Social Sharing](/documentation/seo/)** - Optimize for search engines

