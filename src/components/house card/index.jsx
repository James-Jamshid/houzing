import {
  Container,
  Content,
  Details,
  Img,
  Wrapper,
  Icon,
  Devider,
  Footer,
} from "./Styled"
import no_img from "../../assets/img/no-img.png"

const HouseCard = ({
  url,
  title,
  info,
  bed,
  bath,
  garage,
  ruler,
  price1,
  price2,
}) => {
  return (
    <Container>
      <Img src={url || no_img} />
      <Wrapper>
        <Content>
          <div className='subTitle'>{title || "New Apartment Nice Wiew"}</div>
          <div className='info'>{info || "Quincy St, Brooklyn, NY, USA"}</div>
        </Content>
        <Details>
          <Details.Item>
            <Icon.Bed />
            <div className='info'>{bed || 0}Beds</div>
          </Details.Item>
          <Details.Item>
            <Icon.Bath />
            <div className='info'> {bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icon.Car />
            <div className='info'>{garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icon.Ruler />
            <div className='info'>{ruler || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Wrapper>
      <Devider />
      <Footer>
        <Footer.Left>
          <div className='info'>{price1 || `$2,800/mo`}</div>
          <div className='subTitle'>{price2 || `$7,500/mo`}</div>
        </Footer.Left>
        <Footer.Right>
          <Icon.Resize />
          <Icon.Love />
        </Footer.Right>
      </Footer>
    </Container>
  )
}
export default HouseCard
