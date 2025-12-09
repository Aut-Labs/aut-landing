import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 18.75rem;
  }

  h1 {
    font-size: 6.875rem;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  p.subtitle {
    font-size: 3.375rem;
    color: white;
    font-weight: bold;
    line-height: 1.4;
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
    height: auto;
    .container {
      padding-top: 10rem;
    }

    h1 {
      padding-top: 5rem;
      font-size: 10rem;
    }

    p.subtitle {
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 667px) {
  }
`;
export default Section;

export const Content = styled.div`
  text-align: center;
`;

