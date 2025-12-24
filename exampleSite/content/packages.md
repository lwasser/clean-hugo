---
title: "Example Package Listing"
subtitle: "Demonstrating the packages feature with sample data"
layout: packages
type: packages
---

This page demonstrates how to display a filterable, searchable grid of packages using data from a YAML file. The packages feature uses AlpineJS for lightweight client-side filtering and Hugo templates for server-side rendering.

## Features

- **Category Filtering** - Click buttons to filter by package category
- **Text Search** - Search by package name, description, or maintainer
- **Active/Archived Sections** - Automatically separated into active and archived packages
- **Responsive Grid** - 3 columns on desktop, 2 on tablet, 1 on mobile
- **GitHub Integration** - Links to code, docs, and peer review

## Usage

To use this on your site, add your package data to `data/packages.yml` and create a page with `type: packages` in the front matter.
