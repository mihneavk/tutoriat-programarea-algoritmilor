// docusaurus.config.js
const config = {
  title: 'Tutoriat Programarea Algoritmilor',
  tagline: 'Materiale, PDF-uri și resurse utile pentru programare și algoritmică',
  favicon: 'img/favicon.ico',

  url: 'https://mihnea17turbo.github.io',
  baseUrl: '/tutoriat-programarea-algoritmilor/',

  organizationName: 'Mihnea17turbo',
  projectName: 'tutoriat-programarea-algoritmilor',
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        blog: { showReadingTime: true },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',           // setează dark mode implicit
      disableSwitch: false,          // permite utilizatorului să schimbe tema
      respectPrefersColorScheme: false, // ignoră setarea sistemului
    },
  },
};

export default config;
