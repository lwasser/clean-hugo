---
title: "Flowing Pages with Curved Dividers"
date: 2026-02-08
draft: false
layout: "docs"
weight: 10
excerpt: "Learn how to create a page with flowing dividers using svg graphics."
header:
  color: "primaryDark"
tech_article: true
---

If you want to create a flowing page with svg dividers you can use the
`swoosh_section` shortcode. Swoosh sections are full-width blocks with
optional curved or graphical SVG dividers between them.

You can use these shortcodes to build flowing pages that alternate white
and colored bands. The default colors that are created for this theme are
light purple and pale green following pyOpenSci's purple and green theme
colors.

Each section spans the full viewport width by default; content inside is
constrained in a centered column (max-width 1280px). You can add markdown,
shortcodes, or raw HTML (including `<div>` wrappers) to the shortcode.

**On docs pages** use `layout="docs"` so the section stays within the
content area and does not bleed into the left sidebar. Omit it for
full-width (e.g. blog, single). See [full-width examples on the blog](/blog/2026-02-08-how-to-add-flowing-dividers/).

## Add a purple section with a bottom divider

You add the shortcode to your page like this, specifying whether it's a
top or bottom divider:

```html
{{</* swoosh_section background="purple" swoosh="bottom" */>}}
Your flowing content here!
{{</* /swoosh_section */>}}
```

{{< swoosh_section background="purple" swoosh="bottom" layout="docs" >}}
Your flowing content here!
{{< /swoosh_section >}}

You can modify the divider background color and position the swoosh at the top
or bottom of the section by changing the `background` and `swoosh` parameters.

## Add a green section with a top divider

For example, to create a green section with a swoosh at the top, use:

```html
{{</* swoosh_section background="green" swoosh="top" */>}}
Green background with a swoosh at the top.
{{</* /swoosh_section */>}}
```

{{< swoosh_section background="green" swoosh="top" layout="docs" >}}
Green background with a swoosh at the top.
{{< /swoosh_section >}}

## Shortcode parameters: `swoosh_section`

A the flowing block shortcode parameter cheat sheet:

**Parameters**

| Parameter   | Values                    | Default  | Description |
|------------|----------------------------|----------|-------------|
| `background` | `white`, `purple`, `green` | `white`  | Section bg. |
| `swoosh`     | `none`, `top`, `bottom`    | `none`   | Divider above/below. |
| `layout`     | `docs` or omit             | (full)   | Use `docs` for contained width. |

**Contained width on docs pages**

On documentation pages (with a left sidebar), add `layout="docs"` so the
section stays within the content column and does not bleed into the
sidebar. Omit `layout` for full viewport width (e.g. blog, single).

**Usage**

```markdown
{{</* swoosh_section background="purple" swoosh="bottom" layout="docs" */>}}
Your content here. You can use **markdown**, shortcodes, or raw HTML.
{{</* /swoosh_section */>}}
```

**Flow pattern**

* White section (no swoosh) → purple section with `swoosh="bottom"` → white section → purple section with `swoosh="top"` and `swoosh="bottom"` → etc. The divider’s fill matches the section’s background (purple or green).

## Example on this page (contained width)

The content below uses `layout="docs"` so sections stay in the content
column. For full-width examples (blog, single), see [How to add flowing
dividers](/blog/2026-02-08-how-to-add-flowing-dividers/).

{{< swoosh_section background="white" layout="docs" >}}

### First band (white)

This is a default white section. It doesn't have a curved divider. Content
is centered in a max-width column.

{{< /swoosh_section >}}

{{< swoosh_section background="purple" swoosh="bottom" layout="docs" >}}

### Second band (purple, swoosh below)

This section has a purple background and a curved divider at the bottom.
The wave matches the purple so the transition into the next section looks
continuous.

{{< /swoosh_section >}}

{{< swoosh_section background="white" layout="docs" >}}

### Third band (white again)

Back to white. The purple wave above curves down into this band.

{{< /swoosh_section >}}

{{< swoosh_section background="purple" swoosh="top" layout="docs" >}}

### Fourth band (purple, swoosh on top and bottom)

The shortcode accepts only one `swoosh` value per block. To have a divider
above and below, use two blocks: one with `swoosh="bottom"` and the next
with `swoosh="top"`.

{{< /swoosh_section >}}

{{< swoosh_section background="purple" swoosh="bottom" layout="docs" >}}

{{< /swoosh_section >}}
