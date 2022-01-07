# Site Template Tailwind Theme

This theme is an opinionated version of the [Adobe standard site template for Adobe Experience Manager (AEM)](https://github.com/adobe/aem-site-template-standard). It is implemented with Tailwind, Parcel and PostCSS instead of SCSS and Webpack. It also implements the Wireframe demo styling separately from the theme files, for easy removal. It is setup with TypeScript, ESLint and Prettier to ensure code quality and conformity. Additionally, the AEM Float based grid has been replaced with a CSS Based grid which dramatically reduces - 600% less - the amount of code shipped to implement the grid.


## Structure

* `src/main.ts`: This is the main entry point of your JS & CSS theme.
* `src/site`: Files that are generic to the entire site.
* `src/components`: Files that are specific to components.
* `src/resources`: Associated files, like icons, logos, fonts.
* `demos/wireframe`: Example Wireframe theme

## Build

1. Initialize the project with following command executed at the theme root:

```
npm install
```

2. Complete the `.env` file with credentials for the local proxy server to access the site created on Cloud Service.

3. Run the local proxy server while working to preview your changes with the content from the production environment.

```
npm run live
```

4. Once your work completed, check your changes into git, and execute the deployment action on git.

## Helpful Links
- [AEM Quick Site Creation Journey](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/administering/site-creation/quick-site/overview.html?lang=en)
- [Video Overview of Quick Sites](https://https://www.youtube.com/watch?v=NQeQ1jZ7ZBw)
- [Designing for Core Components](https://business.adobe.com/summit/2021/sessions/fasttrack-your-site-design-workflow-for-adobe-expe-s504.html)
- [aemcomponents.dev](https://aemcomponents.dev)
- [WKND.site](https://wknd.site/)
- [AEM Site Template Builder](https://github.com/adobe/aem-site-template-builder)
- [Adobe's AEM Site Template Standard](https://github.com/adobe/aem-site-template-standard)
- [Tailwind](https://https://tailwindcss.com/)
- [Parcel](https://https://parceljs.org/)
- [PostCSS](https://https://postcss.org/)
- [TypeScript](https://https://www.typescriptlang.org/)
- [Prettier](https://https://prettier.io/)
- [ESLint](https://https://eslint.org/)
- [Links to EZ-AEM upselling opportunities](https://)
- [Tailwind VSCode Plugin](https://https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind Class Name Completion for (neo)vim](https://github.com/iamcco/coc-tailwindcss)
- [Headwind VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)

## Removing the Wireframe Theme 
The Wireframe theme has been provided as a guide for best practices for how to use [Tailwind]() and [BEM]() together. However, it is likely you would remove and add custom styling. This can be achieved simply by removing a few includes and deleting the `demos` folder.

Remove the following lines from `src/theme.css`:
```css
/* src/theme.css */
/* Wireframe Demo CSS Theme */
@import "../demos/wireframe/theme.css";
```

Remove from `src/theme.ts`
```js
// Wireframe Demo JavaScript
import "../demos/wireframe/theme";
```

Remove the Wireframe preset and the `"./demos/wireframe/**/**/**/*.{html,js,ts,tsx}"` content path from the `tailwind.config.js`:
```js
  presets: [require("./demos/wireframe/wireframe.tailwind.preset.js")],
  content: ["./demos/wireframe/**/**/**/*.{html,js,ts,tsx}",],
```

## Style System Best Practices
As a best practice, all Style System variations should be in their own file. Additionally, it is recommended to follow the BEM syntax when naming classes for use with the Style System. This must be coordinated with the classnames entered into the Style System within AEM, or the Style System classnames must be managed in code. For instance, you will find several variations for the teaser component that follow the BEM model in the Wireframe theme:
```
.teaser--text-bottom
.teaser--text-left
.teaser--text-right
.teaser--dark
```