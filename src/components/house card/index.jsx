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

export const HouseCard = ({ data = {} }) => {
  const {
    attachments,
    salePrice,
    price,
    houseDetails,
    address,
    city,
    country,
    description,
  } = data
  return (
    <Container>
      <Img src={(attachments && attachments[0]?.imgPath) || no_img} />
      <Wrapper>
        <Content>
          <div className='subTitle inline'>
            {city}, {country}, {description}
          </div>
          <div className='info'>
            {address || "Quincy St, Brooklyn, NY, USA"}
          </div>
        </Content>
        <Details>
          <Details.Item>
            <Icon.Bed />
            <div className='info'>Bed {houseDetails?.beds || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icon.Bath />
            <div className='info'>Bath {houseDetails?.bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icon.Car />
            <div className='info'>Garage {houseDetails?.garage || 0} </div>
          </Details.Item>
          <Details.Item>
            <Icon.Ruler />
            <div className='info'>Area {houseDetails?.area || 0}kv</div>{" "}
          </Details.Item>
        </Details>
      </Wrapper>
      <Devider />
      <Footer>
        <Footer.Left>
          <div className='info'>${salePrice || 0}/mo</div>
          <div className='subTitle'>${price || 0}/mo</div>
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
