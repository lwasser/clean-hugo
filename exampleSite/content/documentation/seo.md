---
title: "SEO & Social Sharing"
date: 2025-12-28
draft: false
layout: "docs"
weight: 40
excerpt: "Optimize your site for search engines and social platforms"
header:
  color: "primaryDark"
# JSON-LD: TechArticle (article rich results)
tech_article: true
---

## Overview

The Clean Hugo theme is SEO optimized with comprehensive SEO features to help the site rank well in search engines and display beautifully when shared on social platforms.

## Open Graph tags

The theme automatically generates Open Graph meta tags for social sharing on:
- LinkedIn
- Discord
- Slack
- Mastodon
- Bluesky
- Discourse
- Most blog platforms

### What gets shared

When someone shares your link, social platforms display:
- **Title** - From page front matter
- **Description** - From `excerpt` or auto-generated summary
- **Image** - From featured image or site default
- **URL** - Canonical page URL

### Configure default image

Set a default social sharing image in `hugo.toml`:

```toml
[params.seo]
  # Default image for pages without featured images
  # Should be at least 1200x630px for best results
  default_image = "images/default-share.jpg"
```

## Canonical URLs

Every page includes a canonical URL tag to prevent duplicate content issues. This is especially important if your site is accessible via multiple URLs.

**Noindex:** To exclude a page from search engines, set `noindex: true` in its front matter. The theme outputs `<meta name="robots" content="noindex, nofollow">` for that page only. By default, pages are indexed.

## Structured metadata

The theme includes:
- Article metadata (author, published/modified dates, tags)
- Image metadata with alt text (`og:image:alt`)
- Keywords from tags
- Author information
- **JSON-LD** (Organization or Person) for search engines: set `[params.social]` and optionally `params.social.type` to `"Organization"` (default) or `"Person"`. For Person, set `params.social.name`. Social URLs (github, linkedin, etc.) are used as `sameAs` in the schema.
- **Site verification**: optional meta tags for Google and Bing under `[params.seo]` (see below).
- **Rich results**: **BlogPosting** on blog posts; **TechArticle** on documentation pages; **HowTo** when you add steps in front matter; **BreadcrumbList** on all pages.

## Rich results (Google Search)

The theme outputs structured data so your pages can be eligible for **rich results** in Google Search:

| Type | Where | What Google can show |
|------|--------|----------------------|
| **BlogPosting** | Blog posts only | Article rich result: image, date, author in search snippet |
| **TechArticle** | Pages with `tech_article: true` (set on page or via cascade for a path) | Article-style rich result for docs/tutorials |
| **HowTo** | Any page with `howto: true` and `steps` in front matter | How-to rich result: steps in search (expandable) |
| **LearningResource** | Any page with `learning_resource: true` (optional: skill_level, duration, prerequisites) | Educational metadata for lessons/tutorials |
| **SoftwareApplication** | Any page with `software_application: true` (package pages; optional: package_name, application_category, same_as) | Package/software rich result (e.g. reviewed packages, distinct from PyPI) |
| **VideoObject** | Any page with `video_url` or `video_embed_url` (YouTube; optional: video_title, video_upload_date, video_duration) | Video rich result for tutorial videos |
| **ItemList** | Packages section index when it has child pages with `software_application: true` | List of packages rich result |
| **Event** | Any page with nested `event:` and `event.start_date` (workshops, meetups, conferences) | Event rich result: date, time, location, cost |
| **BreadcrumbList** | Every page | Breadcrumb trail under the result (e.g. Home › Documentation › Page title) |

**Full reference:** See **[Schema & Front Matter Reference](/documentation/schema-reference/)** for all schema types in one place with when to use each, front matter examples, and what the output looks like.

- **Blog**: BlogPosting is added automatically for the blog section.
- **Docs/tutorials (TechArticle)**: Set `tech_article: true` on a page, or use Hugo’s **cascade** in `hugo.toml` to apply it to whole paths like `/lessons/` or `/peer-review/peer-review-guide/` (see below).
- **Breadcrumbs**: Built from your site structure (Home → section → page).
- **How-to / tutorials**: Add `howto: true` and a `steps` list in front matter (see below).
- **Lessons / learning content**: Add `learning_resource: true` and optional `skill_level`, `duration`, `prerequisites` (see below).
- **Packages**: Add `software_application: true` on each package page; the packages section index gets **ItemList** automatically (see below).
- **Tutorial videos**: Add `video_url` (YouTube) or `video_embed_url` for **VideoObject** (see below).
- **Events**: Add nested `event:` with `start_date` for **Event** (see below).

### TechArticle: per-page or whole path

**Option 1 – Single page:** In front matter, set `tech_article: true` on any page (any section) to output TechArticle for that page.

**Option 2 – Whole path:** In `hugo.toml`, use Hugo’s [cascade](https://gohugo.io/configuration/cascade/) to set `tech_article = true` for all pages under a path. Paths use the **logical path** (leading slash, `**` for “this section and all descendants”):

```toml
# Cascade: default front matter for paths
[[cascade]]
  [cascade.params]
    tech_article = true
  [cascade.target]
    path = "/documentation/**"

[[cascade]]
  [cascade.params]
    tech_article = true
  [cascade.target]
    path = "/lessons/**"

[[cascade]]
  [cascade.params]
    tech_article = true
  [cascade.target]
    path = "/peer-review/peer-review-guide/**"
```

- Use one `[[cascade]]` block per path (e.g. `/lessons/`, `/peer-review/peer-review-guide/`, `/handbook/`).
- A page can still override by setting `tech_article: false` in its own front matter.

**Test your pages:** Paste a live URL or your JSON-LD into [Google’s Rich Results Test](https://search.google.com/test/rich-results).

### HowTo for step-by-step docs and tutorials

For guides that are step-by-step (e.g. “How to install”, “Tutorial: …”), add **HowTo** schema via front matter so Google can show steps in search. In your doc’s front matter:

```yaml
howto: true
steps:
  - name: "Step title"
    text: "Short description of what to do."
  - name: "Next step"
    text: "Description."
# Optional: total time in ISO 8601 (e.g. PT5M = 5 minutes, PT1H30M = 1h 30m)
total_time: "PT5M"
```

- **name** (required): Short title for the step.
- **text** (optional but recommended): Plain-text description.
- **url** (optional): Link to an anchor or section for this step.
- **total_time** (optional): Total time to complete (e.g. `PT10M`, `PT1H`).

Example: see [Get Started](/documentation/get-started/) in this example site, which uses `howto: true` and `steps` for HowTo rich results.

### LearningResource for lessons and tutorials

For lessons, tutorials, or any content with an educational focus, add **LearningResource** schema so search engines understand skill level, duration, and prerequisites. In front matter:

```yaml
learning_resource: true
skill_level: "beginner"        # e.g. beginner, intermediate, advanced
duration: "45 minutes"         # or ISO 8601: PT45M, PT1H30M
prerequisites: ["Python basics", "Command line"]
# Optional:
# teaches: "Building a Python package"
# learning_resource_type: "tutorial"
# educational_use: "self study"
```

- **skill_level** → `educationalLevel` (e.g. beginner, intermediate, advanced).
- **duration** → `timeRequired` (plain text like "45 minutes" or ISO 8601 like `PT45M`).
- **prerequisites** → `competencyRequired` (array of strings).
- **teaches** (optional): what the resource teaches.
- **learning_resource_type** (optional): e.g. tutorial, handout, presentation.
- **educational_use** (optional): e.g. self study, assignment, group work.

See [Schema.org LearningResource](https://schema.org/LearningResource) for full property list.

### SoftwareApplication for package pages

For **reviewed packages** (e.g. pyOpenSci accepted packages), use **SoftwareApplication** so search engines treat them as software distinct from PyPI. Create one content page per package (e.g. under `content/packages/`) and set:

```yaml
software_application: true
package_name: "pandas"           # or use title
application_category: "DeveloperApplication"
application_subcategory: "Python package"   # optional
operating_system: "Linux, Windows, macOS"  # optional
software_version: "2.0.0"        # optional
same_as: "https://pypi.org/project/pandas/"  # PyPI or repo URL (string or array)
author: "The PyData Development Team"       # optional
offers_free: true               # optional; adds free offer
```

- **package_name** (optional): Overrides page title for the schema name.
- **same_as**: Link to PyPI, GitHub, or other canonical listing (differentiates your page from PyPI).
- **offers_free**: Set to true to add a free Offer in schema.

**Listing packages:** The **packages section index** (e.g. `/packages/`) automatically gets **ItemList** JSON-LD listing all child pages that have `software_application: true`. Create package pages under `content/packages/` (e.g. `content/packages/pandas.md`) and the index will list them.

See [Schema.org SoftwareApplication](https://schema.org/SoftwareApplication).

### VideoObject for tutorial videos

For pages that **embed a YouTube video** (e.g. tutorial), add **VideoObject** so search can show video rich results. In front matter:

```yaml
video_url: "https://www.youtube.com/watch?v=VIDEO_ID"   # or youtu.be/VIDEO_ID
# Or use embed URL directly:
# video_embed_url: "https://www.youtube.com/embed/VIDEO_ID"
video_title: "How to build a Python package"   # optional; defaults to page title
video_description: "..."                       # optional; defaults to page description
video_upload_date: "2024-01-15"                # ISO 8601
video_duration: "PT10M"                         # optional; ISO 8601 (e.g. PT10M = 10 min)
video_thumbnail: "https://..."                  # optional; auto from YouTube if video_url used
```

- **video_url**: YouTube watch URL or youtu.be URL; the theme derives the embed URL and thumbnail.
- **video_embed_url**: Use instead of video_url if you already have the embed URL.
- **video_upload_date**: Required for a complete VideoObject (ISO 8601 date).
- **video_duration**: Optional (e.g. `PT10M`, `PT1H5M`).

See [Schema.org VideoObject](https://schema.org/VideoObject).

### Event for workshops, meetups, and conferences

For **event pages** (workshops, meetups, conferences), add **Event** schema so search can show date, time, location, and cost. Use a single nested `event:` object in front matter:

```yaml
event:
  start_date: "2025-03-15T09:00:00-07:00"   # required; ISO 8601
  end_date: "2025-03-15T17:00:00-07:00"     # optional; for multi-day use next day
  title: "Python Packaging Workshop"        # optional; defaults to page title
  location_name: "Online"
  location_address: "Zoom"                  # optional
  offers_free: true                          # free event; or use price
  # price: "25"                              # if paid; optional price_currency (default USD)
  organizer: "pyOpenSci"                     # optional; defaults to site author
  topic: "Python packaging"                  # optional; topic/subject
  status: "https://schema.org/EventScheduled"  # optional
```

- **event.start_date** (required): ISO 8601 date or datetime (e.g. `2025-03-15` or `2025-03-15T09:00:00-07:00`).
- **event.end_date** (optional): For multi-day events, use the end date/time.
- **event.offers_free**: Set to true for free events; otherwise set **event.price** (string, e.g. `"25"`).
- **event.location_name**: Venue name or "Online".
- **event.location_address** (optional): Full address or "Zoom" for online.

See [Schema.org Event](https://schema.org/Event). For a single reference of all schema types and examples, see **[Schema & Front Matter Reference](/documentation/schema-reference/)**.

## Robots.txt

Enable robots.txt generation in `hugo.toml`:

```toml
enableRobotsTXT = true
```

The theme automatically:
- Blocks crawlers in development (`hugo server`)
- Allows crawlers in production (`hugo build`)
- References your sitemap

## Sitemap

Configure sitemap generation in `hugo.toml`:

```toml
[sitemap]
  changefreq = 'weekly'
  filename = 'sitemap.xml'
  priority = 0.5
```

Hugo automatically generates your sitemap at `/sitemap.xml`.

## Favicons & icons

### Required files

Place these files in your `static/` directory:

```
static/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

### Generate favicons

The easiest way to create all required formats:

1. Visit [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Upload your logo or icon
3. Customize settings
4. Download the package
5. Replace files in `static/`

### Web app manifest

Edit `static/site.webmanifest` with your site information:

```json
{
  "name": "Your Site Name",
  "short_name": "Short Name",
  "description": "Your site description",
  "theme_color": "#71B3B5",
  "background_color": "#ffffff",
  "display": "standalone",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

This enables "Add to Home Screen" functionality on mobile devices, making your site feel like a native app.

### Design tips

- **Use brand colors** - Match your theme's primary color
- **Keep it simple** - Favicons are tiny (16x16 to 32x32px)
- **Test at different sizes** - Preview at 16px, 32px, and 180px
- **High contrast** - Ensure visibility on browser tabs

### Alternative tools

- [Favicon.io](https://favicon.io/) - Generate from text, image, or emoji
- [Favicon Generator](https://www.favicon-generator.org/) - Simple online tool
- Figma/Sketch - Export at multiple sizes manually

## Testing social previews

### Online validators

**LinkedIn Post Inspector**
- URL: https://www.linkedin.com/post-inspector/
- Shows exactly how links appear on LinkedIn

**OpenGraph.xyz**
- URL: https://www.opengraph.xyz/
- Generic Open Graph validator
- Works for Discord, Slack, Mastodon, etc.

**Facebook Sharing Debugger**
- URL: https://developers.facebook.com/tools/debug/
- Most comprehensive OG validator
- Shows all meta tags + preview

### Test in real platforms

**Discord** (easiest to test quickly)
1. Create a private channel or DM yourself
2. Paste your blog post URL
3. See preview instantly

**Slack**
1. DM yourself in a workspace
2. Paste URL, see preview

### View source

Right-click page → "View Page Source" → Search for `og:` to see all Open Graph tags.

**Note:** For local testing, you'll need to deploy to a public URL or use a tunneling tool like ngrok. The validators need a public URL to fetch metadata.

## SEO configuration

### Site description

Set a site-wide description:

```toml
[params]
  description = "Your site description for SEO"
```

This is used when pages don't have their own excerpt.

### JSON-LD (Organization or Person)

The theme outputs Schema.org JSON-LD so search engines can recognize your site as an organization or person. Configure in `hugo.toml`:

```toml
[params.social]
  type = "Organization"   # default; use "Person" for a personal site
  # name = "Your Name"    # required when type = "Person"
  github = "https://github.com/yourorg"
  linkedin = "https://www.linkedin.com/company/yourorg"
  mastodon = "https://mastodon.social/@yourorg"
```

- **Organization** (default): uses site title, home URL, optional logo from `params.seo.default_image`, and `sameAs` from social URLs.
- **Person**: uses `params.social.name` (or site title), home URL, and `sameAs` from social URLs.

Validate with [Google's Rich Results Test](https://search.google.com/test/rich-results) or [validator.schema.org](https://validator.schema.org).

### Site verification

Optional verification codes for search console / webmaster tools. Add under `[params.seo]`:

```toml
[params.seo]
  default_image = "images/default-share.jpg"
  google_site_verification = "your-google-code"
  bing_site_verification = "your-bing-code"
```

Only set the ones you use; unset keys are omitted from the page.

### Page-level SEO

In page front matter:

```yaml
---
title: "Page Title"
excerpt: "Page description for search results and social sharing"
---
```

## Troubleshooting

### Images not showing in social previews

**Check:**
- Image path is correct (use `absURL` in templates)
- Image is at least 1200x630px
- Image file size < 8MB
- Image is publicly accessible

### Social platforms not updating

**Solution:**
- Clear platform's cache using their debugging tools
- LinkedIn Post Inspector has a "Refresh" button
- Facebook Debugger has "Scrape Again" button

### Robots.txt blocking site

**Check:**
- You're building with `hugo` (not `hugo server`)
- Production environment is set correctly
- robots.txt file is correct

## Accessibility

The theme is built with accessibility in mind (WCAG AA–oriented). The following is provided by the theme; content authors should follow the guidelines below so pages stay accessible.

### What the theme provides

- **Skip link** — A “Skip to main content” link is the first focusable element. It’s visually hidden until focused (keyboard or screen reader). It jumps to the main content landmark (`#main`).
- **Main landmark** — Page content is wrapped in `<main id="main">` so the skip link and assistive tech can target it.
- **Language** — The `<html>` tag includes `lang` from `languageCode` in your config (e.g. `lang="en"`).
- **ARIA** — Navigation and filters use appropriate ARIA: `aria-label` on buttons and icon links, `aria-expanded` / `aria-controls` on the nav toggle, `aria-pressed` on filter buttons. Decorative icons use `aria-hidden="true"`.
- **Form inputs** — Filter search inputs (e.g. on Packages and People pages) have associated labels or `aria-label` so screen readers can identify them. (We don't have any forms yet in this template)
- **Focus styles** — Interactive elements (links, buttons, filters) have visible focus indicators (outline or box-shadow).

### What content authors should do

- **Images** — Supply meaningful `alt` text in front matter (or in shortcodes) for content images. Use `alt=""` for purely decorative images so screen readers skip them.
- **Headings** — Use a logical hierarchy (e.g. one `h1` per page, then `h2` → `h3` without skipping levels). The theme uses semantic headings; your content should follow the same structure.
- **Links** — Use descriptive link text (e.g. “Read the packaging guide” instead of “click here”) so purpose is clear from the link alone.

Theme colors are designed to meet contrast guidelines; if you override them in `[params.theme.colors]`, check contrast (e.g. with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)).

## SEO best practices

### For search engines

1. **Unique titles** - Each page should have a unique, descriptive title
2. **Descriptive excerpts** - Write compelling descriptions for each page
3. **Alt text on images** - Always include descriptive alt text
4. **Internal linking** - Link between related pages
5. **Fresh content** - Regularly update your site

### For social sharing

1. **High-quality images** - Use images at least 1200x630px
2. **Compelling excerpts** - Write excerpts that encourage clicks
3. **Test previews** - Always test how links look before sharing
4. **Consistent branding** - Use your brand colors in images

## Next steps

- **[Get Started](/documentation/get-started/)** - Configure your site
- **[Working with Images](/documentation/images/)** - Optimize images for SEO
- **[Layouts & Shortcodes](/documentation/layouts-shortcodes/)** - Create rich content

