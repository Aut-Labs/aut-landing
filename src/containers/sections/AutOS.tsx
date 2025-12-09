import { memo, useContext, useEffect, useRef, useState } from "react";
import {
  motion,
  motionValue,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import Image from "common/components/Image";
import Typography from "common/components/Typography";
import AutOSLogo from "common/assets/AutOSLogoV2.svg";
import CrackBackground from "./Cracks";
import { OSFooterContext } from "./OSFooter";
import React from "react";

export const sloganAnimationOrder = {
  initial: 0,
  startFadeIn: 0.1,
  sloganEnd: 0.25,
  yourselfStart: 0.35,
  outsideStart: 0.38,
  break: 0.6,
  reputationStart: 0.7,
  interactionsStart: 0.8,
  end: 0.85,
  final: 0.95,
};

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountDownWidget = styled("li")`
  &:last-child {
    margin-bottom: 0;
  }
  a {
    text-transform: inherit;
    color: ${themeGet("colors.textColor")};
    &:hover {
      color: ${themeGet("colors.white")};
    }
  }
`;

export const WidgetList = styled("ul")`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const ClaimIdButton = styled("button")`
  cursor: pointer;
  background: #e7edf9;
  display: inline-flex;
  color: #1e2430;
  border-radius: 12px;
  height: 40px;
  min-width: 16rem;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  &:hover {
    background: #2e90fa;
    color: white;

    .zoom-rect {
      transition: all 0.3s ease;
      width: 14px;
      height: 14px;
      rx: 14;
      x: 11;
      y: 0.5;
      stroke: #000;
      stroke-width: 2;
    }
  }

  ${themeGet("mediaQueries.sm")} {
    height: 48px;
    min-width: 18rem;
  }
`;

const initialState = {
  scrollYProgress: motionValue(0),
};

export const AutOSContext =
  React.createContext<typeof initialState>(initialState);

export const AutOSProvider = ({ children }) => {
  return (
    <AutOSContext.Provider value={initialState}>
      {children}
    </AutOSContext.Provider>
  );
};

const AutOS = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: footerScrollYProgress } =
    useContext(OSFooterContext);
  const { scrollYProgress: scrollY } = useContext(AutOSContext);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  // Main content opacity and translateY
  const autOSOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.33], ["100%", "0%"]);

  // Additional translateY for the footer (starts from 0% to -50vh)
  const footerTranslateY = useTransform(
    footerScrollYProgress,
    [0, 1],
    ["0%", "-50vh"]
  );

  // Use a motion value to combine the transforms
  const combinedTranslateY = useMotionValue("100%");

  // Effect to combine translateY from main and footer content
  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      scrollY.set(v);
    });
    function updateCombinedTranslateY() {
      const progressValue = translateY.get();
      const footerProgressValue = footerTranslateY.get();

      // Parse progressValue assuming it is in percentage or vh format
      const progressNumber = parseFloat(progressValue);
      // Combine original translateY with additional translateY
      const total = progressNumber + parseFloat(footerProgressValue);

      // Assuming you are using vh, update the motion value
      combinedTranslateY.set(`${total}vh`);
    }

    // Listen for changes on both motion values and update combined value
    const unsubscribeTranslateY = translateY.on(
      "change",
      updateCombinedTranslateY
    );
    const unsubscribeFooterTranslateY = footerTranslateY.on(
      "change",
      updateCombinedTranslateY
    );

    // Cleanup function
    return () => {
      unsubscribeTranslateY();
      unsubscribeFooterTranslateY();
    };
  }, [translateY, footerTranslateY, combinedTranslateY]);

  const [optOut, setOptOut] = useState(false);

  return (
    <section className="aut-os relative z-20 h-[400vh]" ref={targetRef}>
      <motion.div
        style={{
          opacity: autOSOpacity,
          position: "fixed",
          overflow: "unset",
          width: "100vw",
          height: "100%",
          top: 0,
          backgroundColor: "#0F1319",
          y: combinedTranslateY,
        }}
      >
        <div
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="fixed z-10 flex h-screen flex-col items-center justify-center"
        >
          <Image
            className="w-full"
            style={{
              height: "60px",
              marginBottom: "1rem",
            }}
            src={AutOSLogo.src}
            alt="Aut Logo"
          />
          <Typography
            color="white"
            textAlign="center"
            fontWeight="normal"
            fontFamily="var(--fractul-regular)"
            fontSize={{
              _: "14px",
              sm: "16px",
            }}
          >
            The Operating System of yourself
          </Typography>
          <Typography my="4" color="white" textAlign="center" as="subtitle2">
          ĀutOS is the map of your Web3 Interactions. 
            <br /> A Web of Trust - where you get in, by opting out.
          </Typography>
          <>
            <div className="flex">
              <ClaimIdButton onClick={() => setOptOut(!optOut)}>
                <div className="flex items-center justify-center">
                  <div
                    className="relative"
                    style={{
                      width: "35px",
                      height: "20px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="35"
                      fill="none"
                      viewBox="0 0 50 30"
                      className="absolute left-0 top-0"
                    >
                      <rect
                        width="24"
                        height="14"
                        x="0.5"
                        y="0.5"
                        fill="#1E2430"
                        rx="7"
                      ></rect>
                      <rect
                        className="zoom-rect"
                        width="10"
                        height="10"
                        x="12.5"
                        y="2.5"
                        fill="#E7EDF9"
                        rx="5"
                      ></rect>
                    </svg>
                  </div>
                  <Typography
                    fontFamily="var(--fractul-bold)"
                    fontWeight="bold"
                    fontSize="16px"
                  >
                    Claim ĀutID
                  </Typography>
                </div>
              </ClaimIdButton>
            </div>
          </>
        </div>
        <CrackBackground />
      </motion.div>
    </section>
  );
};

export default memo(AutOS);
