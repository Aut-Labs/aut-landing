import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import BubbleImage2 from "common/assets/image/bubble2.svg";
import BubbleImage from "common/assets/image/bubble.svg";

const Section = styled.section`
  position: relative;
  z-index: 0;
  line-height: normal;
  margin-bottom: 50px;
  margin-top: 30px;

  ${themeGet("mediaQueries.md")} {
    margin-bottom: 200px;
    margin-top: 150px;
    &:before {
      content: " ";
      display: block;
      overflow-x: hidden;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(50px);
      transform: rotate(-50deg);
      left: -800px;
      z-index: 9999;
      top: -650px;
      scale: 0.8;
      width: 1000px;
      height: 1000px;
      background-image: url(${BubbleImage2.src});
    }

    &:after {
      content: " ";
      display: block;
      overflow-x: hidden;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(50px);
      transform: rotate(-80deg);
      right: -350px;
      z-index: 9999;
      top: 200px;
      scale: 0.8;
      width: 1000px;
      height: 1000px;
      background-image: url(${BubbleImage.src});
    }

    .container {
      height: 100%;

      svg {
        overflow: visible;
      }
    }
  }

  ${themeGet("mediaQueries.xxl")} {
    margin-bottom: 300px;
    margin-top: 200px;

    &:before {
      scale: 1;
      left: -850px;
    }
    &:after {
      content: " ";
      display: block;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(75px);
      transform: rotate(-50deg);
      right: 550px;
      z-index: 9999;
      top: 250px;
      width: 1000px;
      height: 1000px;
      scale: 0.5;
      background-image: url(${BubbleImage2.src});
    }
  }
`;

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Section;
