---
title: "Building Filterable Package Listing Pages"
date: 2024-12-24
draft: false
excerpt: "Learn how to create dynamic, filterable package listing pages using Hugo data files and Alpine.js. Perfect for showcasing software packages, plugins, or any collection of items."
category: "Tutorial"
show_author: false
tags:
  - hugo
  - alpine.js
  - data-files
  - tutorial
image: "/images/unsplash-green-fields.webp"
---

The Clean Hugo theme includes a powerful packages feature that lets you create filterable, searchable listings of packages, plugins, or any collection of items. This feature uses Hugo's data files with Alpine.js for lightweight client-side filtering.

## What You Get

The packages feature provides:

- **Category Filtering** - Button-based filtering by package categories
- **Text Search** - Real-time search across package names, descriptions, and maintainers
- **Active/Archived Sections** - Automatic separation of active and archived items
- **Responsive Grid** - Beautiful 3-column grid (desktop) → 2 columns (tablet) → 1 column (mobile)
- **YAML Data** - Easy-to-maintain package data in YAML format
- **Lightweight** - Uses Alpine.js (15kb) instead of heavier libraries

## How It Works

### 1. Data Structure

Package data lives in `data/packages.yml`. Each package requires these fields:

```yaml
- package_name: ExamplePackage
  package_description: A brief description of what the package does
  submitting_author:
    name: Jane Developer
    github_username: janedev
  all_current_maintainers:
    - name: Jane Developer
      github_username: janedev
  repository_link: https://github.com/example/package
  categories:
    - data-processing-munging
    - data-visualization
  issue_link: https://github.com/example/reviews/issues/1
  gh_meta:
    documentation: https://docs.example.com
  joss: https://doi.org/10.21105/joss.example  # Optional
  active: true  # or false for archived packages
```

### 2. Required Files

The feature uses these theme components:

**Layouts:**
- `layouts/packages/list.html` - Main page layout
- `layouts/partials/packages/filters.html` - Search input and category buttons
- `layouts/partials/packages/grid.html` - Responsive grid with Alpine.js

**Styles:**
- `assets/css/_packages.scss` - Complete styling for cards, filters, and grid

**JavaScript:**
- Alpine.js (CDN) - Reactive framework for filtering
- Inline component in `baseof.html` - Handles filter logic

### 3. Creating a Packages Page

Create a section with `_index.md`:

```bash
mkdir -p content/packages
```

Add `content/packages/_index.md`:

```yaml
---
title: "Our Packages"
subtitle: "Explore our collection of peer-reviewed packages"
type: packages
---

Browse our curated collection of packages. Use the filters to find
packages by category or search by name.
```

The `type: packages` tells Hugo to use the packages layout.

### 4. Filter Categories

Update the filter buttons in `layouts/partials/packages/filters.html` to match your categories:

```html
<button @click="activeFilter = 'your-category'"
        :class="{ 'is-checked': activeFilter === 'your-category' }"
        class="packages-filters__button">
  Your Category
</button>
```

### 5. Metrics Bar

The metrics bar at the top automatically calculates:
- Total packages accepted
- Packages published in JOSS (if `joss` field exists)
- Currently active packages

Edit `layouts/packages/list.html` to customize metrics.

## Filtering Logic

### Active Packages
Active packages (where `active: true`) are:
- Filtered by selected category
- Filtered by search query
- Shown with all links: View Code, View Docs, View Review, JOSS badge

### Archived Packages
Archived packages (where `active: false`) are:
- **Never filtered** - always show all archived packages
- Shown with minimal links: View Code + Archived badge only

## Customization

### Styling

Package colors and spacing are in `assets/css/_packages.scss`:

```scss
.package-card {
  @apply bg-white rounded-lg border-t-4 border-primary p-6;
  
  &:hover {
    @apply shadow-xl;
  }
}
```

### Card Content

Modify what displays in each card by editing `layouts/partials/packages/grid.html`:

```html
<h3 class="package-card__title" x-text="pkg.package_name"></h3>
<div class="package-card__description" x-html="pkg.package_description"></div>
```

### Adding Fields

To add new fields to packages:

1. Add to `data/packages.yml`:
   ```yaml
   - package_name: Example
     your_new_field: "value"
   ```

2. Display in `layouts/partials/packages/grid.html`:
   ```html
   <div x-text="pkg.your_new_field"></div>
   ```

## Why Alpine.js?

We chose Alpine.js over alternatives like Isotope.js because:

- **Lightweight**: 15kb vs 60kb+ for other solutions
- **Reactive**: Computed properties automatically update
- **Modern**: Uses native JavaScript features
- **No Build Step**: Works directly with Hugo's templating

## Browser Support

The packages feature uses modern JavaScript (ES6+) and requires:
- Alpine.js 3.x
- Browsers with Proxy support (all modern browsers)
- CSS Grid support (all browsers since 2017)

## Tips

1. **Category Names**: Use hyphens in category names (`data-processing`) to match URL-friendly slugs
2. **Search**: The search looks in package name, description, and maintainer names/usernames
3. **Performance**: With 100+ packages, filtering is still instant thanks to Alpine.js reactivity
4. **GitHub Integration**: Links to maintainer GitHub profiles are automatic from `github_username`

## Example Use Cases

This feature works great for:
- Software package ecosystems (Python, R, JavaScript)
- Plugin marketplaces
- Tool directories
- Resource libraries
- Project portfolios

The YAML format makes it easy to auto-generate package data from APIs or CI/CD pipelines while keeping the filtering fast and lightweight in the browser.
