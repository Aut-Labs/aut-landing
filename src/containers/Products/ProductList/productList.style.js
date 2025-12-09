import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import BubbleImage2 from "common/assets/image/bubble2.svg";
import BubbleImage from "common/assets/image/bubble.svg";

const ProductListSectionWrapper = styled.section`
  position: relative;
  z-index: 0;
  padding-top: 50px;

  ${themeGet("mediaQueries.md")} {
    padding-top: 100px;

    &.wrapper-0 {
      &:before {
        content: " ";
        display: block;
        position: absolute;
        filter: blur(50px);
        -webkit-filter: blur(50px);
        transform: rotate(-80deg);
        right: -350px;
        scale: 0.8;
        z-index: 9999;
        top: 250px;
        width: 1000px;
        height: 1000px;
        background-image: url(${BubbleImage.src});
      }
    }

    &.wrapper-1 {
      &:before {
        content: " ";
        display: block;
        position: absolute;
        filter: blur(50px);
        -webkit-filter: blur(50px);
        transform: rotate(-50deg);
        left: -800px;
        z-index: 9999;
        top: 100px;
        scale: 0.8;
        width: 1000px;
        height: 1000px;
        background-image: url(${BubbleImage2.src});
      }
    }
  }

  ${themeGet("mediaQueries.xxl")} {
    &.wrapper-0 {
      &:before {
        scale: 1;
      }
    }

    &.wrapper-1 {
      &:before {
        scale: 1;
        left: -850px;
      }
    }
  }
`;

export const ProductsWrapper = styled.div`
  margin-bottom: 50px;
  ${themeGet("mediaQueries.md")} {
    margin-bottom: 100px;
  }
  ${themeGet("mediaQueries.xxl")} {
    &:before {
      scale: 1;
    }
  }
`;

export const Grid = styled.div`
  grid-gap: 100px;
  display: flex;
  align-items: space-between;
  grid-template-columns: 1fr 1fr;
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
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

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  img {
    width: 100%;
    height: 274px;
    width: 488px;

    ${themeGet("mediaQueries.md")} {
      height: 274px;
      width: 488px;
    }

    ${themeGet("mediaQueries.xxl")} {
      height: 377px;
      width: 671px;
    }
  }
`;

export default ProductListSectionWrapper;
