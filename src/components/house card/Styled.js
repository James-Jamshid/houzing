import styled from "styled-components"
import { ReactComponent as bed } from "../../assets/icons/bed.svg"
import { ReactComponent as bath } from "../../assets/icons/bath.svg"
import { ReactComponent as car } from "../../assets/icons/car.svg"
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg"
import { ReactComponent as love } from "../../assets/icons/love.svg"
import { ReactComponent as resize } from "../../assets/icons/resize.svg"

export const Container = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 3px;
  width: 380px;
  /* height: 429px; */
  height: auto;
  /* margin: 100px; // buni o'chirib tashlash kerak */
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding-bottom: 10px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px;
  background: #ffffff;
`
export const Img = styled.img`
  width: 100%;
  max-height: 220px;
`
export const Content = styled.div`
  /* padding: 0 20px; */
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`
Details.Item = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`
export const Devider = styled.div`
  background: #e6e9ec;
  height: 2px;
  width: 100%;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  /* margin-bottom: 20px; */
`
Footer.Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
Footer.Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`
export const Icon = styled.div``
Icon.Bed = styled(bed)``
Icon.Bath = styled(bath)``
Icon.Car = styled(car)``
Icon.Ruler = styled(ruler)``
Icon.Love = styled(love)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  background: #f6f8f9;
  :active {
    transform: scale(0.9);
  }
`
Icon.Resize = styled(resize)`
  width: 20px;
  height: 20px;
`
