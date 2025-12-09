import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import BubbleImage from "common/assets/image/bubble.svg";
import BubbleImage2 from "common/assets/image/bubble2.svg";

export const Section = styled.section`
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
    margin-bottom: 100px;
    margin-top: 0;
    &:before {
      content: " ";
      overflow-x: hidden;
      display: block;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(50px);
      transform: rotate(-80deg);
      left: unset;
      right: -500px;
      scale: 0.5;
      z-index: 9999;
      top: unset;
      bottom: -550px;
      width: 1000px;
      height: 1000px;
      background-image: url(${BubbleImage2.src});
    }
  }

  ${themeGet("mediaQueries.xxl")} {
    &:before {
      content: " ";
      display: block;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(50px);
      transform: rotate(-50deg);
      left: -800px;
      z-index: 9999;
      top: 200px;
      scale: 0.5;
      width: 1000px;
      height: 1000px;
      background-image: url(${BubbleImage2.src});
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

export const ImageWrapper = styled.div`
  display: none;

  ${themeGet("mediaQueries.md")} {
    display: block;
    figure {
      position: absolute;
      height: 600px;
      width: 600px;
      z-index: 0;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }
  }
`;

export const TypographyWrapper = styled.div`
  ${themeGet("mediaQueries.md")} {
    max-width: 500px;
  }

  ${themeGet("mediaQueries.xxl")} {
    max-width: 700px;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${themeGet("mediaQueries.md")} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
