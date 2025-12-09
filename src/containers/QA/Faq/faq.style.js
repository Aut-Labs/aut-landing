import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import Collapse from "rc-collapse";

const Section = styled.section`
  position: relative;
  width: 100%;
  flex: 1;
  padding-top: 12rem;

  .container {
    display: flex;
    flex-direction: row;
    gap: 47px;
    align-items: flex-start;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1440px) {
  }

  @media only screen and (max-width: 1366px) {
  }

  @media only screen and (max-width: 1280px) {
  }

  @media only screen and (max-width: 991px) {
    padding-top: 8rem;

    .container {
      flex-wrap: wrap;
      gap: 22px;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 667px) {
  }
`;

export const RcCollapse = styled(Collapse)`
  min-width: 45rem;
  flex: 1;
  display: grid;
  column-gap: 10px;
  gap: 22px;
  .rc-collapse-item {
    background-color: #707070;
    .rc-collapse-header {
      height: 6.875rem;
      background-color: #333333;
      font-size: 1.563rem;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      z-index: 100;
      position: relative;
      .icon {
        margin-right: 32px;
        position: relative;
        svg {
          width: 2.25rem;
          height: 2.25rem;
        }
        i {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .plus {
        display: inline;
      }
      .minus {
        display: none;
      }
    }
    h4 {
      font-weight: normal !important;
      margin-left: 35px;
      margin-bottom: 0px;
    }
    .rc-collapse-content {
      padding: 0 25px 0 25px;
    }
    .rc-collapse-content-box {
      padding: 15px 0 15px;
      font-weight: 500;
      font-size: 15px;
      line-height: 1.87;
      margin: 0;
    }
  }
  .rc-collapse-item-active {
    .rc-collapse-header {
      .minus {
        display: inline;
      }
      .plus {
        display: none;
      }
    }
  }
`;

export default Section;
