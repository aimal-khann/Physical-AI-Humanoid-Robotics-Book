import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Bridging the Gap Between AI and Embodied Intelligence',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'facebook', 
  projectName: 'docusaurus', 

  onBrokenLinks: 'throw',

  // CRITICAL UPDATE: You must have 'ur' here for the translation to work
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'], 
    localeConfigs: {
      en: { label: 'English', direction: 'ltr' },
      ur: { label: 'Urdu', direction: 'rtl' }, // Urdu is Right-to-Left
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: { alt: 'My Site Logo', src: 'img/logo.svg' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Chapters',
        },
        // NOTICE: No 'localeDropdown' here. This ensures no public button on the navbar.
        {
          type: 'html',
          position: 'right',
          value: '<div class="custom-auth-placeholder"></div>',
          className: 'custom-auth-placeholder',
        },
        {
          href: 'https://github.com/aimal-khann',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Chapters', to: '/docs/introduction' }],
        },
        {
          title: 'Community',
          items: [{ label: 'GitHub', href: 'https://github.com/aimal-khann' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;