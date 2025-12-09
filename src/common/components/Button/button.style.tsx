import styled from "styled-components";
import { variant, alignItems, boxShadow, fontWeight } from "styled-system";
import { buttonStyle, colorStyle, sizeStyle } from "../customVariant";
import { themeGet } from "@styled-system/theme-get";
import { base } from "../base";

export const buttonStyles: any = {
  normal: {
    fontFamily: "var(--fractul-alt-light)",
    letterSpacing: "0.01em",
    fontSize: {
      _: "14px",
      xs: "16px",
      sm: "16px",
      md: "16px",
      xxl: "20px",
    },
    paddingTop: {
      _: "8px",
      xs: "10px",
      sm: "12px",
      md: "12px",
      xxl: "18px",
    },
    paddingBottom: {
      _: "8px",
      xs: "10px",
      sm: "12px",
      md: "12px",
      xxl: "18px",
    },
    paddingLeft: {
      _: "16px",
      xs: "32px",
      sm: "40px",
      md: "48px",
      xxl: "90px",
    },
    paddingRight: {
      _: "16px",
      xs: "32px",
      sm: "40px",
      md: "48px",
      xxl: "90px",
    },
  },
  chunky: {
    fontFamily: "var(--fractul-alt-light)",
    letterSpacing: "0.01em",
    fontSize: {
      _: "14px",
      xs: "16px",
      sm: "16px",
      md: "20px",
      xxl: "24px",
    },
    paddingTop: {
      _: "16px",
      xs: "16px",
      sm: "24px",
      md: "24px",
      xxl: "40px",
    },
    paddingBottom: {
      _: "16px",
      xs: "16px",
      sm: "24px",
      md: "24px",
      xxl: "40px",
    },
    paddingLeft: {
      _: "16px",
      xs: "32px",
      sm: "40px",
      md: "48px",
      xxl: "90px",
    },
    paddingRight: {
      _: "16px",
      xs: "32px",
      sm: "40px",
      md: "48px",
      xxl: "90px",
    },
  },
  square: {
    fontFamily: "var(--fractul-alt-light)",
    letterSpacing: "0.01em",
    borderRadius: 0,
    fontSize: {
      _: "14px",
      xs: "16px",
      sm: "16px",
      md: "16px",
      xxl: "20px",
    },
    paddingTop: {
      _: "8px",
      xs: "12px",
      sm: "14px",
      md: "14px",
      xxl: "22px",
    },
    paddingLeft: {
      _: "17px",
      xs: "18px",
      sm: "22px",
      md: "24px",
      xxl: "30px",
    },
    paddingBottom: {
      _: "17px",
      xs: "18px",
      sm: "22px",
      md: "24px",
      xxl: "30px",
    },
  },
};

const ButtonStyle = styled("button")`
  cursor: pointer;
  outline: none;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  background-color: ${themeGet("colors.transparent")};

  &[disabled],
  &[disabled]:hover {
    //TODO: Change after coming soon phase
    cursor: unset;
    // background-color: ${themeGet("colors.transparent")};
    // color: ${themeGet("colors.textDisabled")};
    background-color: #2f3746;
    color: #818ca2;
    border-color: ${themeGet("colors.borderDisabled")};
  }

  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: ${themeGet("space.2", "8")}px;
      padding-right: ${themeGet("space.2", "8")}px;
    }

    .reusecore__loader {
      margin-left: 4px;
    }
  }

  ${alignItems}
  ${boxShadow}
  ${buttonStyle}
  ${colorStyle}
  ${sizeStyle}
  ${fontWeight}
  ${base}

  &.gradient {
    border-radius: 6px;
    background: linear-gradient(180deg, #1bbbff 0%, #2447ff 100%);

    box-shadow: 0px 16px 64px 0px rgba(46, 144, 250, 0.64),
      0px 8px 32px 0px rgba(20, 200, 236, 0.32),
      0px 0px 16px 0px rgba(20, 200, 236, 0.32);
    backdrop-filter: blur(8px);
    border: none;
    .btn-title {
      line-height: 26px; /* 162.5% */
      letter-spacing: 0.66px;
      background: linear-gradient(180deg, #2d3282 20%, #112bb3 80%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:hover {
      border-radius: 6px;
      background: linear-gradient(
          0deg,
          rgba(20, 236, 236, 0.64) 0%,
          rgba(20, 236, 236, 0.64) 100%
        ),
        linear-gradient(180deg, #1bbbff 0%, #2447ff 100%);

      /* New/buttonOnHover */
      box-shadow: 0px 16px 80px 0px #256bb0,
        0px 16px 64px 0px rgba(37, 107, 176, 1),
        0px 8px 32px 0px rgba(37, 107, 176, 1);
      backdrop-filter: blur(8px);
      .btn-title {
        color: white;
      }
    }
  }
`;

// prop types can also be added from the style functions
ButtonStyle.propTypes = {};

ButtonStyle.displayName = "ButtonStyle";

export default ButtonStyle;
