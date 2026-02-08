---
title: "How to make a swoosh page with sections of different colors"
date: 2026-02-08
draft: false
excerpt: "How-to: build a flowing page with full-width swoosh sections and curved SVG dividers in Clean Hugo."
category: "How-to"
show_author: false
tags:
  - shortcodes
  - how-to
  - swoosh
  - layout
howto: true
steps:
  - name: "Add a white section"
    text: "Use the swoosh_section shortcode with background=\"white\" and no swoosh."
  - name: "Add a purple section with a bottom divider"
    text: "Use background=\"purple\" and swoosh=\"bottom\" so the curve flows into the next section."
  - name: "Add a green section"
    text: "Use background=\"green\" and optionally swoosh=\"top\" or swoosh=\"bottom\" to match your flow."
total_time: "PT5M"
image:
  src: "images/unsplash-green-fields.webp"
  alt: "Lush green fields"
---

Swoosh sections are full-width bands with optional curved SVG dividers at the top or bottom, so you can build a flowing page (white and colored sections with non-straight dividers). This how-to gives the exact code for each section type; each "Result" below is the live section so you see the full-width band and divider.

**Shortcode:** `swoosh_section` (block). Use **angle brackets** (see code examples below) so the shortcode’s HTML is output as-is; with percent brackets Goldmark strips it and you get “raw HTML omitted.”  
**On docs pages** (with a left sidebar), use `layout="docs"` so the section
stays in the content column and does not bleed into the sidebar. See
[Swoosh sections](/documentation/swoosh-sections/) for contained-width
examples.

**Parameters:** `background` (`white` | `purple` | `green`), `swoosh`
(`none` | `top` | `bottom`), `layout` (`docs` for contained width).


## 1. White section (no curve)

A plain full-width band with a white background. Use this for intro text or between colored sections.

**Code for the section below:**

````markdown
{{</* swoosh_section background="white" */>}}

### Your heading here

Your content. **Markdown** and shortcodes work within these blocks. You can also as raw HTML like:

```html
 <div class="my-block">...

 </div>
```

{{</* /swoosh_section */>}}
````

**Result:**

{{< swoosh_section background="white" >}}
### Your heading here

Your content. **Markdown** and shortcodes work. You can also include raw HTML within these blocks like: `<div class="my-block">...</div>`.
{{< /swoosh_section >}}

## 2. Purple section with a curve below

A full-width purple band with a curved divider at the bottom so the next section (e.g. white) flows in underneath.

**Code for the section below:**

```markdown
{{</* swoosh_section background="purple" swoosh="bottom" */>}}
### Purple band

This section has a light purple background. The `swoosh="bottom"` adds the wave at the bottom so the next section sits under the curve.
{{</* /swoosh_section */>}}
```

**Result:**

{{< swoosh_section background="purple" swoosh="bottom" >}}
### Purple band

This section has a light purple background. The `swoosh="bottom"` adds the wave at the bottom so the next section sits under the curve.
{{< /swoosh_section >}}


## 3. White section again

Another white band. No swoosh needed unless you want a curve above (see step 5).

**Code for the section below:**

```markdown
{{</* swoosh_section background="white" */>}}
### Back to white

Plain white section. Good for contrast after a colored block.
{{</* /swoosh_section */>}}
```

**Result:**

{{< swoosh_section background="white" >}}
### Back to white

Plain white section. Good for contrast after a colored block.
{{< /swoosh_section >}}


## 4. Green section with a curve below

A full-width green (teal) band with a curved divider at the bottom. Same idea as purple, different color.

**Code for the section below:**

```markdown
{{</* swoosh_section background="green" swoosh="bottom" */>}}
### Green band

Use `background="green"` for a light teal band. Combine with `swoosh="bottom"` for the wave.
{{</* /swoosh_section */>}}
```

**Result:**

{{< swoosh_section background="green" swoosh="bottom" >}}
### Green band

Use `background="green"` for a light teal band. Combine with `swoosh="bottom"` for the wave.
{{< /swoosh_section >}}


## 5. Colored section with a curve above

When a colored section follows a white one, you can add a curve *above* the colored section so the wave comes down from the previous band.

**Code for the section below:**

```markdown
{{</* swoosh_section background="purple" swoosh="top" */>}}
### Purple with curve on top

`swoosh="top"` draws the wave at the top of this section, so it looks like the white band above flows into this one.
{{</* /swoosh_section */>}}
```

**Result:**

{{< swoosh_section background="purple" swoosh="top" >}}
### Purple with curve on top

`swoosh="top"` draws the wave at the top of this section, so it looks like the white band above flows into this one.
{{< /swoosh_section >}}


## 6. Green band with curves top and bottom

Use two consecutive green blocks: the first with `swoosh="bottom"`, the second with `swoosh="top"`. You get a green band with a curve above (from the previous section) and a curve below (into the next section).

**Result:**

{{< swoosh_section background="green" swoosh="bottom" >}}
### Green with curve below

First green block: curve at the bottom.
{{< /swoosh_section >}}
{{< swoosh_section background="green" swoosh="top" >}}
### Green with curve above

Second green block: curve at the top. Together they form one green band with curves on both sides.
{{< /swoosh_section >}}


## 7. Purple band with curves top and bottom

Same idea as green: two consecutive purple blocks—first `swoosh="bottom"`, then `swoosh="top"`—for a purple band with a curve above and below.

**Result:**

{{< swoosh_section background="purple" swoosh="bottom" >}}
### Purple with curve below

First purple block: curve at the bottom.
{{< /swoosh_section >}}
{{< swoosh_section background="purple" swoosh="top" >}}
### Purple with curve above

Second purple block: curve at the top. Together they form one purple band with curves on both sides.
{{< /swoosh_section >}}


## Putting it together

Stack the shortcodes in order to build a full swoosh page. Example flow:

1. White section (intro).
2. Purple section with `swoosh="bottom"`.
3. White section.
4. Purple section with `swoosh="top"` for the curve from above; add another purple block with `swoosh="bottom"` if a section follows.
5. Repeat with `background="green"` where you want green bands.

Each section is full viewport width by default; content inside is centered
in a column (max-width 1280px). Use `layout="docs"` on docs pages for
contained width; see [Swoosh sections](/documentation/swoosh-sections/).
You can put markdown, shortcodes, or raw HTML (including `<div>` wrappers)
inside each `swoosh_section` block. Use angle brackets so the HTML is
output; with percent brackets Goldmark omits it.
