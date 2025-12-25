---
title: "Package Filtering Architecture"
date: 2025-12-25
author: "Clean Hugo Theme"
categories: ["documentation", "architecture"]
tags: ["packages", "javascript", "architecture"]
excerpt: "Complete technical documentation for the package filtering system architecture, including AlpineJS integration, data flow, and maintenance guidelines."
---

This document provides technical documentation for the package filtering system used on the  "our-packages" page.

## Overview

The package listing page uses a **client-side filtering system** built with AlpineJS to provide instant search and category filtering without page reloads.

## Data Flow

1. Hugo reads `packages.yml` at build time
2. Package data is injected into AlpineJS via `initPackages({{ .Site.Data.packages | jsonify }})`
3. AlpineJS manages filtering state and reactive rendering
4. JavaScript file handles filter logic
5. HTML templates display filtered results

## File Structure

```text
├── data/packages.yml                        # Package data (YAML)
├── layouts/packages/list.html               # Main page template
├── layouts/partials/packages/grid.html      # Grid with AlpineJS card templates
├── layouts/partials/packages/filters.html   # Filter buttons and search input
├── layouts/partners/single.html             # Static partner pages (no filtering)
└── static/js/package-filter.js              # AlpineJS filter component logic
```

## AlpineJS Integration

The page uses these key AlpineJS directives:

- `x-data="packageFilter()"` - Creates reactive component instance
- `x-init="initPackages(...)"` - Loads package data from Hugo into Alpine
- `x-for="pkg in activePackages"` - Loops through filtered packages
- `x-text`, `x-html`, `:href` - Binds package data to DOM
- `x-model="searchQuery"` - Two-way binding for search input
- `@click="activeFilter = '*'"` - Updates filter state

## Filtering Logic (package-filter.js)

### Component State

- `packages: []` - All packages loaded from Hugo
- `searchQuery: ''` - Current search text
- `activeFilter: '*'` - Current category filter ('*' = show all)

### Computed Properties

- `activePackages` - Returns filtered active packages
- `archivedPackages` - Returns all archived packages (never filtered)

### Filter Methods

The `filterPackages(activeOnly)` method:

1. Filters by active/archived status
2. Filters by category if `activeFilter !== '*'`
3. Filters by search query (name, description, maintainer)
4. Returns filtered array

## Grid Rendering

### Structure

```html
<div class="packages-grid">           <!-- CSS Grid container -->
  <template x-for="pkg in ...">       <!-- AlpineJS loop -->
    <div class="package_card">        <!-- Card markup (70+ lines) -->
      <!-- Uses AlpineJS directives (x-text, x-html, :href) -->
      <!-- Conditionally shows links based on package data -->
    </div>
  </template>
</div>
```

**Key Point:** Card HTML is INSIDE the AlpineJS template, not a separate partial, because Hugo partials cannot be called from client-side JavaScript.

## Card Markup Architecture

Package cards exist in **two places** due to the nature of AlpineJS:

### A) layouts/partials/packages/grid.html (AlpineJS version)

- Uses `x-text`, `x-html`, `:href` for data binding
- Renders client-side
- Used on filterable pages (main packages list)

### B) layouts/partners/single.html (Hugo version)

- Uses `{{ .field }}` Hugo template syntax
- Renders server-side at build time
- Used on static partner pages (no filtering needed)

### Why the Duplication?

- Hugo partials are processed at **BUILD time** (server-side)
- AlpineJS templates execute at **RUN time** (client-side)
- Cannot call Hugo partials from inside `<template x-for>`
- Trade-off: Accept duplication for simplicity vs. complex Web Components

⚠️ **Important:** If you update card markup, remember to update BOTH locations!

## Styling (_packages.scss)

### Key Classes

- `.packages-page__controls` - Filter/search container
- `.packages-page__partner-nav` - Partner button section
- `.packages-filters` - Filter buttons styling
- `.packages-grid` - CSS Grid layout (3/2/1 columns)
- `.package_card` - Individual card styling
- `.package_card__meta` - Maintainer info
- `.package_card__archived` - Archived badge styling
- `.partner-badge` - Astropy badge image styling
- `.partner-button` - Partner navigation button

## Adding New Packages

To add a new package:

1. Add entry to `data/packages.yml` with all required fields
2. Set `active: true` or `false`
3. Add `categories` (must match filter buttons)
4. Optionally add `partners: ["astropy"]` for partner affiliation
5. Hugo will rebuild and AlpineJS will automatically include it

### Example Package Entry

```yaml
- package_name: MyPackage
  package_description: A description of the package
  submitting_author:
    name: Jane Developer
    github_username: janedev
  all_current_maintainers:
    - name: Jane Developer
      github_username: janedev
  repository_link: https://github.com/example/mypackage
  categories:
    - data-processing-munging
    - geospatial
  partners:
    - astropy
  active: true
  gh_meta:
    name: MyPackage
    description: Package description
    stargazers_count: 42
    documentation: https://mypackage.readthedocs.io
```

## Adding New Filter Categories

To add a new category filter:

1. Add button to `layouts/partials/packages/filters.html`
2. Use format: `@click="activeFilter = 'category-name'"`
3. Ensure packages in `packages.yml` use matching category name
4. No JavaScript changes needed - filter logic is generic

### Example Filter Button

```html
<button @click="activeFilter = 'machine-learning'"
        :class="{ 'is-checked': activeFilter === 'machine-learning' }">
  machine learning
</button>
```

## Performance Considerations

- All packages loaded on page load (~340 items = ~500KB JSON)
- Filtering happens in browser (instant, no network requests)
- Good for < 1000 packages
- For larger datasets, consider:
  - Pagination
  - Server-side filtering
  - Lazy loading
  - Search indexes

## Debugging Tips

### Browser Console Commands

```javascript
Alpine.version           // Check AlpineJS is loaded
$el.__x.$data           // Inspect Alpine component state
packages                // View loaded package data
activeFilter            // See current filter
searchQuery             // See current search
```

### Common Issues

| Issue | Solution |
|-------|----------|
| "packageFilter is not defined" | `package-filter.js` not loaded |
| Cards not filtering | Check `x-data` on parent div |
| Search not working | Check `x-model` on input |
| Cards not rendering | Check packages data in console |

## Future Enhancements

Potential improvements:

- **URL Query Params** - `?category=geospatial&search=data`
- **Sort Options** - By stars, recent updates, alphabetical
- **Maintainer Filter** - Filter by specific maintainer
- **Last Updated Filter** - Show recently updated packages
- **Export Results** - Download filtered list as JSON/CSV
- **Bookmarking** - Share filtered views via URL
- **Multi-select Categories** - Select multiple categories at once
- **Advanced Search** - Boolean operators, field-specific search
- **Package Comparison** - Compare multiple packages side-by-side

## Architecture Decision Records

### Why AlpineJS?

- Lightweight (~15KB gzipped)
- Declarative syntax similar to Vue.js
- No build step required
- Works well with Hugo's server-side rendering
- Easy to learn for theme users

### Why Client-Side Filtering?

- Instant filtering with no page reloads
- Better user experience
- Reduced server load
- Package count is manageable (<1000)
- No backend infrastructure needed

### Why Duplicate Card Markup?

**Alternative Considered:** Web Components

**Decision:** Accept duplication

**Rationale:**
- Web Components add significant complexity
- Requires JavaScript class definitions, Shadow DOM
- Higher learning curve for theme users
- Harder to debug and maintain
- Two copies is acceptable for ~70 lines of markup
- Card structure is relatively stable

### Why YAML for Package Data?

- Human-readable and editable
- Supports structured data (nested objects, arrays)
- No database required
- Version controlled with site code
- Hugo has excellent YAML support

## Maintenance Guidelines

### When Updating Card Markup

1. Update `layouts/partials/packages/grid.html` (AlpineJS version)
2. Update `layouts/partners/single.html` (Hugo version)
3. Test both the main packages page AND partner pages
4. Verify filtering still works
5. Check responsive layout on mobile

### When Adding New Fields to packages.yml

1. Update all existing packages with new field (or make it optional)
2. Update card markup in both locations
3. Update this documentation
4. Consider if field should be searchable/filterable

### Testing Checklist

- [ ] All categories filter correctly
- [ ] Search works for name, description, maintainer
- [ ] Partner badges display on correct packages
- [ ] Archived packages show separately
- [ ] Responsive design works on mobile
- [ ] No console errors
- [ ] Metrics bar calculates correctly
- [ ] Links open in correct target

## Related Documentation

- [Theme Color Reference Guide](/blog/2025-12-25-theme-color-reference/) - Theme colors and customization
- [AlpineJS Documentation](https://alpinejs.dev/) - Official AlpineJS docs
- [Hugo Data Files](https://gohugo.io/templates/data-templates/) - Hugo data templates
