/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import DarkModeProvider from "./src/store/DarkModeProvider"
import { ThemeProvider } from "emotion-theming"
import { theme } from "./src/theme/theme"

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </DarkModeProvider>
)
