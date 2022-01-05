# Standard Tailwind Site Theme

This theme is an opinionated version of the [Adobe standard site template for Adobe Experience Manager (AEM)](https://github.com/adobe/aem-site-template-standard). It is implemented with Tailwind, Parcel and PostCSS instead of SCSS and Webpack. It also implements the Wireframe demo styling separately from the theme files, for easily removal. It is setup with TypeScript, ESLint and Prettier to ensure code quality and conformity. Additionally, the AEM Float based grid has been replaced with a CSS Based grid which dramatically reduces - 600% less - the amount of code shipped to implement the grid.


## Structure

* `src/main.ts`: This is the main entry point of your JS & CSS theme.
* `src/site`: Files that are generic to the entire site.
* `src/components`: Files that are specific to components.
* `src/resources`: Associated files, like icons, logos, fonts.

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

4. Once your work completed, check your changes into GitHub, and execute the deployment action on GitHub.

## Helpful Links
- [AEM Quick Site Creation Journey](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/administering/site-creation/quick-site/overview.html?lang=en)
- [Video Overview of Quick Sites](https://https://www.youtube.com/watch?v=NQeQ1jZ7ZBw)
- [Designing for Core Components](https://one-inside.com/aem-cloud-service/designing-with-core-components/)
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