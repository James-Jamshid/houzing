import { createContext } from "react"
import { PropertiesContext } from "./properties"
const Root = createContext()
const RootContext = ({ children }) => {
  return (
    <Root.Provider>
      <PropertiesContext>{children}</PropertiesContext>
    </Root.Provider>
  )
}
export default RootContext
