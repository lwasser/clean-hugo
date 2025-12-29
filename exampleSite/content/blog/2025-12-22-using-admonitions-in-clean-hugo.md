---
title: "Using Admonitions in Clean Hugo Theme"
date: 2025-12-22
draft: false
excerpt: "Learn how to use the admonition shortcode to add beautiful callout boxes to your Hugo content. This post demonstrates all five admonition types with code examples."
category: "Tutorial"
show_author: false
tags:
  - shortcodes
  - tutorial
  - clean-hugo
image:
  src: "images/unsplash-water.webp"
  alt: "Calm water surface with ripples and reflections"
  credit: "Photo by Unsplash"
---

The Clean Hugo theme includes a powerful admonition shortcode that lets you create beautiful, color-coded callout boxes in your content. Perfect for highlighting important information, warnings, tips, and more!

## What Are Admonitions?

Admonitions are visual callout boxes that draw attention to specific types of content. They're commonly used in documentation and tutorials to highlight:

- **Info** - General information or tips
- **Success** - Positive outcomes or achievements
- **Warning** - Cautions or important notices
- **Danger** - Critical warnings or errors
- **Note** - Additional context or side notes

## Basic Usage

The admonition shortcode is simple to use. Here's the basic syntax:

```markdown
{{</* admonition type="info" title="Optional Title" */>}}
Your content here
{{</* /admonition */>}}
```

## All Admonition Types

Let's see each type in action:

### Info Admonition

Use info admonitions for general tips, helpful information, or useful context.

{{< admonition type="info" title="Pro Tip" >}}
You can customize admonition colors by adding them to your `hugo.toml` configuration file under `[params.theme.colors]`. All colors are defined as CSS variables, making them easy to override.
{{< /admonition >}}

**Code example:**

```markdown
{{</* admonition type="info" title="Pro Tip" */>}}
You can customize admonition colors by adding them to your hugo.toml configuration file.
{{</* admonition */>}}
```

### Success Admonition

Success admonitions are perfect for highlighting achievements, completed tasks, or positive outcomes.

{{< admonition type="success" title="Installation Complete!" >}}
Great! Your Clean Hugo theme is now installed and ready to use. You can start creating content and customizing your site's appearance.
{{< /admonition >}}

**Code example:**

```markdown
{{</* admonition type="success" title="Installation Complete!" */>}}
Great! Your Clean Hugo theme is now installed and ready to use.
{{</* /admonition */>}}
```

### Warning Admonition

Use warning admonitions to alert readers about potential issues or important cautions.

{{< admonition type="warning" title="Important Notice" >}}
Make sure to run `npm install` in your site directory before building. The theme requires PostCSS and Tailwind CSS to process styles correctly.
{{< /admonition >}}

**Code example:**

```markdown
{{</* admonition type="warning" title="Important Notice" */>}}
Make sure to run `npm install` before building your site.
{{</* /admonition */>}}
```

### Danger Admonition

Danger admonitions should be used sparingly for critical warnings or potential data loss scenarios.

{{< admonition type="danger" title="Data Loss Warning" >}}
**Warning:** Running `hugo --cleanDestinationDir` will permanently delete all files in your output directory. Make sure you have backups before proceeding!
{{< /admonition >}}

**Code example:**

```markdown
{{</* admonition type="danger" title="Data Loss Warning" */>}}
**Warning:** This action cannot be undone. Make sure you have backups!
{{</* /admonition */>}}
```

### Note Admonition

Note admonitions are great for additional context, side notes, or supplementary information.

{{< admonition type="note" >}}
The default admonition type is "note" if you don't specify a type. You can also omit the title if you don't need one.
{{< /admonition >}}

**Code example:**

```markdown
{{</* admonition type="note" */>}}
The default admonition type is "note" if you don't specify a type.
{{</* /admonition */>}}
```

## Advanced Usage

### Without a Title

You can omit the title parameter if you don't need one:

{{< admonition type="info" >}}
This is an info admonition without a title. Sometimes a title isn't necessary!
{{< /admonition >}}

```markdown
{{</* admonition type="info" */>}}
This is an info admonition without a title.
{{</* /admonition */>}}
```

### With Markdown Content

Admonitions support full Markdown syntax, including:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Lists
- Code blocks

{{< admonition type="success" title="Markdown Support" >}}
You can use **bold**, *italic*, [links](https://example.com), and even code `inline` within admonitions.

- Bullet points work too
- As do numbered lists
- And code blocks
{{< /admonition >}}

## Code Examples in Different Languages

Here are some examples showing how code blocks work with syntax highlighting:

### Python Example

```python
def create_admonition(admonition_type, title=None, content=""):
    """Create an admonition shortcode string."""
    title_part = f' title="{title}"' if title else ""
    return f'{{{{</* admonition type="{admonition_type}"{title_part} */>}}}}\n{content}\n{{{{</* /admonition */>}}}}'

# Usage
info_box = create_admonition("info", "Pro Tip", "This is helpful information!")
print(info_box)
```

### Bash/Shell Example

```bash
#!/bin/bash
# Script to generate Hugo admonition examples

echo "Creating admonition examples..."

cat > example.md << EOF
{{</* admonition type="warning" title="Important" */>}}
Make sure to backup your files before running this script!
{{</* /admonition */>}}
EOF

echo "Example file created!"
```

### Console Output Example

```console
$ hugo new blog/my-post.md
Creating new blog post: content/blog/my-post.md

$ hugo server
Start building sites …
Built in 234 ms
Web Server is available at http://localhost:1313/
```

### Markdown Example

```markdown
# Blog Post Title

Here's how to use admonitions in your content:

{{</* admonition type="info" title="Remember" */>}}
Always escape shortcodes in code blocks using `{{</* */>}}` syntax.
{{</* /admonition */>}}

## More Content

Your regular content goes here...
```

## Customizing Colors

All admonition colors can be customized in your `hugo.toml` file. Here's an example configuration:

```toml
[params.theme.colors]
  # Info colors (blue)
  admonitionInfoBg = "#EFF6FF"
  admonitionInfoBorder = "#3B82F6"
  admonitionInfoText = "#1E40AF"
  admonitionInfoIcon = "#2563EB"
  
  # Success colors (green)
  admonitionSuccessBg = "#F0FDF4"
  admonitionSuccessBorder = "#22C55E"
  admonitionSuccessText = "#166534"
  admonitionSuccessIcon = "#16A34A"
  
  # ... and so on for other types
```

## Blog Post Front Matter Configuration

Every blog post in Clean Hugo uses front matter (the YAML or TOML section at the top of the file) to configure how the post appears on your site. Here's a complete guide to all available front matter options:

### Required Fields

**`title`** - The title of your blog post
```yaml
title: "My Amazing Blog Post"
```

**`date`** - Publication date in `YYYY-MM-DD` format (controls sorting - most recent first)
```yaml
date: 2024-12-22
```

### Optional Fields

**`draft`** - Set to `true` to hide the post from listings (default: `false`)
```yaml
draft: false
```

**`excerpt`** - Short summary displayed in blog listings and meta descriptions
```yaml
excerpt: "A brief description of what this post is about."
```
{{< admonition type="info" >}}
If you don't provide an excerpt, Hugo will automatically generate one from the first few sentences of your post content.
{{< /admonition >}}

**`image`** - Featured image with alt text and optional photo credit (nested format)
```yaml
image:
  src: "images/my-featured-image.jpg"
  alt: "Description of the image for accessibility"
  credit: "Photo by Jane Doe on Unsplash"  # optional
```
{{< admonition type="note" >}}
Images should be placed in your `static/images/` directory. Both `src` and `alt` are required for accessibility and SEO. The `credit` field is optional and displays as a photo credit on the blog post header.
{{< /admonition >}}

**`category`** - Single category for organizing posts (used for filtering on blog listing page)
```yaml
category: "Tutorial"
```
{{< admonition type="success" title="Category Filtering" >}}
Categories automatically appear as filter buttons on your blog listing page, making it easy for readers to find related content!
{{< /admonition >}}

**`tags`** - Array of tags for additional organization (displayed at bottom of single post)
```yaml
tags:
  - hugo
  - tutorial
  - web-development
```

**`show_author`** - Set to `true` to display author name in listings (default: `false`)
```yaml
show_author: false
```

**`hideDate`** - Set to `true` to hide the publication date on the single post page
```yaml
hideDate: false
```

### Complete Front Matter Example

Here's a complete example showing all available front matter options:

```yaml
---
title: "Getting Started with Clean Hugo Theme"
date: 2024-12-22
draft: false
excerpt: "Learn how to set up and customize the Clean Hugo theme for your website."
image:
  src: "images/hero-image.jpg"
  alt: "Modern workspace with laptop and coffee"
  credit: "Photo by Jane Smith on Unsplash"
category: "Tutorial"
show_author: false
hideDate: false
tags:
  - hugo
  - theme
  - web-development
  - tutorial
---
```

### How Front Matter Affects Display

**Blog Listing Page:**
- **Featured Post** - The most recent post (by date) appears as a large featured card
- **Sidebar Posts** - Next 2 posts (configurable via `sidebar_count` in `hugo.toml`) appear in the sidebar
- **Remaining Posts** - All other posts appear in a grid below
- **Category Filters** - Buttons automatically generated from unique categories
- **Post Cards** - Display title, excerpt, category, date, and featured image

**Single Post Page:**
- **Hero Section** - Shows featured image (if provided) as header
- **Title** - Displayed prominently at the top
- **Date** - Shown below title (unless `hideDate: true`)
- **Author** - Shown if `show_author: true`
- **Content** - Full post content with proper typography
- **Tags** - Displayed at the bottom of the post

### Front Matter Best Practices

{{< admonition type="info" title="Pro Tips" >}}
1. **Always include an excerpt** - Helps with SEO and makes your listings more engaging
2. **Use consistent categories** - Stick to a limited set of categories for better filtering
3. **Add relevant tags** - Tags help with discoverability and internal linking
4. **Optimize images** - Use compressed images for faster page loads
5. **Set draft status** - Use `draft: true` while writing, then change to `false` when ready to publish
{{< /admonition >}}

### Configuration Options in hugo.toml

You can customize blog listing behavior in your site's `hugo.toml`:

```toml
[params.blog]
  sidebar_count = 2      # Number of posts shown in sidebar (right column)
  excerpt_length = 200   # Character length for excerpts in featured card

[params]
  blog_title = "My Blog"  # Title shown at top of blog listing page
```

## Best Practices

1. **Use sparingly** - Too many admonitions can overwhelm readers
2. **Choose the right type** - Match the admonition type to the content's importance
3. **Keep titles concise** - Short, descriptive titles work best
4. **Use markdown** - Take advantage of formatting options within admonitions
5. **Test accessibility** - Ensure color contrast meets WCAG standards

## Conclusion

Admonitions are a powerful way to make your content more engaging and easier to scan. The Clean Hugo theme makes it easy to add these beautiful callout boxes to any page or post.

Try adding some admonitions to your next blog post and see how they can improve your content's readability!

