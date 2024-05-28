## Table of Contents

- [Project Structure](#project-structure)
- [Setting Up](#setting-up)
- [Run Locally](#run-locally)
- [Deploy](#deploy)
- [License](#license)

## Project Structure

```bash
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── bun.lockb
├── components.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── postcss.config.mjs
├── prettier.config.js
├── public
│   ├── logo.png
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── feedback
│   │   │   │   └── route.tsx
│   │   │   ├── submission
│   │   │   │   └── route.tsx
│   │   │   └── subscriber
│   │   │       └── route.tsx
│   │   ├── apple-icon.png
│   │   ├── categories.tsx
│   │   ├── category
│   │   │   └── [categoryId]
│   │   │       ├── [subCategoryId]
│   │   │       │   ├── [subItemId]
│   │   │       │   │   ├── (sections)
│   │   │       │   │   │   ├── news.tsx
│   │   │       │   │   │   ├── overview.tsx
│   │   │       │   │   │   ├── pricing.tsx
│   │   │       │   │   │   └── resources.tsx
│   │   │       │   │   └── page.tsx
│   │   │       │   └── page.tsx
│   │   │       ├── header.tsx
│   │   │       ├── layout.tsx
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── fonts.ts
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── icon.png
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── template.tsx
│   ├── components
│   │   ├── ads.tsx
│   │   ├── feedback-email.tsx
│   │   ├── feedback.tsx
│   │   ├── horizontal-nav.tsx
│   │   ├── icons.tsx
│   │   ├── icons
│   │   │   ├── aceternity-ui.tsx
│   │   │   ├── adonisjs.tsx
│   │   │   ├── agility.tsx
│   │   │   ├── angular.tsx
│   │   │   ├── ant-design.tsx
│   │   │   ├── app-backend.tsx
│   │   │   ├── apple.tsx
│   │   │   ├── appwrite.tsx
│   │   │   ├── astro.tsx
│   │   │   ├── auth0.tsx
│   │   │   ├── beam-analytics.tsx
│   │   │   ├── builderio.tsx
│   │   │   ├── bulma.tsx
│   │   │   ├── buttercms.tsx
│   │   │   ├── canny.tsx
│   │   │   ├── chakra.tsx
│   │   │   ├── clerk.tsx
│   │   │   ├── cloudflare-pages.tsx
│   │   │   ├── cloudinary.tsx
│   │   │   ├── contentful.tsx
│   │   │   ├── convex.tsx
│   │   │   ├── create-expo-stack.tsx
│   │   │   ├── csharp.tsx
│   │   │   ├── css.tsx
│   │   │   ├── cypress.tsx
│   │   │   ├── daisy-ui.tsx
│   │   │   ├── dart.tsx
│   │   │   ├── directus.tsx
│   │   │   ├── django.tsx
│   │   │   ├── docsify.tsx
│   │   │   ├── docusaurus.tsx
│   │   │   ├── drizzle.tsx
│   │   │   ├── edge-store.tsx
│   │   │   ├── electron.tsx
│   │   │   ├── expo.tsx
│   │   │   ├── fastapi.tsx
│   │   │   ├── firebase.tsx
│   │   │   ├── flask.tsx
│   │   │   ├── flutter.tsx
│   │   │   ├── fmod.tsx
│   │   │   ├── git-book.tsx
│   │   │   ├── go.tsx
│   │   │   ├── godot.tsx
│   │   │   ├── google-analytics.tsx
│   │   │   ├── google-colab.tsx
│   │   │   ├── hanko.tsx
│   │   │   ├── heroku.tsx
│   │   │   ├── html.tsx
│   │   │   ├── htmx.tsx
│   │   │   ├── hugging-face.tsx
│   │   │   ├── icon-generator-ai.tsx
│   │   │   ├── ionic.tsx
│   │   │   ├── java.tsx
│   │   │   ├── javascript.tsx
│   │   │   ├── jest.tsx
│   │   │   ├── jotai.tsx
│   │   │   ├── jquery.tsx
│   │   │   ├── jupyter.tsx
│   │   │   ├── kaggle.tsx
│   │   │   ├── keras.tsx
│   │   │   ├── keystatic.tsx
│   │   │   ├── kinde.tsx
│   │   │   ├── kotlin.tsx
│   │   │   ├── koyeb.tsx
│   │   │   ├── laravel.tsx
│   │   │   ├── lemonsqeezy.tsx
│   │   │   ├── lightingcss.tsx
│   │   │   ├── logo.tsx
│   │   │   ├── lucia.tsx
│   │   │   ├── mantine.tsx
│   │   │   ├── material-ui.tsx
│   │   │   ├── microsoft.tsx
│   │   │   ├── mikro-orm.tsx
│   │   │   ├── mintlify.tsx
│   │   │   ├── mlflow.tsx
│   │   │   ├── mobx.tsx
│   │   │   ├── modx.tsx
│   │   │   ├── mongodb.tsx
│   │   │   ├── mux.tsx
│   │   │   ├── neon.tsx
│   │   │   ├── nestjs.tsx
│   │   │   ├── net-maui.tsx
│   │   │   ├── netlify.tsx
│   │   │   ├── next-ui.tsx
│   │   │   ├── nextjs.tsx
│   │   │   ├── notion.tsx
│   │   │   ├── nuxt.tsx
│   │   │   ├── opencv.tsx
│   │   │   ├── paddle.tsx
│   │   │   ├── payload.tsx
│   │   │   ├── phoenix-framework.tsx
│   │   │   ├── photonengine.tsx
│   │   │   ├── php.tsx
│   │   │   ├── physx.tsx
│   │   │   ├── planetscale.tsx
│   │   │   ├── plausible.tsx
│   │   │   ├── playwright.tsx
│   │   │   ├── posthog.tsx
│   │   │   ├── primatejs.tsx
│   │   │   ├── prisma.tsx
│   │   │   ├── prismic.tsx
│   │   │   ├── project-planner-ai.tsx
│   │   │   ├── python.tsx
│   │   │   ├── pytouch.tsx
│   │   │   ├── r.tsx
│   │   │   ├── radix.tsx
│   │   │   ├── railway.tsx
│   │   │   ├── react-aria.tsx
│   │   │   ├── react-native-reanimated.tsx
│   │   │   ├── react-native.tsx
│   │   │   ├── react.tsx
│   │   │   ├── recoil.tsx
│   │   │   ├── redux.tsx
│   │   │   ├── redwoodjs.tsx
│   │   │   ├── remix.tsx
│   │   │   ├── remotion.tsx
│   │   │   ├── remult.tsx
│   │   │   ├── render.tsx
│   │   │   ├── revenue-cat.tsx
│   │   │   ├── ruby-on-rails.tsx
│   │   │   ├── ruby.tsx
│   │   │   ├── sanity.tsx
│   │   │   ├── senja.tsx
│   │   │   ├── shadcn.tsx
│   │   │   ├── shoutout.tsx
│   │   │   ├── sitecore.tsx
│   │   │   ├── solidjs.tsx
│   │   │   ├── speedtree.tsx
│   │   │   ├── sphinx.tsx
│   │   │   ├── sst.tsx
│   │   │   ├── starlight.tsx
│   │   │   ├── stitches.tsx
│   │   │   ├── storyblok.tsx
│   │   │   ├── strapi.tsx
│   │   │   ├── stripe.tsx
│   │   │   ├── styledcomponents.tsx
│   │   │   ├── stylex.tsx
│   │   │   ├── supabase.tsx
│   │   │   ├── surrealdb.tsx
│   │   │   ├── svelte.tsx
│   │   │   ├── swift.tsx
│   │   │   ├── syntax-ui.tsx
│   │   │   ├── tailwindcss.tsx
│   │   │   ├── tauri.tsx
│   │   │   ├── tensorflow.tsx
│   │   │   ├── testcafe.tsx
│   │   │   ├── testimonial.tsx
│   │   │   ├── tinybird.tsx
│   │   │   ├── tremor.tsx
│   │   │   ├── turso.tsx
│   │   │   ├── typeorm.tsx
│   │   │   ├── typescript.tsx
│   │   │   ├── unity.tsx
│   │   │   ├── unkey.tsx
│   │   │   ├── unreal-engines.tsx
│   │   │   ├── uploadthing.tsx
│   │   │   ├── upstash.tsx
│   │   │   ├── valibot.tsx
│   │   │   ├── vercel.tsx
│   │   │   ├── videotap.tsx
│   │   │   ├── vitest.tsx
│   │   │   ├── vue.tsx
│   │   │   ├── wasp.tsx
│   │   │   ├── watermelon-db.tsx
│   │   │   ├── wordpress.tsx
│   │   │   ├── workos.tsx
│   │   │   ├── xata.tsx
│   │   │   ├── yup.tsx
│   │   │   ├── zod.tsx
│   │   │   └── zustand.tsx
│   │   ├── main-nav.tsx
│   │   ├── max-width-wrapper.tsx
│   │   ├── new-subscriber-email.tsx
│   │   ├── new-subscriber-form.tsx
│   │   ├── search-dialog.tsx
│   │   ├── submission-email.tsx
│   │   ├── submission.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── command.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sonner.tsx
│   │       └── tabs.tsx
│   ├── consts.tsx
│   ├── data
│   │   ├── ai-ml-development.tsx
│   │   ├── cross-platform-development.tsx
│   │   ├── desktop-development.tsx
│   │   ├── game-development.tsx
│   │   ├── mobile-development.tsx
│   │   └── web-development.tsx
│   ├── hooks
│   │   ├── use-media-query.tsx
│   │   └── use-navigation.tsx
│   ├── lib
│   │   ├── categories.tsx
│   │   ├── framer.tsx
│   │   ├── nodemailer.tsx
│   │   └── utils.ts
│   ├── styles
│   │   └── globals.css
│   └── types.tsx
├── tailwind.config.ts
└── tsconfig.json

```

## Setting Up

```bash
GOOGLE_EMAIL=
```

```bash
GOOGLE_PASSWORD=
```

## Run Locally

1. Clone stackexplorer repository:  
```bash  
git clone https://github.com/gaurav-sarage/stackexplorer  
```
2. Install the dependencies with one of the package managers listed below:  
```bash  
npm instal  
```  
Start the development mode:  
```bash  
npm run dev  
```

## Deploy

[https://stackexplorer.vercel.app](https://stackexplorer.vercel.app/)

## License

This project is licensed under the **GNU Affero General Public License v3.0** - see the [GNU Affero General Public License v3.0](https://github.com/gaurav-sarage/stackexplorer/blob/main/LICENSE) file for details.
