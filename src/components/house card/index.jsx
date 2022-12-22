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

const HouseCard = ({ data }) => {
  const {
    address,
    city,
    country,
    description,
    houseDetails,
    salePrice,
    price,
    attachments,
  } = data
  return (
    <Container>
      <Img src={attachments[0]?.imgPath || no_img} />
      <Wrapper>
        <Content>
          <div className='subTitle inline'>
            {city},{country},{description}
          </div>
          <div className='info'>
            {address || "Quincy St, Brooklyn, NY, USA"}
          </div>
        </Content>
        <Details>
          <Details.Item>
            <Icon.Bed />
            <div className='info'>{houseDetails?.beds || 0}Beds</div>
          </Details.Item>
          <Details.Item>
            <Icon.Bath />
            <div className='info'> {houseDetails?.bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icon.Car />
            <div className='info'>{houseDetails?.garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icon.Ruler />
            <div className='info'>{houseDetails?.area || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Wrapper>
      <Devider />
      <Footer>
        <Footer.Left>
          <div className='info'>{salePrice || `$2,800/mo`} $</div>
          <div className='subTitle'>{price || `$7,500/mo`} $</div>
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
