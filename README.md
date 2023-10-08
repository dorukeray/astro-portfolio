# Dorkodu's Astro Template

A minimalist website template with Astro.

Ideal for portfolios, blogs, landing pages or personal websites.

**Used:** React, TypeScript, Mantine UI, MDX, Partytown, Sitemap

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── images/
│   │   └── example.png
│   ├── fonts/
│   │   └── Font.ttf
│   └── favicon.svg
│   └── robots.txt
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   └── Header.astro
│   │   └── Footer.astro
│   │   └── Hero.astro
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── styles/
│   │   └── theme.ts
│   │   └── index.css
│   │   └── index.css.ts
│   │   └── Layout.css.ts
│   ├── pages/
│   │    └── index.astro
│   │    └── about.astro
│   ├── env.d.ts
│   ├── postcss.config.js
│   ├── site.config.ts
│   └──
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory.

Each page is exposed as a route based on its file name.

Nothing special about `src/components/`, just where we like to put our components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://docs.astro.build).
