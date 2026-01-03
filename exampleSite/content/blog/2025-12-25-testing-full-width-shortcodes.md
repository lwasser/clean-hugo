---
title: "Testing Full-Width Shortcodes and Content Width"
date: 2025-12-25
draft: false
excerpt: "This is a test post to verify that blog content is properly constrained for readability while allowing shortcodes to break out to full width."
category: "Tutorial"
show_author: false
tags:
  - testing
  - shortcodes
  - typography
image:
  src: "images/unsplash-green-fields.webp"
  alt: "Lush green agricultural fields"
  credit: "Photo by Unsplash"
---

## Introduction

This blog post tests the new content width constraints and full-width shortcode functionality. Regular text content should be constrained to a readable width (max-w-4xl), while certain shortcodes should automatically break out to full viewport width.

## Regular content section

This is regular paragraph text that should be constrained to a readable width. The text should not stretch across the entire screen, making it easier to read on large displays. This is especially important for long-form content where readability is key.

### Subsection with lists

Here's a list of items to test list styling:

- First item in the list
- Second item with some longer text to see how it wraps within the constrained width
- Third item
- Fourth item to ensure proper spacing

And here's a numbered list:

1. First numbered item
2. Second numbered item
3. Third numbered item

## Metrics bar shortcode (full-width)

The metrics bar shortcode below should automatically break out to full width, even though it's inside the constrained content area:

{{< metrics-bar
  stat1="**150+** Packages Accepted"
  stat2="**45** Published in JOSS"
  stat3="**120** Currently Active"
  stat4="**85** Unique Maintainers"
>}}

**Code example:**

```markdown
{{</* metrics-bar
  stat1="**150+** Packages Accepted"
  stat2="**45** Published in JOSS"
  stat3="**120** Currently Active"
  stat4="**85** Unique Maintainers"
*/>}}
```

## More regular content

After the metrics bar, regular text content should return to the constrained width. This allows for a nice visual rhythm where full-width elements create visual breaks while maintaining readability for text content.

### Code example

Here's some inline code: `const example = "test"` and a code block:

```python
def hello_world():
    print("Hello, World!")
    return True
```

**Code example:**

````markdown
```python
def hello_world():
    print("Hello, World!")
    return True
```
````

## Image section

The image below should be constrained to the content width (not full-width). Images within regular content should respect the readable width. The figure shortcode automatically supports webp format:

{{< figure src="/images/unsplash-green-fields.png" alt="Green Fields" caption="A beautiful green field landscape" >}}

This is text that follows the image, also constrained to the readable width.

**Code example:**

```markdown
{{</* figure src="/images/your-image.png" alt="Alt text" caption="Optional caption" */>}}
```

The figure shortcode automatically:
- Generates a webp version (replaces .png/.jpg with .webp)
- Uses the webp version if available, falls back to original format
- Supports optional caption
- Links to the full-size image when clicked

## YouTube video (full-width)

The YouTube video shortcode below should automatically break out to full width. This is a PyOpenSci lightning talk from SciPy 2023:

{{< youtube id="XAq-HnPU4XM" >}}

**Code example:**

```markdown
{{</* youtube id="XAq-HnPU4XM" */>}}
```

Or explicitly set full-width:

```markdown
{{</* youtube id="XAq-HnPU4XM" full="true" */>}}
```

## Constrained YouTube video

This YouTube video should stay within the content width (not full-width). Use `full="false"` to constrain it:

{{< youtube id="XAq-HnPU4XM" full="false" >}}

**Code example:**

```markdown
{{</* youtube id="XAq-HnPU4XM" full="false" */>}}
```

## Final thoughts

After the YouTube video, this text should again be constrained to the readable width. This creates a nice visual pattern where:

- Regular text and images stay within readable bounds
- Full-width shortcodes (metrics, videos, highlight sections) break out for visual impact
- The layout maintains readability while allowing for impactful full-width elements

**Other full-width shortcodes:**

```markdown
{{</* blog-highlight title="Recent Posts" limit="3" */>}}
```

```markdown
{{</* single-card-wide title="Card Title" icon="fa-icon" */>}}
Content goes here
{{</* /single-card-wide */>}}
```

```markdown
{{</* two-card-row */>}}
  {{</* card title="Card 1" icon="fa-icon" */>}}
  Content for card 1
  {{</* /card */>}}
  {{</* card title="Card 2" icon="fa-icon" */>}}
  Content for card 2
  {{</* /card */>}}
{{</* /two-card-row */>}}
```

### Conclusion

The content width system should provide:
1. **Readability** - Text is constrained to optimal reading width
2. **Flexibility** - Shortcodes can opt-in to full width automatically
3. **Consistency** - All regular content follows the same width constraints

