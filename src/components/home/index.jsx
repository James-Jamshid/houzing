// import { Outlet } from "react-router-dom"

import { Input } from "../generic"
import { Container, Wrapper } from "./Styled"

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Home</h1>
        <Input width={200} placeholder={"Region"} />
      </Wrapper>
    </Container>
  )
}
export default Home
