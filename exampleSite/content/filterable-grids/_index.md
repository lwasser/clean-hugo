---
title: "Filterable Card Layouts"
hero:
  title: "Filterable Card Layouts"
  subtitle: "Interactive filtering and search for card collections"
  excerpt: "Filtering is driven by Alpine.js. The layout for these pages is vanilla css and the data come from yaml files stored in the hugo data folder.."
  color: "#b57195"
layout: single
---

## Overview

The Filterable Grids feature provides an interactive way to browse collections of items (packages, people, etc.) with real-time filtering and search capabilities. This system uses AlpineJS for client-side filtering, making it fast and responsive without page reloads.

## Available Collections

### [Packages](/packages/)

Browse our curated collection of packages with:

* **Category Filtering:** Filter by package category (data processing, visualization, geospatial, etc.)
* **Text Search:** Search by package name, description, or maintainer
* **Active/Archived Sections:** Automatically separated into active and archived packages
* **GitHub Integration:** Direct links to code, documentation, and peer review

### [People](/people/)

Explore our community of contributors with:

* **Role Filtering:** Filter by contributor type (leadership, editorial team, reviewers, maintainers, etc.)
* **Text Search:** Search by name, organization, title, or GitHub username
* **Organized Sections:** Executive council, advisory council, editorial board, and all community members
* **Social Links:** Connect via GitHub, Twitter, ORCID, Mastodon, and personal websites

## What You Get

The filterable grids feature provides:

* **Category Filtering:** Button-based filtering by package categories
* **Text Search:** Real-time search across package names, descriptions, and maintainers
* **Active/Archived Sections:** Automatic separation of active and archived items
* **Responsive Grid:** Beautiful 3-column grid (desktop) → 2 columns (tablet) → 1 column (mobile)
* **YAML Data:** Easy-to-maintain package data in YAML format
* **Lightweight:** Uses Alpine.js (15kb) instead of heavier libraries
* **No Page Reloads:** All filtering happens client-side for instant results
* **Debounced Search:** Search input is optimized for performance
* **Accessible:** Proper ARIA labels and keyboard navigation
* **Mobile Responsive:** Works seamlessly on all device sizes
* **Consistent Design:** Same visual patterns across all filterable collections

## How It Works

### Architecture

Both Packages and People use the same underlying architecture:

1. **Data Files** - YAML data files (`data/packages.yml` and `data/contributors.yml`) store all collection items
2. **AlpineJS Components** - Client-side filtering components (`packageFilter()` and `peopleFilter()`) handle filtering logic
3. **Responsive Grids** - CSS Grid layouts that adapt to screen size (3 columns → 2 → 1)
4. **Reusable Styles** - Shared SCSS patterns for filters, grids, and cards

### Data Structure

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

People/contributor data lives in `data/contributors.yml`. Each person requires:

```yaml
- name: Jane Smith
  github_username: janesmith
  github_image_id: 12345678
  title: Executive Director
  sort: 1
  organization: Example Organization
  board: true
  advisory: false
  contributor_type:
    - leadership
    - maintainer
```

### Filtering Logic

**Active Packages:**
Active packages (where `active: true`) are:
* Filtered by selected category
* Filtered by search query
* Shown with all links: View Code, View Docs, View Review, JOSS badge

**Archived Packages:**
Archived packages (where `active: false`) are:
* **Never filtered** - always show all archived packages
* Shown with minimal links: View Code + Archived badge only

## Step-by-Step Implementation Guide

### 1. Create a Packages Page

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

### 2. Required Files

The feature uses these theme components:

**Layouts:**
* `layouts/packages/list.html` - Main page layout
* `layouts/partials/packages/filters.html` - Search input and category buttons
* `layouts/partials/packages/grid.html` - Responsive grid with Alpine.js

**Styles:**
* `assets/css/_packages.scss` - Complete styling for cards, filters, and grid

**JavaScript:**
* Alpine.js (CDN) - Reactive framework for filtering
* `static/js/package-filter.js` - Filter component logic

### 3. Filter Categories

Update the filter buttons in `layouts/partials/packages/filters.html` to match your categories:

```html
<button @click="activeFilter = 'your-category'"
        :class="{ 'is-checked': activeFilter === 'your-category' }"
        class="packages-filters__button">
  Your Category
</button>
```

### 4. Metrics Bar

The metrics bar at the top automatically calculates:
* Total packages accepted
* Packages published in JOSS (if `joss` field exists)
* Currently active packages

Edit `layouts/packages/list.html` to customize metrics.

## Implementation Details

### For Developers

#### Adding a New Filterable Collection

1. **Create Data File** - Add a YAML file in `data/` (e.g., `data/mycollection.yml`)
2. **Create Filter Component** - Add a new AlpineJS component in `static/js/` (e.g., `mycollection-filter.js`)
3. **Create Styles** - Add SCSS file in `assets/css/` (e.g., `_mycollection.scss`) reusing patterns from `_packages.scss`
4. **Create Partials** - Add filter, grid, and card partials in `layouts/partials/mycollection/`
5. **Create List Template** - Add `layouts/mycollection/list.html` template
6. **Create Content Page** - Add content page with `type: mycollection` in front matter

#### Code Reuse

The system is designed for maximum code reuse:

* **Filter Styles:** `.packages-filters` and `.people-filters` share identical button/search styles
* **Grid Layouts:** Same responsive CSS Grid pattern (1/2/3 columns)
* **Card Hover Effects:** Consistent `translateY(-4px)` + shadow animation
* **AlpineJS Pattern:** Same component structure (data, methods, computed properties)

#### File Structure

```
clean-hugo/
├── static/js/
│   ├── package-filter.js    # Packages filtering logic
│   └── people-filter.js     # People filtering logic
├── assets/css/
│   ├── _packages.scss       # Package styles
│   └── _people.scss         # People styles (reuses patterns)
├── layouts/
│   ├── packages/
│   │   └── list.html        # Packages page template
│   ├── people/
│   │   └── list.html        # People page template
│   └── partials/
│       ├── packages/         # Package partials
│       └── people/           # People partials
└── data/
    ├── packages.yml          # Package data
    └── contributors.yml      # People data
```

### Customization

#### Filter Categories

Filter categories are defined in the filter partials (`layouts/partials/packages/filters.html` and `layouts/partials/people/filters.html`). To add or modify categories:

1. Update the filter buttons in the partial
2. Ensure your data includes the corresponding category/type fields
3. The AlpineJS filter component will automatically handle the new categories

#### Styling

All styles use CSS custom properties (CSS variables) defined in `hugo.toml`. To customize colors:

1. Update `[params.theme.colors]` in your `hugo.toml`
2. Colors will automatically apply to all filterable grids
3. Card hover effects and grid layouts can be customized in the respective SCSS files

Package colors and spacing are in `assets/css/_packages.scss`:

```scss
.package-card {
  @apply bg-white rounded-lg border-t-4 border-primary p-6;
  
  &:hover {
    @apply shadow-xl;
  }
}
```

#### Card Content

Modify what displays in each card by editing `layouts/partials/packages/grid.html`:

```html
<h3 class="package-card__title" x-text="pkg.package_name"></h3>
<div class="package-card__description" x-html="pkg.package_description"></div>
```

#### Adding Fields

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

* **Lightweight:** 15kb vs 60kb+ for other solutions
* **Reactive:** Computed properties automatically update
* **Modern:** Uses native JavaScript features
* **No Build Step:** Works directly with Hugo's templating

## Browser Support

The filterable grids feature uses modern JavaScript (ES6+) and requires:

* Alpine.js 3.x
* Browsers with Proxy support (all modern browsers)
* CSS Grid support (all browsers since 2017)

## Tips

1. **Category Names:** Use hyphens in category names (`data-processing`) to match URL-friendly slugs
2. **Search:** The search looks in package name, description, and maintainer names/usernames
3. **Performance:** With 100+ packages, filtering is still instant thanks to Alpine.js reactivity
4. **GitHub Integration:** Links to maintainer GitHub profiles are automatic from `github_username`
5. **Sort Values:** Use numeric `sort` fields (1, 2, 3...) to control display order. Default is 9 if not specified.

## Example Use Cases

This feature works great for:

* Software package ecosystems (Python, R, JavaScript)
* Plugin marketplaces
* Tool directories
* Resource libraries
* Project portfolios
* Community member directories

The YAML format makes it easy to auto-generate package data from APIs or CI/CD pipelines while keeping the filtering fast and lightweight in the browser.

## Best Practices

1. **Keep Data Clean** - Ensure YAML data files are well-structured and consistent
2. **Reuse Patterns** - When adding new collections, reuse existing SCSS and JS patterns
3. **Test Filtering** - Verify all filter combinations work correctly
4. **Mobile First** - Test on mobile devices to ensure responsive behavior
5. **Accessibility** - Maintain proper ARIA labels and keyboard navigation

## Documentation

For detailed technical documentation:

* [Package Filtering Architecture](/blog/2025-12-25-package-architecture/) - Deep dive into the packages implementation
