---
title: "Clean Hugo Theme"
date: 2025-10-26
draft: false
layout: "splash"
hero:
  title: "Clean Hugo Theme"
  subtitle: "A modern, customizable Hugo theme built with Tailwind CSS & Alpine.js"
  excerpt: "A simple yet beautiful responsive design with customizable colors, and ready-to-use shortcodes for cards, figures, metrics, sections, and more."
  image:
    src: "images/hero-image.svg"
    alt: "Clean Hugo Theme hero illustration"
cards:
  - grid: "md:row-start-1 md:col-start-1"
    modifier: "card--white"
    icon: "fa-solid fa-palette"
    title: "A Clean Accessible Theme "
    text_only: true
  - grid: "md:row-start-1 md:col-start-2"
    modifier: "card--white"
    icon: "fa-solid fa-mobile-screen"
    title: "Responsive Design"
    excerpt: "Built mobile-first with Tailwind CSS. The site looks great on any device—from smartphones to desktop displays."
  - grid: "md:row-start-2 md:col-start-1"
    icon: "fa-solid fa-images"
    title: "Gallery Support"
    excerpt: "Create masonry-style image galleries or grid-style card galleries with built-in filtering and responsive layouts."
  - grid: "md:row-start-2 md:col-start-2"
    icon: "fa-solid fa-blog"
    title: "Modern Blog System"
    excerpt: "Full-featured blog with a beautiful layout, archive section, categories, tags, and customizable layouts. Syntax highlighting, admonitions, and rich formatting are available out of the box."
  - grid: "md:row-start-3 md:col-start-1"
    icon: "fa-solid fa-code"
    title: "Powerful Shortcodes"
    excerpt: "Create dynamic layouts with built-in shortcodes for cards, metrics, sections, and more."
  - grid: "md:row-start-3 md:col-start-2"
    modifier: "card--white"
    icon: "fa-solid fa-bolt"
    title: "Fast & Lightweight"
    excerpt: "Built with performance in mind. Uses system fonts by default with optional Google Fonts support. Minimal JavaScript, maximum speed."

---

{{< impact-cards >}}

{{< section-heading
  title="Theme Features at a Glance"
  subtitle="Everything you need to build a modern website • Simple configuration • Powerful customization"
>}}

{{< metrics-bar
  stat1="**100%** customizable colors"
  stat2="**15+** shortcodes included"
  stat3="**3** layout types"
  stat4="**WCAG AA** accessible"
>}}

{{< two-card-row >}}

{{< card title="Key Features" icon="fa-solid fa-star" >}}

- **Multiple page layouts:** – Splash, blog, gallery, and default
- **Customizable color palette** – All colors configurable via hugo.toml
- **Google Fonts integration** – Or use system fonts for speed
- **Syntax highlighting** – Beautiful code blocks with multiple themes
- **Responsive navigation** – Mobile-friendly menu system
- Coming soon.... **SEO optimized** – Proper meta tags and semantic HTML

{{</ card >}}

{{< card title="Built With" icon="fa-solid fa-wrench" >}}

- **Hugo** – Fast static site generator
- **Tailwind CSS v3** – Modern utility-first CSS framework
- **PostCSS** – For CSS processing and optimization
- **Font Awesome** – Icon support

{{</ card >}}

{{</ two-card-row >}}

{{< single-card-wide title="What You Get with Clean Hugo" icon="fa-solid fa-gift" >}}

**A complete theme ready to customize for your needs:**

- **Flexible content types** – Blog posts, galleries, and custom pages with dedicated layouts for each content type

- **Rich shortcode library** – Pre-built components for cards, hero sections, metrics bars, image galleries, admonitions, and more—all easily customizable

- **Simple configuration** – Control colors, fonts, and features from a single hugo.toml file.


{{</ single-card-wide >}}

{{< blog-list title="Theme Documentation & Examples" limit=3 >}}
