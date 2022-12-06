// import { Outlet } from "react-router-dom"

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

const Filter = () => {
  const menu = (
    <MenuWrapper>
      <h1 className='subTitle'>Adress</h1>
      <Section>
        <input placeholder='Country' type='text' />
        <input placeholder='Region' type='text' />
        <input placeholder='City' type='text' />
        <input placeholder='Zip code' type='text' />
      </Section>
      <h1 className='subTitle'>Apartment Info</h1>
      <Section>
        <input placeholder='Rooms' type='text' />
        <input placeholder='Size' type='text' />
        <input placeholder='Sort' type='text' />
      </Section>
      <h1 className='subTitle'>Price</h1>
      <Section>
        {" "}
        <input placeholder='Min price' type='text' />
        <input placeholder='Max price' type='text' />
      </Section>
      <h1 className='subTitle'>Footer</h1>
      <Section></Section>
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
        // menu={{
        //   items,
        // }}
        placement='bottomRight'
      >
        <div>
          <Button type={"light"}>
            <IconFilter /> Advanced
          </Button>
        </div>
      </Dropdown>
      {/* antd designdan dropdown ni kodini torvoldik, cssini tortib bomadi,
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
