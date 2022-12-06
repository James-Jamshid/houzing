import styled from "styled-components"
import { ReactComponent as Filter } from "../../assets/img/icons/filter.svg"
import { ReactComponent as Houses } from "../../assets/img/icons/houses.svg"
import { ReactComponent as Search } from "../../assets/img/icons/search.svg"
// import { ReactComponent as Houses } from "../../../assets/icons/img/houses.svg"
// import { ReactComponent as Filter } from "../../../assets/icons/img/filter.svg"
// import { ReactComponent as Search } from "../../../assets/icons/img/search.svg"
export const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`
export const IconHouses = styled(Houses)`
  margin-right: 8px;
`
export const IconFilter = styled(Filter)`
  margin-right: 8px;
`
export const IconSearch = styled(Search)`
  margin-right: 8px;
`

export const MenuWrapper = styled.div``
export const Section = styled.div`
  margin-bottom: 20px;
`
