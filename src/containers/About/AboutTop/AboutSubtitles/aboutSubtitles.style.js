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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;
