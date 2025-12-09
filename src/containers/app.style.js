import { themeGet } from "@styled-system/theme-get";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import AutLogo from "common/assets/image/bg.svg";
// import BgPng from "common/assets/image/new-bg.png";


const Wobble_Vertical = keyframes`
  16.65% {
    transform: translateY(8px);
  }
  33.3% {
    transform: translateY(-6px);
  }
  49.95% {
    transform: translateY(4px);
  }
  66.6% {
    transform: translateY(-2px);
  }
  83.25% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
  }
`;

const shake = keyframes`
  16%{
      transform:skew(-14deg)
  }
  33%{
      transform:skew(12deg)
  }
  49%{
      transform:skew(-8deg)
  }
  66%{
      transform:skew(6deg)
  }
  83%{
      transform:skew(-4deg)
  }
`;

const Hvr_Ripple_Out = keyframes`
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${themeGet("fonts.primary")};
    color: ${themeGet("colors.headingColor")};
  }

  input, textarea {
    font-family: ${themeGet("fonts.primary")};
  }

  button {
    font-family: ${themeGet("fonts.primary")};
  }

  .cookie-consent-btn {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    background-color: transparent;
    border-width: 3px;
    border-style: solid;
    border-radius: 50px;
    color: #EBEBF2;
    background-color: transparent;
    border-color: #EBEBF2;
    font-weight: bold;
    font-size: 14px;
    margin-top: 33px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
  }
  .cookie-consent-btn:hover {
    cursor: pointer;
    color: #000000;
    background-color: #EBEBF2;
    border-color: #EBEBF2;
  }

  .ps__rail-y {
    z-index: 99999;
  }

  section {
    position: relative;
    &.snap {
      ${themeGet("mediaQueries.md")} {
        scroll-snap-align: start;
        height: 100vh;
      }

      &.center {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      &.space-between {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet("colors.white", "#ffffff")} !important;
    &.alt {
      background-color: ${themeGet("colors.primary", "#10ac84")} !important;
      box-shadow: 0 8px 38px rgba(16, 172, 132, 0.5) !important;
    }
  }
  .reuseModalHolder {
    border: 0 !important;
    background-color: transparent !important;
    &.search-modal,
    &.video-modal {
      background-color: rgba(255, 255, 255, 0.96) !important;
      overflow-y: auto !important;
      .innerRndComponent {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        iframe {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.8) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
    &.video-modal {
      background-color: transparent !important;
    }
    .innerRndComponent {
      padding-right: 0 !important;
    }
  }
  .reuseModalCloseBtn {
    cursor: pointer !important;
  }

  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }

  .reuseModalHolder.login-modal{
    @media (min-width: 768px) {
      top: 0!important;
      left: 0!important;
      max-width: 100%!important;
      max-height: 100%!important;
    }
  }



  .rc-drawer-content-wrapper{
    right: -1px;
    @media (max-width: 767px) {
      width: 300px !important;
    }
    .rc-drawer-content {
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 50px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: ${themeGet("colors.primary")};
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: ${themeGet("colors.primary")};
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }

            &.is-current {
              color: ${themeGet("colors.primary")};
              &:before{
                opacity: 1;
              }
            }
          }
          &.is-current {
            a {
              color: ${themeGet("colors.primary")};
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 26px;
      color: ${themeGet("colors.black")};
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
    }
  }

  .PhoneInputCountry {
    --PhoneInputCountrySelectArrow-color: ${themeGet("colors.white")};
    --PhoneInputCountrySelectArrow-opacity: 1;
  }
`;

export const ContentSnapWrapper = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    transition: background-color 0.2s linear, opacity 0.2s linear;
    -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
    width: 15px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    border: 4.5px solid transparent;
    background-clip: padding-box;
    background-color: rgba(170, 170, 170, 0.6);
    border-radius: 9px;
    transition: background-color 0.2s linear, width 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s linear, width 0.2s ease-in-out;
    width: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #999;
    border: 2px solid transparent;
  }

  ::-webkit-scrollbar-track {
    transition: background-color 0.2s linear, width 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s linear, width 0.2s ease-in-out;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track:hover {
    background-color: #eee;
    transition: background-color 0.2s linear, width 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s linear, width 0.2s ease-in-out;
    opacity: 0.9;
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
`;

export const AppWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .sticky-active {
    .navbar {
      padding: 20px 0 21px;
      background-color: ${themeGet("colors.white", "#ffffff")};
      @media only screen and (max-width: 1366px) {
        padding: 15px 0 16px;
      }
      .mobile-menu {
        top: 72px;
      }
    }
  }
`;

export const SectionHeader = styled.header`
  max-width: 550px;
  width: 100%;
  margin: 0 auto 85px;
  text-align: center;
  @media only screen and (max-width: 1600px) {
    margin-bottom: 60px;
  }
  p {
    font-weight: normal;
    line-height: 2;
    margin-bottom: 12px;
    color: ${themeGet("colors.textColor", "#343D48")};
  }
  h2 {
    font-size: 1.75rem;
    line-height: 1.3;
    font-weight: 500;
    color: ${themeGet("colors.headingColor", "#0F2137")};
    margin-bottom: 18px;
    letter-spacing: -0.5px;
    @media only screen and (max-width: 1600px) {
      letter-spacing: -0.7px;
      margin-bottom: 12px;
    }
    @media only screen and (max-width: 991px) {
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
  &.section-header-two {
    text-align: left;
    margin-top: -10px;
    margin-bottom: 40px;
    h2 {
      font-size: 2.5rem;
      line-height: 1.35;
      margin-bottom: 25px;
      letter-spacing: -0.5px;
    }
  }
`;

export default GlobalStyle;
