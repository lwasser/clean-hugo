---
title: "Work with Images"
date: 2025-12-28
draft: false
layout: "docs"
excerpt: "Featured images, figure shortcode, optimization, and best practices"
header:
  color: "primaryDark"
---

## Overview

The Clean Hugo theme provides multiple ways to add images to your content, from simple Markdown syntax to advanced features with automatic WebP support and social sharing optimization.

## Standard Markdown Images

The simplest way to add an image is using standard Markdown syntax:

```markdown
![Alt text describing the image](/images/my-image.jpg)
```

This creates a responsive image that fits the content width. Always include descriptive alt text for accessibility.

## The Figure Shortcode

For more control, use the `figure` shortcode with these advantages:

- **Automatic WebP support** with PNG/JPG fallback
- **Captions** with Markdown formatting
- **Clickable images** linking to full-size versions
- **Semantic HTML** (`<figure>` and `<figcaption>`)

### Basic Usage

```markdown
{{</* figure 
  src="/images/my-image.png" 
  alt="Description of the image" 
  caption="Optional caption text"
*/>}}
```

### Parameters

- **`src`** (required) - Path to image file (PNG, JPG, or GIF)
- **`alt`** (optional) - Alternative text for screen readers and SEO
- **`caption`** (optional) - Caption displayed below image (supports Markdown)
- **`link`** (optional) - Custom URL (defaults to the image itself)

### WebP Support

The shortcode automatically uses WebP when available:

1. You provide: `/images/photo.png`
2. Shortcode looks for: `/images/photo.webp`
3. Modern browsers load the WebP version
4. Older browsers fall back to PNG/JPG

**Note:** You must create the WebP version yourself - the theme doesn't convert automatically.

## Featured Images in Blog Posts

Every blog post can have a featured image that appears in listings, at the top of the post, and in social media previews (LinkedIn, Discord, Slack, etc.).

### Required Format

Featured images use nested YAML in front matter:

```yaml
---
title: "My Blog Post"
date: 2025-12-28
image:
  src: "images/my-featured-image.jpg"
  alt: "Description for accessibility"
  credit: "Photo by Jane Doe on Unsplash"  # optional
---
```

### Fields

**`src`** (required)
- Place images in `static/images/` directory
- Reference as `images/filename.jpg` (no leading slash)

**`alt`** (required)
- Describes image for screen readers
- Used in social media previews
- Improves SEO

**`credit`** (optional)
- Displays in bottom-right of blog post header
- Use for proper attribution
- Example: "Photo by John Smith on Unsplash"

### Why This Format Matters

1. **Social Sharing** - Correct display on LinkedIn, Discord, Slack, Mastodon, Bluesky
2. **Accessibility** - Screen readers can describe images
3. **SEO** - Search engines understand images better
4. **Attribution** - Proper credit for photographers
5. **Consistency** - One format across all content

## Image Optimization

### 1. Use Appropriate Formats

- **WebP** - Best compression for modern browsers (with fallback)
- **PNG** - Images with transparency or sharp edges
- **JPG** - Photographs and complex images
- **SVG** - Logos, icons, simple graphics

### 2. Optimize File Size

Target file sizes:
- Hero images: < 200KB
- Blog post images: < 150KB
- Thumbnails: < 50KB

Use tools: ImageOptim, Squoosh, or ImageMagick

### 3. Create WebP Versions

Using ImageMagick:

```bash
# Convert single image
magick input.jpg output.webp

# Batch convert all JPGs
for file in *.jpg; do
  magick "$file" "${file%.jpg}.webp"
done
```

### 4. Store Images Correctly

Place images in `static/images/` directory:

```
your-hugo-site/
├── content/
│   └── blog/
│       └── my-post.md
└── static/
    └── images/
        ├── photo.jpg
        └── photo.webp
```

**Important path differences:**
- **In Markdown/shortcodes:** `/images/photo.jpg` (with leading slash)
- **In front matter:** `images/photo.jpg` (without leading slash)

## When to Use What

### Use Standard Markdown When:
- Quick, simple image needed
- No caption required
- WebP optimization not needed

### Use Figure Shortcode When:
- Automatic WebP support desired
- Captions with formatting needed
- Semantic HTML important for SEO
- Creating documentation or tutorials

## Accessibility Best Practices

Always include descriptive alt text for screen readers and SEO.

**Good alt text:**
- "Mountain landscape at sunset with purple sky"
- "Bar chart showing 50% increase in revenue"
- Concise (usually ≤ 125 characters)

**Avoid:**
- "Image of..." or "Picture of..." (redundant)
- Empty alt for content images (use `alt=""` only for decorative images)
- Repeating the caption verbatim

## Complete Example

Front matter with all options:

```yaml
---
title: "Getting Started with Hugo"
date: 2025-12-28
draft: false
excerpt: "A beginner's guide"
image:
  src: "images/hugo-tutorial.jpg"
  alt: "Developer working on laptop with Hugo website"
  credit: "Photo by Jane Smith on Unsplash"
category: "Tutorial"
tags:
  - hugo
  - tutorial
---
```

Figure with all features:

```markdown
{{</* figure 
  src="/images/example.png" 
  alt="Descriptive alt text" 
  caption="Caption with **Markdown** support"
*/>}}
```

## Next Steps

- **[Layouts & Shortcodes](/documentation/layouts-shortcodes/)** - Learn about other shortcodes
- **[SEO & Social Sharing](/documentation/seo/)** - Optimize images for search and social

