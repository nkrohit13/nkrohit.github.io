# Nirmal Rohit - Portfolio & Design Case Studies

A personal portfolio website showcasing product design case studies, projects, and design challenges. Built with Astro.js and Tailwind CSS, featuring a minimal, content-focused design with dark mode support.

🌐 **Live Site:** [nkrohit13.github.io](https://nkrohit13.github.io/)

![Portfolio Preview](public/dante-preview.jpg)

## ✨ Features

- 🎨 **Dark/Light Mode** - Theme switching with persistent preferences
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎯 **Grid Layout** - Clean project grid with hover states
- 🖼️ **Theme-Based Thumbnails** - Different project images for light/dark modes
- 📑 **Table of Contents** - Dynamic TOC for project pages with smart scroll behavior
- 🏷️ **Content Collections** - Organized blog posts, projects, and challenges
- ⚡ **View Transitions** - Smooth page navigation
- 🔍 **SEO Optimized** - Canonical URLs, OpenGraph, sitemap, and RSS feed
- 📝 **MDX Support** - Write content in Markdown with React components
- 💬 **Customizable Contact Section** - Per-page contact messages

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nkrohit13/nkrohit.github.io.git

# Navigate to project directory
cd nkrohit.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 📁 Project Structure

```text
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections (blog, projects, pages)
│   │   ├── blog/        # Blog posts (Markdown/MDX)
│   │   ├── projects/    # Project case studies
│   │   └── pages/       # Static pages (About, Contact, etc.)
│   ├── data/            # Site configuration
│   │   └── site-config.ts
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   ├── styles/          # Global styles and Tailwind config
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🛠️ Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 📝 Content Management

### Adding a Project

1. Create a new `.md` or `.mdx` file in `src/content/projects/`
2. Add frontmatter:

```yaml
---
title: "Project Name"
description: "Brief project description"
publishDate: 2024-01-15
seo:
  image:
    src: "/images/project-light.jpg"
    alt: "Project preview"
darkImage: "/images/project-dark.jpg"  # Optional: different image for dark mode
contactTitle: "Interested in this project?"  # Optional: custom contact section
contactText: "Let's discuss how we can work together."  # Optional
---
```

3. Write your content using Markdown/MDX

### Adding a Blog Post

1. Create a new file in `src/content/blog/`
2. Add frontmatter with title, excerpt, publishDate, and tags
3. Write your post content

### Customizing Site Config

Edit `src/data/site-config.ts` to update:
- Site title, description, and metadata
- Navigation links
- Social media links
- Hero section content
- Contact information

## 🎨 Customization

### Theme Colors

Edit `src/styles/global.css` to customize color schemes for light and dark modes.

### Components

All components are in `src/components/`, including:
- `ProjectPreview.astro` - Project card display
- `Contact.astro` - Contact section
- `Nav.astro` - Navigation bar
- `Footer.astro` - Site footer

## 🚢 Deployment

This site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
# Build the site
npm run build

# Preview the build
npm run preview
```

The built site will be in the `./dist/` directory.

## 🎯 Key Features Implemented

- **No Grid/List Toggle** - Enforced grid layout for consistent UX
- **Simplified TOC** - Server-side rendered table of contents with scroll-aware positioning
- **Theme-Aware Images** - Projects can have different thumbnails for light/dark modes
- **Clean Design** - Removed gradients and unnecessary hover effects
- **Customizable CTAs** - Each project/blog post can have unique contact section text

## 📄 License

Licensed under the [GPL-3.0](LICENSE) license.

## 🙏 Credits

Built on the [Dante Astro Theme](https://github.com/JustGoodUI/dante-astro-theme) by JustGoodUI

---

**Nirmal Rohit** - Freelance Product Designer  
📧 nirmalrohit333@gmail.com
