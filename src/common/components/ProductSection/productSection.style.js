import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import {
  color,
  width,
  height,
  display,
  space,
  borders,
  borderColor,
  boxShadow,
  borderRadius,
  flexWrap,
  alignItems,
  justifyContent,
  flexDirection,
  position,
  overflow,
  fontSize,
  textAlign,
} from "styled-system";

// FeatureBlock wrapper style
const ProductSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 20px 0 !important;
  max-height: 550px;

  @media (min-width: 1440px) {
    max-height: 650px;
  }
  @media (min-width: 1920px) {
    max-height: 750px;
  }

  /* styled system prop support */
  ${display}
  ${width}
  ${height}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${borderRadius}
  ${overflow}
`;

// Icon wrapper style
const IconWrapper = styled.div`
  ${display}
  ${width}
  ${height}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${borderRadius}
  ${overflow}
  ${fontSize}
  display: flex;
`;

// Content wrapper style
const ContentWrapper = styled.div`
  ${width}
  ${space}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  padding: 0;

  p {
    font-size: 1.125rem;
  }
`;

const ProductWrapper = styled.div`
  ${width}
  ${space}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
`;
const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 10px;
  margin-bottom: 30px;

  ${themeGet("mediaQueries.md")} {
  }
`;

// Button wrapper style
const ButtonWrapper = styled.div`
  ${space}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}
  display: flex;
  justify-content: center;
  align-items: center;
  ${themeGet("mediaQueries.md")} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export {
  IconWrapper,
  ContentWrapper,
  ButtonWrapper,
  TopWrapper,
  ProductWrapper,
};
export default ProductSectionWrapper;
