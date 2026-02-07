---
title: "SEO & Social Sharing"
date: 2025-12-28
draft: false
layout: "docs"
weight: 40
excerpt: "Optimize your site for search engines and social platforms"
header:
  color: "primaryDark"
---

## Overview

The Clean Hugo theme includes comprehensive SEO features to help your site rank well in search engines and display beautifully when shared on social platforms.

## Open Graph Tags

The theme automatically generates Open Graph meta tags for social sharing on:
- LinkedIn
- Discord
- Slack
- Mastodon
- Bluesky
- Discourse
- Most blog platforms

### What Gets Shared

When someone shares your link, social platforms display:
- **Title** - From page front matter
- **Description** - From `excerpt` or auto-generated summary
- **Image** - From featured image or site default
- **URL** - Canonical page URL

### Configure Default Image

Set a default social sharing image in `hugo.toml`:

```toml
[params.seo]
  # Default image for pages without featured images
  # Should be at least 1200x630px for best results
  default_image = "images/default-share.jpg"
```

## Canonical URLs

Every page includes a canonical URL tag to prevent duplicate content issues. This is especially important if your site is accessible via multiple URLs.

## Structured Metadata

The theme includes:
- Article metadata (author, published/modified dates, tags)
- Image metadata with alt text (`og:image:alt`)
- Keywords from tags
- Author information
- **JSON-LD** (Organization or Person) for search engines: set `[params.social]` and optionally `params.social.type` to `"Organization"` (default) or `"Person"`. For Person, set `params.social.name`. Social URLs (github, linkedin, etc.) are used as `sameAs` in the schema.
- **Site verification**: optional meta tags for Google, Bing, Yandex, Naver, and Baidu under `[params.seo]` (see below).
- **Rich results**: **BlogPosting** on blog posts; **TechArticle** on documentation pages; **HowTo** when you add steps in front matter; **BreadcrumbList** on all pages.

## Rich Results (Google Search)

The theme outputs structured data so your pages can be eligible for **rich results** in Google Search:

| Type | Where | What Google can show |
|------|--------|----------------------|
| **BlogPosting** | Blog posts only | Article rich result: image, date, author in search snippet |
| **TechArticle** | Pages with `tech_article: true` (set on page or via cascade for a path) | Article-style rich result for docs/tutorials |
| **HowTo** | Any page with `howto: true` and `steps` in front matter | How-to rich result: steps in search (expandable) |
| **BreadcrumbList** | Every page | Breadcrumb trail under the result (e.g. Home › Documentation › Page title) |

- **Blog**: BlogPosting is added automatically for the blog section.
- **Docs/tutorials (TechArticle)**: Set `tech_article: true` on a page, or use Hugo’s **cascade** in `hugo.toml` to apply it to whole paths like `/lessons/` or `/peer-review/peer-review-guide/` (see below).
- **Breadcrumbs**: Built from your site structure (Home → section → page).
- **How-to / tutorials**: Add `howto: true` and a `steps` list in front matter (see below).

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

## Favicons & Icons

### Required Files

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

### Generate Favicons

The easiest way to create all required formats:

1. Visit [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Upload your logo or icon
3. Customize settings
4. Download the package
5. Replace files in `static/`

### Web App Manifest

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

### Design Tips

- **Use brand colors** - Match your theme's primary color
- **Keep it simple** - Favicons are tiny (16x16 to 32x32px)
- **Test at different sizes** - Preview at 16px, 32px, and 180px
- **High contrast** - Ensure visibility on browser tabs

### Alternative Tools

- [Favicon.io](https://favicon.io/) - Generate from text, image, or emoji
- [Favicon Generator](https://www.favicon-generator.org/) - Simple online tool
- Figma/Sketch - Export at multiple sizes manually

## Testing Social Previews

### Online Validators

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

### Test in Real Platforms

**Discord** (easiest to test quickly)
1. Create a private channel or DM yourself
2. Paste your blog post URL
3. See preview instantly

**Slack**
1. DM yourself in a workspace
2. Paste URL, see preview

### View Source

Right-click page → "View Page Source" → Search for `og:` to see all Open Graph tags.

**Note:** For local testing, you'll need to deploy to a public URL or use a tunneling tool like ngrok. The validators need a public URL to fetch metadata.

## SEO Configuration

### Site Description

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

### Site Verification

Optional verification codes for search console / webmaster tools. Add under `[params.seo]`:

```toml
[params.seo]
  default_image = "images/default-share.jpg"
  google_site_verification = "your-google-code"
  bing_site_verification = "your-bing-code"
  # Optional regional: yandex_site_verification, naver_site_verification, baidu_site_verification
```

Only set the ones you use; unset keys are omitted from the page.

### Page-Level SEO

In page front matter:

```yaml
---
title: "Page Title"
excerpt: "Page description for search results and social sharing"
---
```

## Troubleshooting

### Images Not Showing in Social Previews

**Check:**
- Image path is correct (use `absURL` in templates)
- Image is at least 1200x630px
- Image file size < 8MB
- Image is publicly accessible

### Social Platforms Not Updating

**Solution:**
- Clear platform's cache using their debugging tools
- LinkedIn Post Inspector has a "Refresh" button
- Facebook Debugger has "Scrape Again" button

### Robots.txt Blocking Site

**Check:**
- You're building with `hugo` (not `hugo server`)
- Production environment is set correctly
- robots.txt file is correct

## Best Practices

### For Search Engines

1. **Unique titles** - Each page should have a unique, descriptive title
2. **Descriptive excerpts** - Write compelling descriptions for each page
3. **Alt text on images** - Always include descriptive alt text
4. **Internal linking** - Link between related pages
5. **Fresh content** - Regularly update your site

### For Social Sharing

1. **High-quality images** - Use images at least 1200x630px
2. **Compelling excerpts** - Write excerpts that encourage clicks
3. **Test previews** - Always test how links look before sharing
4. **Consistent branding** - Use your brand colors in images

### For Accessibility

1. **Alt text** - Required for all content images
2. **Descriptive links** - Use meaningful link text
3. **Semantic HTML** - Theme uses proper heading hierarchy
4. **Color contrast** - Theme meets WCAG AA standards

## Next Steps

- **[Get Started](/documentation/get-started/)** - Configure your site
- **[Working with Images](/documentation/images/)** - Optimize images for SEO
- **[Layouts & Shortcodes](/documentation/layouts-shortcodes/)** - Create rich content

