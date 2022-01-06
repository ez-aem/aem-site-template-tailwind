<img src="files/readme-banner.png?raw=true" alt="Standard site preview" width="50%" />

# Site Template Tailwind

This template is an opinionated version of the [Adobe standard site template for AEM](https://github.com/adobe/aem-site-template-standard). It is implemented with the best modern tools and libraries that enable rapid development and ensure code conformity. It comes with a Wireframe demo theme, which is styled separately from the theme files for easy removal. This template can serve as a standard starting point for creating a new site, or as a starting point for creating custom site templates.

## Quick Start 

* Go to <https://github.com/ez-aem/aem-site-template-tailwind/releases/latest> and download `aem-site-template-tailwind-{version}.zip`
* Upload `aem-site-template-tailwind-{version}.zip` in AEMaaCS's site creation wizard to create a new site from that template.

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

## Structure

* `files`: Folder with the UI kit XD files.
* `previews`: Folder with a screenshots of the site template.
* `site`: Content package of the content that will be copied for each site created from this template (templates, pages, etc.).
* `theme`: Sources of the template theme to modify how the site looks (CSS, JS, etc.).

## Build locally

If you are working on the template itself, and not using the downloaded theme sources, you can build `aem-site-template-tailwind-{version}.zip` locally.

1. Install Maven (to be able to use the packaging script).
1. Initialize the project with following command executed at the template root:

```bash
npm install
```

1. To build the site template, run following command executed at the template root:

```bash
npm run build
```

1. The site template ZIP file is now located below the template root: `aem-site-template-tailwind-{version}.zip`.
2. Upload to an AEMaaCS site creation wizard. For installing on a local cloudready development instance run:
```bash
npm run deploy
```

## Develop Site Template
Check out the [Theme readme](https://github.com/ez-aem/aem-site-template-tailwind/blob/main/theme/README.md) to learn more about customizing the frontend theme for your project.

## Release

Run `Build and release` GitHub workflow and provide the semantic version you're about to release. The workflow executes the following steps:

* Build Site Template
* Release latest version on github
* Commit, build and release latest Site Theme related changes in [Site Theme E2E Repo](https://github.com/ez-aem/aem-site-template-tailwind-theme-e2e).

## Contributing

Contributions are welcomed! Read the [Contributing Guide](.github/CONTRIBUTING.md) for more information.

## Licensing

This project is licensed under the MIT License. See [LICENSE](LICENSE.md) for more information.
