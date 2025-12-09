import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;
  padding-top: 10rem;

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1440px) {
  }

  @media only screen and (max-width: 1366px) {
  }

  @media only screen and (max-width: 1280px) {
  }

  @media only screen and (max-width: 991px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 667px) {
  }

  .timeline-block {
    width: calc(50%);
    display: flex;
    clear: both;
  }

  .timeline-block-right {
    float: right;
    justify-content: flex-start;
  }

  .timeline-block-left {
    float: left;
    direction: rtl;
    justify-content: flex-start;
  }

  .marker {
    z-index: 9999;

    &:before {
      position: absolute;
      content: "";
      max-width: 43.75rem;
      width: 100%;
      height: 8px;
    }
  }

  .timeline-block-right .marker {
    &:before {
      background-color: #000000;
      background-image: linear-gradient(-29deg, #000000 0%, #ffffff 100%);
    }
  }

  .timeline-block-left .marker {
    &:before {
      background-color: #ffffff;
      background-image: linear-gradient(-29deg, #ffffff 0%, #000000 100%);
    }
  }

  .timeline-content {
    max-width: 43.75rem;
    color: #666;
    padding: 2.5rem 3.75rem;
  }

  .timeline-content h3 {
    margin-top: 5px;
    margin-bottom: 5px;

    font-size: 2.5rem;
    line-height: 1.1;
  }

  .timeline-content span {
    font-size: 1.2rem;
    color: #a4a4a4;
  }

  .timeline-content p {
    font-size: 14px;
    line-height: 1.5em;
    word-spacing: 1px;
    color: #888;
  }

  .container {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .container:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -1px;
    width: 10px;
    height: 100%;
    background: white;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    .container:before {
      width: 0;
    }

    .timeline-block {
      width: 100%;
      margin-bottom: 30px;
    }
    .timeline-block-right {
      float: none;
    }

    .timeline-block-left .marker:before,
    .timeline-block-right .marker:before {
      background-color: unset;
      background-image: none;
    }

    .timeline-block-left {
      float: none;
      direction: ltr;
    }
  }
`;
export default Section;
