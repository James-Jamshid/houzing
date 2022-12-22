import styled from "styled-components"
export const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between; */
  /* max-width: 1440px; */
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  padding: var(--padding);
  width: 100%;
  margin: auto;
  margin-top: 50px;
`
