import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import BubbleImage from "common/assets/image/bubble.svg";

const Section = styled.section`
  position: relative;
  z-index: 0;
  line-height: normal;
  margin-bottom: 50px;
  margin-top: 30px;

  ${themeGet("mediaQueries.md")} {
    height: 100vh;
    margin-bottom: 0;
    margin-top: 0;

    &:before {
      content: " ";
      display: block;
      overflow-x: hidden;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(50px);
      right: -70px;
      scale: 0.8;
      z-index: 9999;
      top: -500px;
      width: 600px;
      height: 800px;
      background-image: url(${BubbleImage.src});
    }

    .container {
      height: 100%;
    }
  }

  ${themeGet("mediaQueries.xxl")} {
    &:before {
      scale: 1;
      right: 0;
    }
  }
`;
export default Section;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  ${themeGet("mediaQueries.md")} {
    flex-direction: row;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentHalf = styled.div`
  flex: 1;

  &.right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
