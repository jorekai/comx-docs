/**
 * @type {import('vitepress').UserConfig}
 */

const Projects = [
  { text: "Active Projects", link: "/projects/active-projects" },
  { text: "Inactive Projects", link: "/projects/inactive-projects" },
];

const Contacts = [
  { text: "External Contacts", link: "/contacts/external-contacts" },
  { text: "Internal Contacts", link: "/contacts/internal-contacts" },
];

const Knowledge = [
  { text: "Amazon Web Services", link: "/knowledge/aws" },
  { text: "Google Cloud Platform", link: "/knowledge/gcp" },
  { text: "Microsoft Azure", link: "/knowledge/azure" },
];

const sideBarContent = [
  { text: "Home", link: "/" },
  { text: "Projects", link: "/projects/", children: Projects },
  { text: "Knowledge", link: "/knowledge/", children: Knowledge },
  { text: "Contacts", link: "/contacts/", children: Contacts },
];

module.exports = {
  title: "Wiki",
  description: "CommunicationX Internal Wiki",
  head: [
    ["meta", { name: "author", content: "CommunicationX GmbH" }],
    ["meta", { property: "og:title", content: "ComX - Docs" }],
    [
      "meta",
      {
        property: "og:description",
        content: "CommunicationX Wiki for internal Documentation",
      },
    ],
    ["link", { rel: "dns-prefetch", href: "https://fonts.gstatic.com" }],
    [
      "link",
      {
        rel: "preconnect",
        crossorigin: "anonymous",
        href: "https://fonts.gstatic.com",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600",
        rel: "stylesheet",
      },
    ],
  ],
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
      { text: "Projects", items: Projects },
      { text: "Knowledge", items: Knowledge },
      { text: "Contacts", items: Contacts },
    ],
    sidebar: {
      "/": sideBarContent,
      "/projects/": sideBarContent,
      "/contacts/": sideBarContent,
      "/knowledge/": sideBarContent,
    },
  },
};
