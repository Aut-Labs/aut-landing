import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const playPluse = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const SectionWrapper = styled.section`
  width: 100%;
  position: relative;
  .container {
    padding-top: 18.75rem;  }

  h2.title {
    text-align: center;
    font-size: 3.375rem;
    color: white;
    font-weight: bold;
    line-height: 1.4;
  }
  
  h3.subtitle {
    text-align: center;
    font-size: 3rem;
    color: white;
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: 4.25rem;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 991px) {
    .container {
      padding-top: 10rem;
    }
  }

  @media only screen and (max-width: 624px) {
  }
`;

export const VideoArea = styled.div`
  display: inline-flex;
  position: relative;
  img {
    max-width: 100%;
    object-fit: cover;
    cursor: pointer;
    height: 100%;
    border-radius: 10px;
    height: 33.75rem;
  }
  .video__btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    min-width: 80px;
    max-width: 80px;
    height: 80px;
    min-height: 80px;
    max-height: 80px;
    line-height: 80px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    display: inline-block;
    z-index: 0;
    padding: 0;
    background-color: transparent;
    @media only screen and (max-width: 480px) {
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
    &:before {
      content: "";
      position: absolute;
      z-index: 0;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: block;
      width: 80px;
      height: 80px;
      background: ${themeGet("colors.white", "#925B9F")};
      border-radius: 50%;
      animation: ${playPluse} 1.5s ease-out infinite;
    }
    > span {
      color: #000;
      position: relative;
      z-index: 5;
      background-color: #009ade;
      display: block;
      border-radius: inherit;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 50px;
        height: 50px;
        @media only screen and (max-width: 480px) {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
`;

export const VideoWrapper = styled.div`
  max-width: 100%;
  position: relative;
  width: 900px;
  &:before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default SectionWrapper;
