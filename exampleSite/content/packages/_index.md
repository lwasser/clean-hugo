---
title: "Package Ecosystem"
type: packages
hero:
  title: "Package Ecosystem"
  subtitle: "Peer-reviewed packages for data science"
  excerpt: "Browse our curated collection of packages. Use filters to find packages by category or search by name."
---

## Features

- **Category Filtering** - Click buttons to filter by package category
- **Text Search** - Search by package name, description, or maintainer
- **Active/Archived Sections** - Automatically separated into active and archived packages
- **Responsive Grid** - 3 columns on desktop, 2 on tablet, 1 on mobile
- **GitHub Integration** - Links to code, docs, and peer review

## Usage

To use this on your site, add your package data to `data/packages.yml` and create a page with `type: packages` in the front matter.

You can customize the metrics bar below as you wish. 

```markdown 
{{</* metrics-bar
  stat1="**5** Packages Accepted"
  stat2="**2** Published in JOSS"
  stat3="**4** Currently Active"
*/>}}

```


{{< metrics-bar
  stat1="**5** Packages Accepted"
  stat2="**2** Published in JOSS"
  stat3="**4** Currently Active"
>}}

Here is what is left - we 
