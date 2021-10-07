// @ts-ignore
import DefaultTheme from "vitepress/theme";
// import-sort-ignore
import "./styles/vars.css";
// import-sort-ignore
import "./styles/sidebar-links.css";

// Custom Theme Entrypoint for Vite, somehow we must ignore the default import
// import CSS after DefaultTheme otherwise everything must be overridden

const Theme = {
  ...DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    // register global components
  },
};

export default Theme;
