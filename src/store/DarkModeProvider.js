import React from "react"
import DarkModeState from "./DarkModeState"
import Context from "./context"

const DarkModeProvider = ({ children }) => {
  return <Context.Provider value={DarkModeState()}>{children}</Context.Provider>
}

export default DarkModeProvider
