// src/gatsby-plugin-theme-ui/components.js
import Prism from '@theme-ui/prism'
 
const MyH1 = props => <h1 style={{ color: "tomato" }} {...props} />
const MyParagraph = props => <p style={{ fontSize: "18px", lineHeight: 1.6 }} />

export default {
  pre: props => props.children,
  code: Prism,
  h1: MyH1,
  p: MyParagraph,
}
