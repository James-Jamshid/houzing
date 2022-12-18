import { Carousel } from "antd"
import { useRef } from "react"
import { Container, RightArrow, LeftArrow, Img, Blur, Content } from "./Styled"
import img1 from "../../assets/img/house1.png"
import img2 from "../../assets/img/house2.png"
const CarouselPage = () => {
  const slider = useRef()

  // const onChange = (currentSlide) => {
  //   console.log(currentSlide)
  // }
  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next()
    if (name === "left") slider.current.prev()
  }

  return (
    <Container>
      <Carousel ref={slider}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <h1>Skyper Pool Partment</h1>
        <h3>112 Glenwood Ave Hyde Park, Boston, MA</h3>
        <h2>$5,250/mo</h2>
      </Content>

      <LeftArrow data-name='left' onClick={onMove} />
      <RightArrow data-name='right' onClick={onMove} name='right' />
    </Container>
  )
}
export default CarouselPage
