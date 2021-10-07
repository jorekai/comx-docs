/**
 * @type {import('vitepress').UserConfig}
 */

const sideBarContent = [
  { text: "Home", link: "/" },
  { text: "Active Projects", link: "/projects/active-projects" },
  { text: "Inactive Projects", link: "/projects/inactive-projects" },
  { text: "External Contacts", link: "/contacts/external-contacts" },
  { text: "Internal Contacts", link: "/contacts/internal-contacts" },
];

module.exports = {
  title: "Documentation",
  description: "Internal Wiki",
  themeConfig: {
    home: true,
    heroImage: "/logo.png",
    logo: "/logo.png",
    heroText: "Everything on CommunicationX",
    tagline: "Confidential content is following!",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "Suggest changes to this page",
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Contacts", link: "/contacts/" },
    ],
    sidebar: {
      "/": sideBarContent,
      "/projects/": sideBarContent,
      "/contacts/": sideBarContent,
    },
  },
};
