import { motion, useTransform } from "framer-motion";
import { memo, useContext, useEffect, useMemo } from "react";
import FallenBackground from "./Fallen";
import { useDeviceSize } from "common/utils/use-device-size";
import { AutOSContext } from "./AutOS";

const CrackBackground = () => {
  const { scrollYProgress } = useContext(AutOSContext);
  const { width, height } = useDeviceSize();
  const { scale, translateX, translateY } = useMemo(() => {
    const designWidth = 1440;
    const designHeight = 800;

    // Calculate scale factors
    let scaleX = width / designWidth;
    let scaleY = height / designHeight;

    // Use the smaller scale factor to keep the aspect ratio
    let scale = Math.min(scaleX, scaleY);

    // Centre the design if the aspect ratios don't match
    let translateX = (width - designWidth * scale) / 2;
    let translateY = (height - designHeight * scale) / 2;

    return {
      scale,
      translateX,
      translateY,
    };
  }, [width, height]);

  const opacity = useTransform(scrollYProgress, [0.5, 0.95], [1, 1]);
  const opacityMain = useTransform(scrollYProgress, [0.5, 0.95], [0, 1]);
  const color = useTransform(scrollYProgress, [0.5, 0.95], ["#0F1319", "#FFF"]);
  const rotate = useTransform(scrollYProgress, [0.5, 0.95], [0, 100]);
  const translate = useTransform(scrollYProgress, [0.5, 0.95], [0, 120]);

  return (
    <svg
      style={{
        position: "fixed",
        top: 0,
      }}
      viewBox={`0 0 ${width} ${height}`}
      fill="#FFF"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        transform={`translate(${translateX}, ${translateY}) scale(${scale},${scale})`}
      >
        <g clipPath="url(#clip0_450_95983)">
          <path fill="#0F1319" d="M0 0H1440V800H0z"></path>
          <mask
            id="mask0_450_95983"
            style={{ maskType: "alpha" }}
            width="1560"
            height="767"
            x="-47"
            y="26"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#E7EDF9"
              d="M1339 776.775l-89.5-18.519-70.67 34.401L1021 727l-191.5 31.256L681.5 745l-104.399 31.775L333 755l-130.469 37.657L-35 758.256V654.953L67 595l-34-38.5 104.5-58-11.7-50-172.3-36 30.5-116-19-70.5 132.53-38.5L48 168 67 60.5 202.531 26 339.84 60.5 546.5 49l135 33.61L841.5 34 905 60.5 1021 26l57 44.5 126 44.81L1356 26l34 75-62.5 67 152.5 43.5 32.5 137.5L1390 461l37.5 101.5-49 92.453L1399 727l-60 49.775z"
            ></path>
          </mask>
          <g mask="url(#mask0_450_95983)">
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate: rotate,
              }}
              d="M1151.42 781.5l24.08-48.5-24.08-73.626-28.58 7.165-23.05-14.77-21.7 14.77L1050.97 637l-56.948 44.308L933 707.154l13.5 31.346L1021 727l130.42 54.5zM1389 460.5l37.5 102-234.71 8.5-73.73-79.67-21.06-74.176L1191.79 321 1513 348.5l-124 112z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate: rotate,
              }}
              d="M1050.28 637L1195 572.606 1118.5 494l-140.573-31L892 558.906 1050.28 637z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate,
              }}
              d="M1098 415.86l21 79.14-140.999-31.383L933 385.841 1011 349l87 66.86z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate,
              }}
              d="M1096.51 417l96.49-95.73-13.57-51.967-37.69-41.027 19.6-6.838-19.6-57.438-70.86 36.925L997 259.73l12.06 87.524L1096.51 417z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate,
              }}
              d="M1192.5 321.5l320 27-32.5-137-153.5-43.5-50 68.5-51-63s-51.33 12-74 18.5l9.5 29.5-19.5 6.5 38 41.5 13 52zM997.935 260L1010 348.791l-81.442 38.248v43.713L836.557 469 734 365.183l102.557-87.425L997.935 260z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate,
              }}
              d="M928 387l4-2 46 77.92L892 559l33.231 14.649L893.569 642l-186.955-41.011L684 471.122l116.308-38.227L835.5 469l92.5-38v-44z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate,
              }}
              d="M1051 637l-127-62-30 67-151.439-33.648L729 749.763l100 8.737 117.5-19-14.067-33.248L994.5 681l56.5-44z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate,
              }}
              d="M706.815 601.374L743 608.181 729.5 749.5l-45-5L577.144 776l-80.644-6.5L452 647.663 577.144 551l122.131 10.892 7.54 39.482zM1072.3 200.794l-73.7 58.515L840.662 277 782 180.381l21.057-133.36L841.5 34l63 26 116.66-34v113.557L1143 164.052l-70.7 36.742zM283.841 219.966L375 370.329l-144.975 44.81L121.295 448-46.5 412l30-115.5-19-71 134-38.5 185.341 32.966zM574.421 219L596.5 62l-51-13.5-207 13.5-21.62 58-7.671 31 15.343 25L284 219l90.964 151L499.9 415h37.262l-20.824-73 89.866-32L661 267l-86.579-48zM-35.344 679v78.5L201 791.5l-30.779-51.977 30.779-49.609L-35.344 679z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate,
              }}
              d="M168 739.149l35.036-51.816 110.802-31.359L387.503 622l64.208 24.009L496 769l-163.5-14.5-129.464 37L168 739.149z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate,
              }}
              d="M452.997 648.586l102.002-79.556-35.949-6.12-62.707-52.782-41.805 7.65L307.518 478l-115.519 79.5L134.5 500 33 557.5l33.5 39L-36 657v21.5l236.5 10L315 657l72.782-33.658 65.215 25.244z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate,
              }}
              d="M438.401 497.03L502 414.455 375.64 369 125 447l12 52 55 59 112.51-80.667L414.97 519l41.841-6.061-18.41-15.909zM733.599 286l-49.561-36.846-26.768 19.771L575 217.287 598 61l83 21.5L801.885 47l-22.028 134.438L814 234.217 733.599 286z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate,
              }}
              d="M612.501 425.19l71.5 44.81L801.7 433.156l-68.2-68.709L838 277.814 813.8 234l-80.3 51.781-49.499-36.845-26.734 19.77-51.367 37.986-86.9 32.86 17.583 76.792 75.918 8.846z"
            ></motion.path>
            <motion.path
              style={{
                x: translate,
                y: translate,
                fill: color,
                opacity,
                rotate,
              }}
              d="M684.587 471.372L700 563.961l-124.396-11.07L555.789 570l-36.327-6.039L438 498.545 501.848 413l35.21 4.143 75.975 8.94 71.554 45.289zM1078.5 667l-28-30 142.5-65 233-9-48.5 92.5L1398 727l-59 48-89.5-17.5-70 35.5-28-11.5L1177 733l-25.5-73.5-28 5-23-11.5-22 14zM1389.5 101.5L1356 26l-152 89.5-127-46-56-43.5v113l121 24 10 29 73.5-18.5 51.5 63 49.5-68.5 63-66.5zM282.5 220l41.5-44.5-15.5-25L317 120l21-59-135-34L68.5 61 48 167l49.5 20.5 185 32.5z"
            ></motion.path>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_450_95983">
            <path fill="#fff" d="M0 0H1440V800H0z"></path>
          </clipPath>
        </defs>

        <motion.g
          style={{
            opacity: opacityMain,
          }}
        >
          <FallenBackground width={width} height={height} />
        </motion.g>

        <path
          fill="#0F1319"
          d="M987.5 423.5l-32-51.5-43-35.5 23.5-41-16.5-70.5-92.5 10-61-22-129 22-77.5-10-35.5 43 11 40-50 18.5 20.5 29.5-28.5 47 37.5 59.5-17.5 72 69.5 19.5 78.5 30.5 90.5-13.5 78.5 20.5 85-37.5 9-73.5 79.5-57z"
        ></path>
      </g>
    </svg>
  );
};

export default memo(CrackBackground);
