import styled from "styled-components";
import { alignItems } from "styled-system";
import { base } from "../base";

const NewsletterFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  justify-content: flex-end;

  input {
    font-size: 18px;
    height: 40px;
    color: white;
    background: transparent;
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 990px) {
      justify-content: flex-start;
    }
  }

    .form-fields {
      width: 100%;
    }

    .form-field {
      width: 100%;
      input {
        font-size: 14px;
        height: 35px;
      }
    }
  }

  ${base}
  ${alignItems}
`;

export const CountdownNewsletterFormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  ${base}
  ${alignItems}
`;

export const CountDownNewsletterFieldButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  border-image: linear-gradient(90deg, #82FBFB,#05D1D1);

  input {
    font-size: 18px;
    height: 40px;
    color: white;
    background: transparent;
  }

  .submit-btn {
    display: flex;
    justify-content: center;
  }

    .form-fields {
      width: 100%;
    }

    .form-field {
      width: 100%;
      input {
        font-size: 14px;
        height: 35px;
        border-bottom: 0;
        color: white;
      }
    }
  }

  ${base}
  ${alignItems}
`;

export default NewsletterFormWrapper;
