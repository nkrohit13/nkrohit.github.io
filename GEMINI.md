# Project Overview

This project is the "Dante" theme, a single-author blog and portfolio theme built for the Astro.js static site generator. It uses Tailwind CSS for styling and is designed to be minimal, responsive, and content-focused.

Key features include:
- Dark and light color modes
- Blog, Portfolio, and Challenge collections
- Markdown & MDX support
- View Transitions for smooth page navigation
- SEO-friendly features like sitemaps, RSS feeds, and OpenGraph data

The main configuration is stored in `src/data/site-config.ts`, which defines site metadata, navigation links, and hero content. Content is managed through Astro's "content collections" feature, with schemas defined in `src/content/config.ts` for blog posts, projects, and challenges. The main page structure is defined in the `src/layouts/BaseLayout.astro` component.

# Building and Running

All commands should be run from the root of the project directory.

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    Starts a local development server at `http://localhost:4321`.
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    Compiles the site for production into the `./dist/` directory.
    ```bash
    npm run build
    ```

4.  **Preview Production Build:**
    Starts a local server to preview the production build.
    ```bash
    npm run preview
    ```

# Development Conventions

-   **Styling:** The project uses Tailwind CSS. Configuration is in `tailwind.config.js`. Global styles are in `src/styles/global.css`.
-   **Formatting:** A `.prettierrc` file is present, suggesting that Prettier is used for code formatting.
-   **Content:** All content is managed in the `src/content/` directory, organized into `blog`, `projects`, and `challenges` subdirectories. Each entry is a Markdown or MDX file with frontmatter that must adhere to the schemas in `src/content/config.ts`.
-   **Components:** Reusable UI components are located in the `src/components/` directory.
-   **Layouts:** The base page layout is `src/layouts/BaseLayout.astro`, which includes the header, footer, and navigation.
-   **Static Assets:** Images and other static assets are served from the `public/` directory.

## In-Depth Page Analysis

This section details how the pages in `src/pages/` are structured and connected.

### Core Concepts

-   **`BaseLayout.astro`**: This is the foundational layout used by almost every page. It provides the common HTML `head`, `body` structure, includes global CSS, and contains the dark mode switching logic. It also wraps the main content with the site's `Header`, `Nav`, and `Footer` components.
-   **Content Collections**: The site's content is sourced from `src/content/`. Astro's `getCollection()` and `getEntry()` functions are used to query the `blog`, `projects`, `challenges`, and `pages` collections.
-   **Data Utils**: The file `src/utils/data-utils.ts` contains helper functions for sorting content by date, extracting all unique tags, and filtering content by a specific tag.

### Main Pages

-   **`index.astro`**
    -   **Route:** `/`
    -   **Purpose:** The homepage.
    -   **Data:** Fetches the most recent projects from the `projects` collection.
    -   **Components:** Uses the `Hero.astro` component for the main introduction and `ProjectPreview.astro` to display the latest projects.

-   **`contact.astro`**
    -   **Route:** `/contact`
    -   **Purpose:** Displays the contact page.
    -   **Data:** Fetches content from `src/content/pages/contact.md`.
    -   **Components:** Uses the `Contact.astro` component to display a contact form and information. It also includes custom script to copy the email address to the clipboard.

-   **`rss.xml.js`**
    -   **Route:** `/rss.xml`
    -   **Purpose:** Generates an RSS feed for the blog.
    -   **Data:** Fetches all posts from the `blog` collection and formats them into an XML feed.

### Collection & Taxonomy Pages

These pages use Astro's dynamic routing to generate pages for each item in a collection (like a blog post) or for a taxonomy (like a tag).

#### Blog
-   **`blog/[id].astro`**
    -   **Route:** `/blog/{post-slug}`
    -   **Purpose:** Displays a single blog post.
    -   **Data:** Uses `getStaticPaths` to generate a page for each entry in the `blog` collection. It fetches the specific post's content and also finds related posts.
    -   **Components:** Renders the post content (`<Content />`), `FormattedDate`, and a list of related posts using `PostPreview.astro`.

-   **`blog/[...page].astro`**
    -   **Route:** `/blog`, `/blog/2`, etc.
    -   **Purpose:** Creates a paginated list of all blog posts.
    -   **Data:** Fetches all posts from the `blog` collection and uses the `paginate` function.
    -   **Components:** Uses `PostPreview.astro` to list the posts on the current page and `Pagination.astro` for page navigation.

#### Projects
-   **`projects/[id].astro`**
    -   **Route:** `/projects/{project-slug}`
    -   **Purpose:** Displays a single project.
    -   **Data:** Generates a page for each entry in the `projects` collection.
    -   **Components:** Renders the project's Markdown/MDX content (`<Content />`).

-   **`projects/[...page].astro`**
    -   **Route:** `/projects`, `/projects/2`, etc.
    -   **Purpose:** Creates a paginated list of all projects.
    -   **Data:** Fetches all items from the `projects` collection and uses `paginate`.
    -   **Components:** Uses `ProjectPreview.astro` for the list and `Pagination.astro` for navigation.

#### Challenges
-   **`challenges/[id].astro`**
    -   **Route:** `/challenges/{challenge-slug}`
    -   **Purpose:** Displays a single challenge.
    -   **Data:** Generates a page for each entry in the `challenges` collection.
    -   **Components:** Renders the challenge's content (`<Content />`).

-   **`challenges/[...page].astro`**
    -   **Route:** `/challenges`, `/challenges/2`, etc.
    -   **Purpose:** Creates a paginated list of all challenges.
    -   **Data:** Fetches all items from the `challenges` collection and uses `paginate`.
    -   **Components:** Uses `ChallengePreview.astro` for the list and `Pagination.astro` for navigation.

#### Tags
-   **`tags/index.astro`**
    -   **Route:** `/tags`
    -   **Purpose:** Displays a list of all unique tags used in blog posts.
    -   **Data:** Fetches all `blog` posts, extracts all tags using `getAllTags`, and sorts them by post count.
    -   **Components:** Lists each tag with a link to its corresponding tag page.

-   **`tags/[id]/[...page].astro`**
    -   **Route:** `/tags/{tag-name}`, `/tags/{tag-name}/2`, etc.
    -   **Purpose:** Creates a paginated list of all blog posts associated with a specific tag.
    -   **Data:** `getStaticPaths` generates paginated routes for each unique tag. It fetches all posts for a given tag.
    -   **Components:** Uses `PostPreview.astro` to list the posts and `Pagination.astro` for navigation.

### Generic Pages
-   **`[...id].astro`**
    -   **Route:** `/about`, `/terms`
    -   **Purpose:** A generic page renderer for static content.
    -   **Data:** `getStaticPaths` is hardcoded to generate pages for `about` and `terms`, using the corresponding entries from the `pages` collection in `src/content/`.
    -   **Components:** Renders the main content for the page (`<Content />`).