import styled from "styled-components";

const FeatureListSectionWrapper = styled.section`
  padding: 5rem 0;
  @media (max-width: 990px) {
    padding: 4rem 0;
  }
  @media (max-width: 767px) {
    padding: 3rem 0;
  }

  .featureWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
  }

  p.featureHeader {
    font-size: 3.375rem;
    color: white;
    font-weight: bold;
    line-height: 1.4;
    text-align: center;
  }

  p.featureSubtitle {
    font-size: 1.563rem;
    color: white;
    font-weight: bold;
    line-height: 1.4;
  }

  .simple__card {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    padding: 0;
  }
`;

export default FeatureListSectionWrapper;
