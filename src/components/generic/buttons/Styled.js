import styled from "styled-components"
export const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid white",
        color: "white",
      }
    case "primary":
      return {
        background: " #0061df",
        border: "none",
        color: "white",
      }
    case "light":
      return {
        background: "white",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
        // id: "hover",
      }
    default:
      return {
        background: " #0061df",
        border: "none",
        color: "white",
      }
  }
}
export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  min-width: 120px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "120px")};

  //heightni distruptizatsiya qilib chaqirib olamiz va height true bolsa
  // osha heightni olchamini olsin aks xolda height 44px bo'lsin
  :active {
    opacity: 0.7;
  }
  ${getType}
`
export const Wrapper = styled.div``
