import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import BubbleImage from "common/assets/image/bubble.svg";
import BubbleImage2 from "common/assets/image/bubble2.svg";

const Section = styled.section`

  position: relative;
  z-index: 0;
  margin-top: 30px;
  margin-bottom: 50px;

  ${themeGet("mediaQueries.md")} {
    &:before {
      content: " ";
      display: block;
      overflow-x: hidden;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(50px);
      transform: rotate(-50deg);
      left: -680px;
      z-index: 9999;
      top: 50px;
      scale: 0.5;
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
      transform: rotate(-80deg);
      left: unset;
      right: -400px;
      scale: 0.5;
      z-index: 9999;
      top: unset;
      bottom: -600px;
      width: 1000px;
      height: 1000px;
      background-image: url(${BubbleImage.src});
    }
  }
`;
export default Section;

export const Grid = styled.div`
  display: flex;
  align-items: space-between;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  flex-direction: column;
  grid-gap: 100px;

  ${themeGet("mediaQueries.md")} {
    flex-direction: row;
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

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  ${themeGet("mediaQueries.md")} {
    display: inherit;
    width: 50%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${themeGet("mediaQueries.md")} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  figure {
    width: 100%;
    height: 400px;
    max-width: 400px;

    ${themeGet("mediaQueries.md")} {
      height: 600px;
      max-width: 600px;
    }

    ${themeGet("mediaQueries.xxl")} {
      height: 800px;
      max-width: 800px;
    }
  }
`;
