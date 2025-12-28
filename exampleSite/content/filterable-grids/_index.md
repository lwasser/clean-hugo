---
title: "Filterable Grids"
hero:
  title: "Filterable Grids"
  subtitle: "Interactive filtering and search for collections"
  excerpt: "Browse our collections with powerful filtering and search capabilities. Filter by category, search by name, and explore our community."
---

## Overview

The Filterable Grids feature provides an interactive way to browse collections of items (packages, people, etc.) with real-time filtering and search capabilities. This system uses AlpineJS for client-side filtering, making it fast and responsive without page reloads.

## Available Collections

### [Packages](/packages/)

Browse our curated collection of packages with:
- **Category Filtering** - Filter by package category (data processing, visualization, geospatial, etc.)
- **Text Search** - Search by package name, description, or maintainer
- **Active/Archived Sections** - Automatically separated into active and archived packages
- **GitHub Integration** - Direct links to code, documentation, and peer review

### [People](/people/)

Explore our community of contributors with:
- **Role Filtering** - Filter by contributor type (leadership, editorial team, reviewers, maintainers, etc.)
- **Text Search** - Search by name, organization, title, or GitHub username
- **Organized Sections** - Executive council, advisory council, editorial board, and all community members
- **Social Links** - Connect via GitHub, Twitter, ORCID, Mastodon, and personal websites

## How It Works

### Architecture

Both Packages and People use the same underlying architecture:

1. **Data Files** - YAML data files (`data/packages.yml` and `data/contributors.yml`) store all collection items
2. **AlpineJS Components** - Client-side filtering components (`packageFilter()` and `peopleFilter()`) handle filtering logic
3. **Responsive Grids** - CSS Grid layouts that adapt to screen size (3 columns → 2 → 1)
4. **Reusable Styles** - Shared SCSS patterns for filters, grids, and cards

### Key Features

- **No Page Reloads** - All filtering happens client-side for instant results
- **Debounced Search** - Search input is optimized for performance
- **Accessible** - Proper ARIA labels and keyboard navigation
- **Mobile Responsive** - Works seamlessly on all device sizes
- **Consistent Design** - Same visual patterns across all filterable collections

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

- **Filter Styles** - `.packages-filters` and `.people-filters` share identical button/search styles
- **Grid Layouts** - Same responsive CSS Grid pattern (1/2/3 columns)
- **Card Hover Effects** - Consistent `translateY(-4px)` + shadow animation
- **AlpineJS Pattern** - Same component structure (data, methods, computed properties)

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

## Documentation

For detailed technical documentation:

- [Package Filtering Architecture](/blog/2025-12-25-package-architecture/) - Deep dive into the packages implementation
- [Building Package Listing Pages](/blog/2025-12-24-building-package-listing-pages/) - Step-by-step guide

## Customization

### Filter Categories

Filter categories are defined in the filter partials (`layouts/partials/packages/filters.html` and `layouts/partials/people/filters.html`). To add or modify categories:

1. Update the filter buttons in the partial
2. Ensure your data includes the corresponding category/type fields
3. The AlpineJS filter component will automatically handle the new categories

### Styling

All styles use CSS custom properties (CSS variables) defined in `hugo.toml`. To customize colors:

1. Update `[params.theme.colors]` in your `hugo.toml`
2. Colors will automatically apply to all filterable grids
3. Card hover effects and grid layouts can be customized in the respective SCSS files

## Best Practices

1. **Keep Data Clean** - Ensure YAML data files are well-structured and consistent
2. **Reuse Patterns** - When adding new collections, reuse existing SCSS and JS patterns
3. **Test Filtering** - Verify all filter combinations work correctly
4. **Mobile First** - Test on mobile devices to ensure responsive behavior
5. **Accessibility** - Maintain proper ARIA labels and keyboard navigation

