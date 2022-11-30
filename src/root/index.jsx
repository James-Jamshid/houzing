import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "../components/home"
import Properties from "../components/properties"

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={"/home"} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
export default Root
