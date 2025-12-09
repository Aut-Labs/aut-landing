import themeGet from "@styled-system/theme-get";
import BubbleImage from "common/assets/image/bubble.svg";

import styled from "styled-components";

const Section = styled.section`

  position: relative;
  z-index: 0;
  line-height: normal;
  margin-bottom: 50px;
  margin-top: 30px;

  ${themeGet("mediaQueries.md")} {
    margin-bottom: 0;
    margin-top: 0;
    &:before {
      content: " ";
      display: block;
      overflow-x: hidden;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(50px);
      transform: rotate(-80deg);
      right: -350px;
      scale: 0.8;
      z-index: 9999;
      top: -250px;
      width: 1000px;
      height: 1000px;
      background-image: url(${BubbleImage.src});
    }

    .container {
      height: 100%;
    }
  }

  ${themeGet("mediaQueries.xxl")} {
    &:before {
      scale: 1;
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  img {
    width: 100%;
    height: 460px;
    max-width: 460px;

    ${themeGet("mediaQueries.xxl")} {
      height: 566px;
      max-width: 566px;
    }
  }
`;
export const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Section;
