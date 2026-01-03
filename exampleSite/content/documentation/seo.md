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
- Image metadata with alt text
- Keywords from tags
- Author information

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

