import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import BubbleImage from "common/assets/image/bubble.svg";

const Section = styled.section`
  position: relative;
  z-index: 0;
  height: 100vh;

  .container {
    position: relative;
  }

  .bottom-nav-new {
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      z-index: -1;
      
      background: rgba(240, 245, 255, 0.01);
      filter: blur(12px);
      backdrop-filter: blur(12px);
    }
  }

  .main_menu_bottom {
    li {
      display: inline-flex;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
      &.is-current {
        a {
          color: ${themeGet("colors.primary")};
        }
      }

      & a.is-current {
        color: ${themeGet("colors.primary")};
      }
      a {
        color: ${themeGet("colors.white")};
        transition: 0.15s ease-in-out;

        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.33px;
        text-transform: unset;
        
        &:hover {
          color: ${themeGet("colors.primary")};
        }
      }
    }
    // @media (max-width: 990px) {
    //   display: none;
    // }
  }
`;
export default Section;

export const Box = styled.div`
  display: flex;
  align-items: space-between;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  flex-direction: column;

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

export const ImagePreview = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  svg {
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
