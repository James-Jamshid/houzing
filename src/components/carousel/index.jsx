import { Carousel } from "antd"
import { useRef } from "react"
import { Container, RightArrow, LeftArrow } from "./Styled"
const CarouselPage = () => {
  const slider = useRef()
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  }
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }
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
      <LeftArrow data-name='left' onClick={onMove} />
      <Carousel ref={slider} afterChange={onChange}>
        {" "}
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

      <RightArrow data-name='right' onClick={onMove} name='right' />
    </Container>
  )
}
export default CarouselPage
