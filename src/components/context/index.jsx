import { createContext } from "react"
const Root = createContext()
const RootContext = ({ children }) => {
  return <Root.Provider>{children}</Root.Provider>
}
export default RootContext
