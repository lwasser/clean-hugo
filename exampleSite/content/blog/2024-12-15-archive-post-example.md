---
title: "Archive Post Example"
date: 2024-12-15
draft: false
excerpt: "This is an example of an archived blog post. Archive posts appear in the 'From the Archives' section at the bottom of the blog listing page."
category: "Tutorial"
show_author: false
tags:
  - archive
  - example
---

This is an example of an archived blog post. Posts are automatically moved to the archive section when they meet certain criteria.

## How posts become archived

A blog post becomes an archive post when **both** of these conditions are met:

1. **Date is before the cutoff date** - Currently set to `2025-01-01` in `layouts/blog/list.html`
2. **No featured image** - The post doesn't have an `image` field in its front matter

## Archive post characteristics

- **No featured image** - Archive posts don't display images in listings
- **Simpler layout** - Shown in a grid layout in the "From the Archives" section
- **Still accessible** - Archive posts are fully accessible and can be viewed normally
- **Automatic organization** - No manual work needed, Hugo automatically categorizes them

## Example content

Here's some example content to show how archive posts look:

### Code example

```python
def hello_world():
    print("Hello from the archives!")
    return True
```

### Lists

- Item one
- Item two
- Item three

### Blockquote

> This is a blockquote example in an archive post.

## When to use archive posts

Archive posts are perfect for:
- Older content that's still valuable but doesn't need prominent placement
- Posts without images that you want to keep accessible
- Historical content that's part of your site's timeline
- Tutorials or guides that remain relevant but aren't current

## Customizing archive behavior

To change when posts become archived, edit `layouts/blog/list.html`:

```go
{{ $cutoffDate := time "2025-01-01" }}  // Change this date
```

Posts dated before this cutoff date AND without images will be archived.


