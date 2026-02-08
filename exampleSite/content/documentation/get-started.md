---
title: "Get Started"
date: 2025-12-28
draft: false
layout: "docs"
weight: 2
excerpt: "Install and configure the Clean Hugo theme in a few steps."
header:
  color: "primaryDark"
# JSON-LD: TechArticle (article rich results). Set tech_article: true or use cascade in hugo.toml for path.
tech_article: true
# HowTo schema for rich results (step-by-step tutorials). Optional; add howto: true and steps for HowTo rich results.
howto: true
steps:
  - name: "Add the theme to your site"
    text: "Add the theme as a git submodule or clone it into your themes directory."
  - name: "Configure hugo.toml"
    text: "Set theme = \"clean-hugo\" and add baseURL, title, and params."
  - name: "Run the site"
    text: "Run hugo server to preview your site locally."
total_time: "PT5M"
# LearningResource schema for lessons/tutorials (educational metadata)
learning_resource: true
skill_level: "beginner"
duration: "45 minutes"
prerequisites: ["Hugo installed", "Command line basics"]
---

## Installation

Before you can use this theme, you need to add it to your Hugo site. The easiest way is to add it as a git submodule, which keeps everything organized and makes it easy to update the theme later.

### Add theme to your site

If you're using git submodules (recommended):

```bash
git submodule add https://github.com/lwasser/clean-hugo themes/clean-hugo
```

If you prefer to clone it directly into your themes folder:

```bash
git clone https://github.com/lwasser/clean-hugo themes/clean-hugo
```

Once the theme is in place, tell Hugo to use it by updating your `hugo.toml` configuration file:

```toml
theme = 'clean-hugo'
```

## Basic configuration

The theme is controlled through your `hugo.toml` configuration file. Here's a minimal setup to get started:

```toml
baseURL = 'https://yoursite.com/'
languageCode = 'en-us'
title = 'Your Site Title'
theme = 'clean-hugo'

# SEO: Enable robots.txt generation
enableRobotsTXT = true

[params]
  author = "Your Name"
  tagline = "Your site tagline"
  description = "Your site description for SEO"
```

## Theme features

Enable or disable optional features:

```toml
[params.theme]
  enableGallery = true        # Enable gallery pages with filtering
  enableFontAwesome = true    # Include Font Awesome icons
```

## Customize fonts

Choose fonts from Google Fonts or use system fonts:

```toml
[params.theme.fonts]
  heading = "Sora"    # Font for h1-h6 elements
  body = "Inter"      # Font for body text
```

The theme includes Sora and Inter as vendored woff2 variable fonts. To use different fonts, you'll need to update both the CSS file and hugo.toml.

## Customize colors

All colors are specified using hex codes:

```toml
[params.theme.colors]
  # Brand colors
  primary = "#71B3B5"
  primaryDark = "#2E6060"
  primaryLight = "#D6E3E3"
  secondary = "#EDB88B"
  accent = "#42213D"
  accentLight = "#AC87A0"
  neutral = "#395E66"
  
  # Specific use colors
  blogHighlight = "#111827"
  link = "#2E6060"
  linkOnDark = "#2DD4BF"
  linkHover = "#1F4345"
  featureCard = "#EBC1D3"
  
  # Admonition colors
  admonition-info = "#3B82F6"
  admonition-success = "#22C55E"
  admonition-warning = "#EAB308"
  admonition-danger = "#EF4444"
  admonition-note = "#6B7280"
```

### Color accessibility

All default colors meet **WCAG AA accessibility standards** for color contrast (4.5:1 for normal text, 3:1 for large text).

When customizing colors:
- Test contrast ratios using [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Use darker colors for links on light backgrounds
- Use lighter colors for links on dark backgrounds

## Social media links

Add social media links to your footer:

```toml
[params.social]
  github = "https://github.com/username"
  linkedin = "https://linkedin.com/in/username"
  mastodon = "https://fosstodon.org/@username"
  bluesky = "https://bsky.app/profile/username"
  orcid = "https://orcid.org/0000-0000-0000-0000"
  rss = "/index.xml"
  email = "mailto:email@example.com"
```

Only include platforms you actually use - missing ones won't appear.

## Blog configuration

Customize the blog listing page:

```toml
[params]
  blog_title = "Welcome to My Blog"

  [params.blog]
    sidebar_count = 2      # Number of posts in sidebar
    excerpt_length = 200   # Character length for excerpts
```

## Navigation menu

Configure your site navigation:

```toml
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1

[[menu.main]]
  name = "Blog"
  url = "/blog/"
  weight = 2

[[menu.main]]
  name = "About"
  url = "/about/"
  weight = 3

# Dropdown menu example
[[menu.main]]
  name = "Resources"
  url = "/resources/"
  weight = 4
  identifier = "resources"

[[menu.main]]
  name = "Documentation"
  parent = "resources"
  url = "/documentation/"
  weight = 1
```

### Optional CTA button

Add a call-to-action button to your navigation:

```toml
[params.nav_button]
  text = "Donate Now"
  url = "#donate"
  background = "#115E59"
  textColor = "#FFFFFF"
```

## Development

### Local development

Run Hugo's development server:

```bash
cd exampleSite
hugo server --disableFastRender
```

### Building for production

Build your site:

```bash
hugo --minify
```

The built site will be in the `public/` directory.

### Directory structure

```
your-hugo-site/
├── content/           # Your content (Markdown files)
│   ├── blog/
│   ├── gallery/
│   └── _index.md
├── static/            # Static assets (images, favicons)
│   ├── images/
│   ├── favicon.ico
│   └── site.webmanifest
├── themes/
│   └── clean-hugo/    # This theme
├── hugo.toml          # Site configuration
└── public/            # Generated site (after build)
```

## Next steps

- **[Layouts & Shortcodes](/documentation/layouts-shortcodes/)** - Learn about page layouts and content components
- **[Working with Images](/documentation/images/)** - Featured images and optimization
- **[SEO & Social Sharing](/documentation/seo/)** - Optimize for search engines and social platforms

