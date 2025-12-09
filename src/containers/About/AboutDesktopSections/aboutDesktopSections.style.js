import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;
  line-height: normal;
  margin-bottom: 50px;
  display: none;

  ${themeGet("mediaQueries.md")} {
    display: inherit;

    .container {
      height: 100%;
    }
  }
`;

export default Section;
