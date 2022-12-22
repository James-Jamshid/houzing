import React, { useEffect } from "react"
import { Container } from "./Style"
import HouseCard from "../house card"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const { REACT_APP_BASE_URL: url } = process.env

export const Properties = (props) => {
  const [data, setData] = useState([])
  const { search } = useLocation()
  //backend dan malumotlar shunday olib kelinadi.
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data)
      }, [])
  })

  return (
    <Container>
      {data.map((value) => {
        return <HouseCard key={value.id} data={value} />
      })}
    </Container>
  )
}

export default Properties
