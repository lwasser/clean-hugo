---
title: "Clean Hugo Theme Color Reference Guide"
date: 2025-12-25
author: "Clean Hugo Theme"
categories: ["documentation", "customization"]
tags: ["colors", "theme-config"]
excerpt: "View the default colors available in this theme and learn how to customize them. This is a complete reference guide to all customizable theme colors with visual swatches and hex codes."
image:
  src: "images/unsplash-images.webp"
  alt: "Collection of scattered vintage photographs"
  credit: "Photo by Unsplash"
---


The Clean Hugo theme comes with a sensible teal theme 
out of the box. You can fully customize it to match your brand. to customize, simply update the colors defined in the `hugo.toml` configuration file under `[params.theme.colors]`. 

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

All default theme colors are designed to meet **WCAG AA accessibility standards** for color contrast (4.5:1 for normal text, 3:1 for large text). When customizing colors, please ensure your color choices maintain adequate contrast ratios.

### Testing your colors

Use tools like [WebAIM's Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify that your custom colors meet accessibility standards.

## Example configuration

Here's a complete example showing all color options in `hugo.toml`:

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
  
  # Link colors
  link = "#2E6060"
  linkOnDark = "#2DD4BF"
  linkHover = "#1F4345"
  
  # Specific use
  blogHighlight = "#111827"
  footerBg = "#115E59"
  featureCard = "#EBC1D3"
  
  # Admonitions
  admonition-info = "#3B82F6"
  admonition-success = "#22C55E"
  admonition-warning = "#EAB308"
  admonition-danger = "#EF4444"
  admonition-note = "#6B7280"
```

## Quick start

To get started customizing your theme colors:

1. Open your `hugo.toml` file
2. Find or add the `[params.theme.colors]` section
3. Change the hex codes to your desired colors
4. Save and rebuild your site to see the changes

The theme will automatically apply your custom colors throughout the site while maintaining a cohesive design!
