import { Dropdown } from "antd"
import { Button, Input } from "../generic"
import {
  Container,
  IconFilter,
  IconHouses,
  IconSearch,
  MenuWrapper,
  Section,
} from "./Styled"
import { useRef } from "react"
const Filter = () => {
  const countryRef = useRef()
  const regionRef = useRef()
  const cityRef = useRef()
  const zipRef = useRef()
  const roomRef = useRef()
  const sizeRef = useRef()
  const sortRef = useRef()
  const minPriceRef = useRef()
  const maxPriceRef = useRef()
  const menu = (
    <MenuWrapper>
      <h1 className='subTitle'>Adress</h1>
      <Section>
        <Input ref={countryRef} placeholder='Country' type='text' />
        <Input ref={regionRef} placeholder='Region' type='text' />
        <Input ref={cityRef} placeholder='City' type='text' />
        <Input ref={zipRef} placeholder='Zip code' type='text' />
      </Section>
      <h1 className='subTitle'>Apartment Info</h1>
      <Section>
        <Input ref={roomRef} placeholder='Rooms' type='text' />
        <Input ref={sizeRef} placeholder='Size' type='text' />
        <Input ref={sortRef} placeholder='Sort' type='text' />
      </Section>
      <h1 className='subTitle'>Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder='Min price' type='text' />
        <Input ref={maxPriceRef} placeholder='Max price' type='text' />
      </Section>
    </MenuWrapper>
  )
  return (
    <Container>
      <Input
        icon={<IconHouses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        overlay={menu}
        placement='bottomRight'
        arrow={{ pointAtCenter: true }}
        trigger='click'
        // menu={{ items }}
      >
        <div>
          <Button type={"light"}>
            <IconFilter /> Advanced
          </Button>
        </div>
      </Dropdown>
      {/* antd designdan dropdown ni kodini tortvoldik, cssini tortib bomadi,
      keyin ichida menu qismi bor edi uni o'chirib tashlab overlay yozdik.
      overlayni ichiga yuqorida ozgaruvchi ochib shunga tenglashtirib qoydik */}
      <Button>
        <IconSearch />
        Search
      </Button>
    </Container>
  )
}
export default Filter
