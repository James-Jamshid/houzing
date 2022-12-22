import CarouselPage from "../carousel"
import HouseCard from "../house card"
import { Container, Wrapper } from "./Styled"
const Home = () => {
  return (
    <Container>
      <Wrapper>
        <CarouselPage />
        <HouseCard />
      </Wrapper>
    </Container>
  )
}
export default Home
