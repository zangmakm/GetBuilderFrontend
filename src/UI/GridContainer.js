import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: minmax(100px, auto);
  margin: 40px;
  grid-auto-flow: dense;
  grid-gap: 20px;
`;

export default GridContainer;
