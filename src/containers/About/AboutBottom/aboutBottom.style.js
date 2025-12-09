import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import BubbleImage2 from "common/assets/image/bubble2.svg";

export const Section = styled.section`
  ${themeGet("mediaQueries.md")} {
    margin-bottom: 70px;
    &:before {
      content: " ";
      display: block;
      overflow-x: hidden;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(50px);
      transform: rotate(-50deg);
      left: -800px;
      scale: 0.8;
      z-index: 9999;
      top: -550px;
      width: 1000px;
      height: 1000px;
      background-image: url(${BubbleImage2.src});
    }
  }

  ${themeGet("mediaQueries.xxl")} {
    &:before {
      scale: 1;
      left: -850px;
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  margin-bottom: 50px;

  ${themeGet("mediaQueries.md")} {
    display: none;
  }
`;

export const ContentImage = styled.div`
  justify-content: center;
  align-items: center;
  display: none;

  ${themeGet("mediaQueries.md")} {
    display: flex;

    figure {
      height: 470px;
      width: 232px;
    }
  }

  ${themeGet("mediaQueries.xxl")} {
    figure {
      height: 723px;
      width: 357px;
    }
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ${themeGet("mediaQueries.md")} {
    flex-direction: row;
  }
`;

export const ContentHalf = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;
