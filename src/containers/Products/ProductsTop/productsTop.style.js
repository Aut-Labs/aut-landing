const { default: themeGet } = require("@styled-system/theme-get");
import styled from "styled-components";
import BubbleImage from "common/assets/image/bubble.svg";
import BubbleImage2 from "common/assets/image/bubble2.svg";

export const ProductTopSectionWrapper = styled.section`
  position: relative;
  z-index: 0;
  padding-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 30px;

  .container {
    z-index: 5;
  }

  ${themeGet("mediaQueries.md")} {
    height: 100vh;
    margin-bottom: 0;
    margin-top: 0;

    &:before {
      content: " ";
      display: block;
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

    &:after {
      content: " ";
      display: block;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(50px);
      transform: rotate(-50deg);
      left: -800px;
      scale: 0.8;
      z-index: 9999;
      bottom: -500px;
      width: 1000px;
      height: 1000px;
      background-image: url(${BubbleImage2.src});
    }
  }

  ${themeGet("mediaQueries.xxl")} {
    &:before {
      scale: 1;
      right: 0;
    }

    &:after {
      scale: 1;
      left: -850px;
    }
  }

  .container {
    ${themeGet("mediaQueries.md")} {
      max-width: 800px;
    }
  }

  .container {
    ${themeGet("mediaQueries.xxl")} {
      max-width: 1000px;
    }
  }

  .no-uppercase {
    text-transform: none !important;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  justify-content: center;

  ${themeGet("mediaQueries.md")} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  display: none;
  ${themeGet("mediaQueries.md")} {
    display: inline-grid;

    figure {
      position: absolute;
      height: 80vh;
      width: 80vw;
      z-index: 0;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }
  }
`;
