// src/gatsby-plugin-theme-ui/index.js
// Reference: https://github.com/gatsbyjs/gatsby/pull/15763
import merge from "deepmerge";
import baseTheme from "gatsby-theme-notes/src/gatsby-plugin-theme-ui/index";
import components from "./components";

console.log(baseTheme);
export default merge(baseTheme, {
  styles: {
    pre: {
      text: primary,
      background: `#f6f3f9`,
      overflowX: `auto`,
      p: 2,
    },
  },
  components,
});
