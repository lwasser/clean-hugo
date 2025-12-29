---
title: "Adding Images to Your Content"
date: 2025-12-23
draft: false
excerpt: "Learn the different ways to add images to your Hugo content with the Clean Hugo theme. From standard Markdown syntax to the powerful figure shortcode with automatic WebP support."
category: "Tutorial"
show_author: false
tags:
  - shortcodes
  - images
  - tutorial
  - clean-hugo
image:
  src: "images/unsplash-green-fields.webp"
  alt: "Rolling green hills and fields under blue sky"
---

Images bring your content to life, and the Clean Hugo theme gives you multiple ways to add them to your posts and pages. Whether you need simple inline images or advanced figures with captions and optimized formats, this guide covers everything you need to know.

## Standard Markdown Images

The simplest way to add an image is using standard Markdown syntax:

```markdown
![Alt text describing the image](/images/my-image.jpg)
```

This creates a basic image that's responsive and fits the content width. Always include descriptive alt text for accessibility.

### Example

Here's a simple Markdown image:

![Green rolling hills with a winding path](/images/unsplash-green-fields.webp)

## The Figure Shortcode

For more control over your images, use the `figure` shortcode. It provides several advantages:

- **Automatic WebP support** with PNG/JPG fallback for older browsers
- **Captions** with Markdown formatting support
- **Clickable images** that link to full-size versions
- **Semantic HTML** using the `<figure>` and `<figcaption>` elements

### Basic Usage

Here's the basic syntax for the figure shortcode:

```markdown
{{</* figure 
  src="/images/my-image.png" 
  alt="Description of the image" 
  caption="Optional caption text"
*/>}}
```

### Figure Parameters

The figure shortcode accepts these parameters:

- **`src`** (required) - Path to your image file (PNG, JPG, or GIF)
- **`alt`** (optional) - Alternative text for screen readers and SEO
- **`caption`** (optional) - Caption text displayed below the image (supports Markdown)
- **`link`** (optional) - Custom URL to link to (defaults to the image itself)

### How WebP Works

The figure shortcode automatically creates a WebP version of your image. Here's what happens:

1. You provide a PNG or JPG image path: `/images/photo.png`
2. The shortcode looks for `/images/photo.webp`
3. Modern browsers load the smaller WebP version
4. Older browsers fall back to your original PNG/JPG

**Important:** You need to create the WebP version of your images yourself. The theme doesn't convert them automatically.

### Example with Caption

{{< figure 
  src="/images/unsplash-water.png" 
  alt="Tranquil water surface with reflections" 
  caption="Water images can add a calming aesthetic to your content. This demonstrates the figure shortcode with a caption."
>}}

**Code example:**

```markdown
{{</* figure 
  src="/images/unsplash-water.png" 
  alt="Tranquil water surface with reflections" 
  caption="Water images can add a calming aesthetic to your content."
*/>}}
```

## Image Optimization Tips

To ensure your images load quickly and look great:

### 1. Use Appropriate Formats

- **WebP** - Best compression and quality for modern browsers (use with PNG/JPG fallback)
- **PNG** - For images with transparency or sharp edges
- **JPG** - For photographs and complex images
- **SVG** - For logos, icons, and simple graphics

### 2. Optimize File Size

{{< admonition type="warning" title="Watch Your File Sizes" >}}
Large images slow down your site. Aim for:
- Hero images: < 200KB
- Blog post images: < 150KB  
- Thumbnails: < 50KB
{{< /admonition >}}

Use tools like ImageOptim, Squoosh, or ImageMagick to compress images before adding them to your site.

### 3. Create WebP Versions

You can convert images to WebP using ImageMagick:

```bash
# Convert a single image
magick input.jpg output.webp

# Batch convert all JPGs in a directory
for file in *.jpg; do
  magick "$file" "${file%.jpg}.webp"
done
```

### 4. Store Images in the Right Place

Always place your images in the `static/images/` directory. Hugo will copy them to your published site automatically.

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

Reference them in your content as `/images/photo.jpg` (note the leading slash).

## Choosing Between Markdown and Figure

Use **standard Markdown** when:
- You need a quick, simple image
- No caption is required
- You don't need WebP optimization

Use the **figure shortcode** when:
- You want automatic WebP support
- You need captions with formatting
- You want semantic HTML for better SEO
- You're creating documentation or tutorials

## Accessibility Best Practices

{{< admonition type="info" title="Always Include Alt Text" >}}
Alt text helps screen reader users understand your images and improves SEO. Describe what's in the image, not just repeat the caption.
{{< /admonition >}}

**Good alt text:**
- Describes the content: "Mountain landscape at sunset with purple sky"
- Conveys meaning: "Bar chart showing 50% increase in revenue"
- Is concise: Usually 125 characters or less

**Avoid:**
- "Image of..." or "Picture of..." (redundant)
- Decorative images (use `alt=""` for purely decorative images)
- Repeating the caption word-for-word

## Example: Complete Blog Post Image

Here's everything together - a figure with caption, alt text, and WebP support:

{{< figure 
  src="/images/unsplash-images.png" 
  alt="Abstract colorful pattern demonstrating image capabilities" 
  caption="The figure shortcode makes it easy to add professional-looking images to your content. This example shows how captions can provide additional context while maintaining accessibility."
>}}

**The complete code:**

```markdown
{{</* figure 
  src="/images/unsplash-images.png" 
  alt="Abstract colorful pattern demonstrating image capabilities" 
  caption="The figure shortcode makes it easy to add images to your content."
*/>}}
```

## Next Steps

Now that you know how to add images, you might want to explore:

- Creating [image galleries](/gallery/) for collections
- Using [admonitions](/blog/2024-12-22-using-admonitions-in-clean-hugo/) to highlight important content
- Customizing the theme's colors and styles

Happy image adding! 📸
