---
title: "Theme Colors"
date: 2026-01-03
draft: false
layout: "docs"
weight: 50
excerpt: "Learn how to customize theme colors."
header:
  color: "primaryDark"
---

The Clean Hugo theme comes with a sensible teal theme. You can fully customize it to match your brand. To customize, simply update the colors defined in the `hugo.toml` configuration file under `[params.theme.colors]`. 

{{< admonition type="info" title="How Colors Work in This Theme" >}}

Hugo colors in the theme are defined by default in the hugo.toml file using hex color codes. These colors are injected into the CSS using Hugo's templating system, allowing for easy customization without modifying the theme's CSS files directly.

{{< /admonition >}}

## How to customize colors

Add or modify colors in your `hugo.toml`:

```toml
[params.theme.colors]
  primary = "#71B3B5"
  primaryDark = "#2E6060"
  # ... more colors
```

## Color palette

Below are all the theme colors currently defined in your `hugo.toml` configuration. These colors are dynamically read from your config, so when you add or update colors, they'll automatically appear here.

{{< theme-colors >}}

## Color accessibility

It's ideal to ensure that default theme colors  meet **WCAG AA accessibility standards** for color contrast (4.5:1 for normal text, 3:1 for large text). You can use tools like [WebAIM's Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify that your custom colors meet accessibility standards.

## Example configuration

Below are the default colors that come with the theme when installed.

```toml
[params.theme.colors]
  # Brand colors (defaults) — can be overridden in site hugo.toml
  primary = "#2E6060"
  primaryDark = "#142929"
  primaryLight = "#D6E3E3"
  secondary = "#F1E0A6"
  accent = "#42213D"
  accentLight = "#E4B8C6"
  neutral = "#395E66"

  # Base/Text colors
  white = "#FFFFFF"

  # Gray scale (for theme customization)
  gray50 = "#F9FAFB"
  gray200 = "#E5E7EB"
  gray600 = "#4B5563"
  gray700 = "#374151"
  gray900 = "#111827" # Used for dark background for blog highlights

  # Semantic colors
  link = "#2E6060"
  linkOnDark = "#2DD4BF"
  linkHover = "#1F4345"
  featureCard = "#EBC1D3"

  # Section backgrounds (kept as references for semantic clarity)
  "heroBg" = "#2E6060"

  # Admonition colors
  "admonition-info" = "#53354F"      # deep purple
  "admonition-success" = "#71B3B5"   # brighter teal
  "admonition-warning" = "#E4B8C6"   # Soft blossom
  "admonition-danger" = "#F1E0A6"    # yellow custard
  "admonition-note" = "#CAE4E4"      # soft teal
```

## How to modify colors

To customize your theme colors:

1. Open your `hugo.toml` file
2. Find or add the `[params.theme.colors]` section
3. Change the hex codes to your desired colors
4. Save and rebuild your site to see the changes

The theme will automatically apply your custom colors throughout the site.
