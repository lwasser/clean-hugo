---
title: "Schema & Front Matter Reference"
date: 2025-02-06
draft: false
layout: "docs"
weight: 41
excerpt: "All structured data (schema) in one place: when to use each type and how with front matter examples."
header:
  color: "primaryDark"
---

This page documents every **schema type** the theme outputs, **when to use which**, and **how to use it** with front matter examples and what the output looks like. For SEO overview, sitemap, and verification, see [SEO & Social Sharing](/documentation/seo/).

## Quick reference

| Schema | When to use | Trigger |
|--------|-------------|---------|
| **BlogPosting** | Blog posts | Automatic for `content/blog/*` |
| **TechArticle** | Docs, tutorials, handbooks | `tech_article: true` or [cascade](/documentation/seo/#techarticle-per-page-or-whole-path) for path |
| **HowTo** | Step-by-step guides | `howto: true` + `steps` |
| **LearningResource** | Lessons, courses | `learning_resource: true` + optional skill_level, duration, prerequisites |
| **SoftwareApplication** | Reviewed packages (e.g. distinct from PyPI) | `software_application: true` + optional package_name, same_as |
| **VideoObject** | Pages with embedded YouTube | `video_url` or `video_embed_url` |
| **ItemList** | Packages index listing | Automatic on `/packages/` when it has package children |
| **Event** | Workshops, meetups, conferences | `event:` with `start_date` (nested) |
| **BreadcrumbList** | All pages | Automatic (no front matter) |

---

## BlogPosting

**When to use:** Blog posts. No front matter needed—the theme adds it for every page in the `blog` section.

**Front matter:** Use normal blog front matter. Schema uses title, date, lastmod, author, description, image from the page.

```yaml
# content/blog/my-post.md
title: "My Post Title"
date: 2025-02-01
author: "Your Name"
excerpt: "Short description for search and schema."
image:
  src: "images/post-hero.jpg"
  alt: "Description"
```

**What gets output:** JSON-LD `@type: BlogPosting` with headline, url, datePublished, dateModified, author (Person), publisher (Organization), image, description. Helps article rich results in search.

---

## TechArticle

**When to use:** Documentation, tutorials, handbooks, peer-review guides—any page that is technical or educational content.

**Option A – Single page:** Set on the page.

```yaml
tech_article: true
title: "Installing the package"
excerpt: "How to install from PyPI and conda."
```

**Option B – Whole path:** In `hugo.toml`, use [cascade](https://gohugo.io/configuration/cascade/) so every page under a path gets it.

```toml
[[cascade]]
  [cascade.params]
    tech_article = true
  [cascade.target]
    path = "/documentation/**"
```

**What gets output:** JSON-LD `@type: TechArticle` with headline, url, datePublished, dateModified, author, publisher, image, description. Same shape as BlogPosting but for technical content.

---

## HowTo

**When to use:** Step-by-step guides (e.g. “How to install”, “Tutorial: …”).

**Front matter:**

```yaml
howto: true
steps:
  - name: "Install the theme"
    text: "Add the theme as a git submodule or clone into themes."
  - name: "Configure hugo.toml"
    text: "Set theme = \"clean-hugo\" and add baseURL."
  - name: "Run the site"
    text: "Run hugo server to preview."
total_time: "PT5M"   # optional; ISO 8601 (e.g. PT10M = 10 min)
```

**What gets output:** JSON-LD `@type: HowTo` with name, url, step (array of HowToStep with position, name, text), optional totalTime and description. Can show expandable steps in search.

---

## LearningResource

**When to use:** Lessons, tutorials, or any content with an educational focus (skill level, duration, prerequisites).

**Front matter:**

```yaml
learning_resource: true
skill_level: "beginner"        # e.g. beginner, intermediate, advanced
duration: "45 minutes"         # or ISO 8601: PT45M
prerequisites: ["Python basics", "Command line"]
# Optional:
teaches: "Building a Python package"
learning_resource_type: "tutorial"
educational_use: "self study"
```

**What gets output:** JSON-LD `@type: LearningResource` with name, url, description, educationalLevel, timeRequired, competencyRequired (from prerequisites), optional teaches, learningResourceType, educationalUse, author, image.

---

## SoftwareApplication

**When to use:** Package pages (e.g. pyOpenSci reviewed packages) so they are distinct from PyPI in search.

**Front matter:**

```yaml
software_application: true
package_name: "pandas"           # or use title
application_category: "DeveloperApplication"
application_subcategory: "Python package"   # optional
operating_system: "Linux, Windows, macOS"   # optional
software_version: "2.0.0"        # optional
same_as: "https://pypi.org/project/pandas/" # PyPI or repo; string or array
author: "The PyData Development Team"         # optional
offers_free: true               # optional; adds free Offer
```

**What gets output:** JSON-LD `@type: SoftwareApplication` with name, url, description, applicationCategory, optional operatingSystem, softwareVersion, sameAs, author, image, optional offers (free or price). Differentiates your page from PyPI.

**Listing packages:** Create package pages under `content/packages/` (e.g. `pandas.md`). The packages index (`/packages/`) automatically gets **ItemList** JSON-LD listing all children with `software_application: true`.

---

## VideoObject

**When to use:** Pages that embed a YouTube tutorial or other video.

**Front matter:**

```yaml
video_url: "https://www.youtube.com/watch?v=VIDEO_ID"   # or youtu.be/VIDEO_ID
# Or use embed URL directly:
# video_embed_url: "https://www.youtube.com/embed/VIDEO_ID"
video_title: "How to build a Python package"   # optional; defaults to page title
video_description: "..."                       # optional; defaults to page description
video_upload_date: "2024-01-15"                # ISO 8601
video_duration: "PT10M"                         # optional; ISO 8601
video_thumbnail: "https://..."                  # optional; auto from YouTube if video_url used
```

**What gets output:** JSON-LD `@type: VideoObject` with name, embedUrl (from video_url or video_embed_url), url, description, uploadDate, duration, thumbnailUrl (from YouTube if you use video_url). Can enable video rich results in search.

**Embedding the video:** In your content, use an iframe or shortcode. The schema is output in the page `<head>`; the visible player is separate (e.g. `<iframe src="https://www.youtube.com/embed/VIDEO_ID">`).

---

## ItemList (packages)

**When to use:** Automatic. No front matter. The **packages section index** (e.g. `/packages/`) gets ItemList when it has child pages with `software_application: true`.

**What gets output:** JSON-LD `@type: ItemList` with name, numberOfItems, itemListElement (array of ListItem with position, name, url for each package page). Helps “list of packages” in search.

---

## Event

**When to use:** Event pages (workshops, meetups, conferences, webinars).

**Front matter:** Use a single nested `event:` object. Only `start_date` is required.

```yaml
event:
  start_date: "2025-03-15T09:00:00-07:00"   # required; ISO 8601
  end_date: "2025-03-15T17:00:00-07:00"     # optional; for multi-day use end date
  title: "Python Packaging Workshop"        # optional; defaults to page title
  location_name: "Online"
  location_address: "Zoom"                  # optional
  offers_free: true                          # free event; or use price
  # price: "25"                              # if paid; optional price_currency (default USD)
  organizer: "pyOpenSci"                     # optional; defaults to site author
  topic: "Python packaging"                  # optional
  status: "https://schema.org/EventScheduled" # optional
```

**What gets output:** JSON-LD `@type: Event` with name, url, startDate, endDate (if set), location (Place with name and optional address), offers (Offer with price 0 or price), organizer (Organization), description, image, optional eventStatus and about (topic). Can show event date, time, location, and cost in search.

---

## BreadcrumbList

**When to use:** Automatic on every page. No front matter.

**What gets output:** JSON-LD `@type: BreadcrumbList` with itemListElement (Home → section → current page). Shows breadcrumb trail under the result in search.

---

## Organization & Person (site-wide)

**When to use:** Site identity. Set in `hugo.toml` under `[params.social]`.

```toml
[params.social]
  type = "Organization"   # or "Person"
  name = "Your Name"     # for type = "Person"
  github = "https://github.com/yourorg"
  linkedin = "https://..."
```

**What gets output:** One JSON-LD block per page: either `@type: Organization` with name, url, logo, sameAs (from social URLs), or `@type: Person` with name, url, sameAs. No per-page front matter.

---

## Testing your schema

1. **View source:** Right-click page → View Page Source → search for `application/ld+json` to see the script blocks.
2. **Rich Results Test:** [Google Rich Results Test](https://search.google.com/test/rich-results) — paste your live URL or paste the JSON-LD from view source.
3. **Schema validator:** [validator.schema.org](https://validator.schema.org) — paste JSON-LD to validate.

---

## See also

- **[SEO & Social Sharing](/documentation/seo/)** — Canonical URLs, Open Graph, verification, sitemap, robots.txt.
- **[Schema.org](https://schema.org)** — Full property reference for each type.
