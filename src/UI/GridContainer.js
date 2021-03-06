import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: minmax(200px, auto);
  margin: 40px;
  grid-auto-flow: dense;
  grid-gap: 20px;
`;

export default GridContainer;
