// docusaurus.config.js
const config = {
  title: 'Tutoriat Programarea Algoritmilor',
  tagline: 'Materiale, PDF-uri și resurse utile pentru programare și algoritmică',
  favicon: 'img/favicon.ico',

  url: 'https://mihneavk.github.io',
  baseUrl: '/tutoriat-programarea-algoritmilor/',

  organizationName: 'mihneavk',
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
// mod Dark implicit
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',           
      disableSwitch: false,          
      respectPrefersColorScheme: false, 
    },
  },
};

export default config;
