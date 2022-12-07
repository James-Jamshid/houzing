import styled from "styled-components"
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg"
import { ReactComponent as rightArrow } from "../../assets/img/rightArrow.svg"
export const Container = styled.div`
  height: 571px;
  border: 1px solid black;
  position: relative;
`
export const LeftArrow = styled(Arrow)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.4);
  /* transform: rotate(90deg);  */
  /* transform rotate degree boyicha aylantiradi */
  /* opacity: 0.2; backgroundga rgba berilsa oxirgi 4chi raqami opacityni anglatadi */
  border-radius: 50%;
  /* transform: ${({ left }) => left && "rotate(180deg)"};
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"}; */
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
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  :hover {
    opacity: 0.7;
  }
`
