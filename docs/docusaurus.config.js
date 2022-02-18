// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tailwind AEM Site Template",
  tagline: "Learn Best Practices for AEM Site Templates",
  url: "https://ez-aem.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ez-aem", // Usually your GitHub org/user name.
  projectName: "aem-site-template-tailwind", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/ez-aem/aem-site-template-tailwind/tree/gh-pages/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/ez-aem/aem-site-template-tailwind/tree/gh-pages/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Tailwind AEM Site Template",
        logo: {
          alt: "EZ-AEM - Tailwind AEM Site Template",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "quick-start",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "tutorial",
            position: "left",
            label: "Tutorial",
          },
          // {
          //   to: "/showcase",
          //   label: "Showcase",
          //   position: "left",
          // },
          /*
          {
            to: "/blog",
            label: "Blog",
            position: "left"
          },
          */
          {
            href: "https://github.com/ez-aem/aem-site-template-tailwind/releases/latest",
            label: "Download",
            position: "right",
          },
          {
            href: "https://github.com/ez-aem/aem-site-template-tailwind",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Documentation",
          //       to: "/docs/intro",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/ez-aem/aem-site-template-tailwind",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/ez-aem/aem-site-template-tailwind",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} headwire.com, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
