import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "../components/home"
import { navbar } from "../utils/Navbar"

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        {navbar.map(({ path, element, id }) => {
          return <Route key={id} path={path} element={element} />
        })}
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Navigate to={"/home"} />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
export default Root
