import { themeGet } from "@styled-system/theme-get";
import { base } from "common/components/base";
import Section from "common/components/Section";
import styled from "styled-components";
import {
  alignItems,
  display,
  flexDirection,
  gridGap,
  gridTemplateColumns,
  justifyContent,
} from "styled-system";
import BubbleImage from "common/assets/image/bubble.svg";
import Typography from "common/components/Typography";
import Button from "common/components/Button";
import { motion } from "framer-motion";

export const OsFooterSection = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  background: #0f1319;
  height: 50vh;
  position: fixed;
`;

export const Grid = styled<any>("div")`
  display: grid;
  gap: 20px;
  width: 100%;
  ${base}
  ${gridTemplateColumns}
`;

export const AboutUs = styled<any>("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-right: 30%;
  ${alignItems}
`;

export const ColumnTitle = styled(Typography)`
  color: var(--neutral-500, #818ca2);
  font-variant-numeric: lining-nums proportional-nums slashed-zero;
  font-feature-settings: "dlig" on;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  height: 50px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
`;

export const FooterWidgetItem = styled("li")`
  &:last-child {
    margin-bottom: 0;
  }
  a {
    text-transform: inherit;
    color: ${themeGet("colors.textColor")};
  }
  ${base};
`;

export const FooterWidget = styled.div`
  display: flex;
  flex-direction: column;
  &:last-child {
    margin-right: 0;
  }
  ${display}
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${alignItems}
`;

export const ColumnWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: start;
  align-items: start;
  align-content: center;
  display: flex;
  flex-direction: column;

  .footer-link {
    transition: 0.15s ease-in-out;
    &:hover {
      color: ${themeGet("colors.primary")} !important;
    }
  }
`;

export const Social = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 30%;

  ${base}
  ${alignItems}
  ${justifyContent}
`;

export const SocialLinks = styled("div")`
  display: flex;
  align-items: center;

  ${base}
  ${gridGap}
  ${flexDirection}
`;
