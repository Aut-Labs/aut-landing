import styled from "styled-components";
import BubbleImage2 from "common/assets/image/bubble2.svg";
import themeGet from "@styled-system/theme-get";

// export const PlayerWrapper = styled(Player)`
//   ${base}
// `;

const PortalArea = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;

  ${themeGet("mediaQueries.md")} {
    &:before {
      content: " ";
      display: block;
      position: absolute;
      filter: blur(50px);
      -webkit-filter: blur(50px);
      transform: rotate(-50deg);
      left: -800px;
      scale: 0.8;
      z-index: 9999;
      top: -500px;
      width: 1000px;
      height: 1000px;
      background-image: url(${BubbleImage2.src});
    }
  }

  ${themeGet("mediaQueries.xxl")} {
    &:before {
      scale: 1;
      left: -850px;

    }
  }
`;

export default PortalArea;
