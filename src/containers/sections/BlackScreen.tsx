import { useTransform, motion, useScroll, motionValue } from "framer-motion";
import Typography from "common/components/Typography";
import Box from "common/components/Box";
import { stylesWithCssVar } from "utils/motion";
import { memo, useContext, useEffect, useRef } from "react";

import React from "react";

const initialState = {
  scrollYProgress: motionValue(0),
};

export const BlackScreenContext =
  React.createContext<typeof initialState>(initialState);

export const BlackScreenProvider = ({ children }) => {
  return (
    <BlackScreenContext.Provider value={initialState}>
      {children}
    </BlackScreenContext.Provider>
  );
};

const BlackScreen = () => {
  const { scrollYProgress: scrollY } = useContext(BlackScreenContext);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      scrollY.set(v);
    });
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const zIndex = useTransform(scrollYProgress, (pos) => (pos >= 0.7 ? 0 : 2));
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <motion.section
      className="black-screen relative h-screen"
      style={{ zIndex }}
      ref={targetRef}
    >
      <motion.div
        style={{
          background: "#0f1319",
          opacity,
          position: "fixed",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <motion.div
            style={stylesWithCssVar({
              opacity: textOpacity,
            })}
          >
            <Typography color="white" as="subtitle1" textAlign="center">
              Measure the True Value of your Participation.
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
      <motion.svg
        width="28"
        height="36"
        viewBox="0 0 28 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "fixed",
          bottom: "0rem",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: scrollOpacity,
        }}
      >
        <g filter="url(#filter0_d_458_17861)">
          <rect
            x="4.5"
            y="0.5"
            width="19"
            height="27"
            rx="9.5"
            stroke="#F0F5FF"
          />
        </g>
        <path
          id="arrow"
          d="M14 20l-4-4m4 4l4-4m-4 4V10"
          stroke="#F0F5FF"
          stroke-width="2"
          fill="none"
        />
        <defs>
          <filter
            id="filter0_d_458_17861"
            x="0"
            y="0"
            width="28"
            height="36"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_458_17861"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_458_17861"
              result="shape"
            />
          </filter>
        </defs>
      </motion.svg>
    </motion.section>
  );
};

export default memo(BlackScreen);
