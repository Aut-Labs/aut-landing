import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

const Section = styled.div`
  position: relative;
  z-index: 0;
  text-align: left;
  width: 100%;

  ${themeGet("mediaQueries.md")} {
    width: unset;
  } 
`;
export default Section;

export const DefinitionTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const SameLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`;

export const DefinitionItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  grid-gap: 1rem;
`;

export const DefinitionBox = styled.div`
  border: 2px white solid;
  padding: 30px;

  ${themeGet("mediaQueries.md")} {
    padding: 50px;
  }
`;

export const Content = styled.div``;
