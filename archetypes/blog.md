---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
excerpt: ""
# JSON-LD: BlogPosting is output automatically for content in the blog section.
# Optional for richer snippets: author (string), image (src/alt), description (or use excerpt).
# author: "Your Name"
# image:
#   src: "images/your-image.webp"
#   alt: "Description for accessibility"
---
