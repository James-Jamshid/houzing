import styled from "styled-components"
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg"
import { ReactComponent as rightArrow } from "../../assets/img/rightArrow.svg"
export const Container = styled.div`
  border: 1px solid black;
  position: relative;
`
export const LeftArrow = styled(Arrow)`
  position: absolute;
  left: 20px;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  /* transform: rotate(90deg);  */
  /* transform rotate degree boyicha aylantiradi */
  /* opacity: 0.2; backgroundga rgba berilsa oxirgi 4chi raqami opacityni anglatadi */
  border-radius: 50%;
  :hover {
    opacity: 0.7;
  }
`
export const RightArrow = styled(rightArrow)`
  position: absolute;
  right: 20px;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  :hover {
    /* opacity: 0.7; */
    background: rgba(255, 255, 255, 0.4);
  }
`
export const Img = styled.img`
  width: 100%;
`

export const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
`
export const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
`
