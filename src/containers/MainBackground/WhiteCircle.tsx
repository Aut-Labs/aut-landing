import {
  SloganContext,
  sloganAnimationOrder,
} from "containers/sections/Slogan";
import { motion, useTransform } from "framer-motion";
import { memo, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const GWithFilter = styled.g`
  @keyframes hideFilterAnimation {
    to {
      filter: none; /* Or use 'brightness(0)' to completely hide the element */
    }
  }

  &.hide-filter {
    filter: none;
    animation: hideFilterAnimation 2s forwards; /* Adjust time as needed */
  }
`;

const WhiteCircle = () => {
  const { scrollYProgress } = useContext(SloganContext);

  const circleScale = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.sloganEnd,
      sloganAnimationOrder.yourselfStart,
      sloganAnimationOrder.reputationStart,
      sloganAnimationOrder.end,
    ],
    [0, 1, 1, 0]
  );

  const innerCircleScale = useTransform(
    scrollYProgress,
    [sloganAnimationOrder.yourselfStart, sloganAnimationOrder.reputationStart],
    [0.5, 1]
  );

  const innerCircleOpacity = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.sloganEnd,
      sloganAnimationOrder.yourselfStart,
      sloganAnimationOrder.reputationStart,
      sloganAnimationOrder.end,
    ],
    [0, 1, 0.8, 0]
  );

  const [showFilter, setShowFilter] = useState(true);
  const started = useRef(false);

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      if (v >= sloganAnimationOrder.interactionsStart && !started.current) {
        setShowFilter(false);
      } else if (
        v <= sloganAnimationOrder.interactionsStart &&
        started.current
      ) {
        setShowFilter(true);
      }
    });

    return () => {};
  }, [showFilter, scrollYProgress]);

  const fadeOutOpacityStroke = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.startFadeIn,
      sloganAnimationOrder.yourselfStart,
      sloganAnimationOrder.reputationStart,
      sloganAnimationOrder.end,
    ],
    ["0", "2", "4", "5"]
  );

  const fadeOutOpacityStrokeColor = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.startFadeIn,
      sloganAnimationOrder.yourselfStart,
      sloganAnimationOrder.reputationStart,
      sloganAnimationOrder.end,
    ],
    ["#708490", "#556A70", "#3A4050", "#1E2430"]
  );

  return (
    <motion.g
      style={{
        scale: circleScale,
        x: 1232 - 520 / 2,
        y: 454 - 520 / 2,
      }}
    >
      <motion.g
        width={520}
        height={520}
        style={{
          opacity: innerCircleOpacity,
        }}
      >
        <motion.circle
          style={{
            scale: innerCircleScale,
          }}
          opacity="0.24"
          cx="260"
          cy="260"
          r="200"
          fill="#0BA5EC"
        />
        <motion.circle
          style={{
            scale: innerCircleScale,
          }}
          opacity="0.16"
          cx="260"
          cy="260"
          r="260"
          fill="#0BA5EC"
        />
        <motion.circle
          style={{
            scale: innerCircleScale,
          }}
          opacity="0.1"
          cx="260"
          cy="260"
          r="380"
          fill="#0BA5EC"
        />
      </motion.g>

      <svg
        width={520}
        height={520}
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <GWithFilter
          className={showFilter ? "" : "hide-filter"}
          filter="url(#filter0_bdd_1094_44055)"
        >
          <motion.circle
            style={{
              strokeWidth: fadeOutOpacityStroke,
              stroke: fadeOutOpacityStrokeColor,
            }}
            cx={260}
            cy={260}
            r={180}
            fill="#F0F5FF"
          />
        </GWithFilter>
        <path
          d="M260.007 243.583C272.663 243.583 282.923 233.323 282.923 220.667C282.923 208.01 272.663 197.75 260.007 197.75C247.35 197.75 237.09 208.01 237.09 220.667C237.09 233.323 247.35 243.583 260.007 243.583Z"
          stroke="#1E2430"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M296.673 280.249C296.673 270.525 292.81 261.198 285.934 254.322C279.057 247.446 269.731 243.583 260.007 243.583C250.282 243.583 240.956 247.446 234.079 254.322C227.203 261.198 223.34 270.525 223.34 280.249"
          stroke="#1E2430"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="filter0_bdd_1094_44055"
            x={0}
            y={0}
            width={520}
            height={520}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation={8} />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_1094_44055"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={16} />
            <feGaussianBlur stdDeviation={40} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.180392 0 0 0 0 0.564706 0 0 0 0 0.980392 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_backgroundBlur_1094_44055"
              result="effect2_dropShadow_1094_44055"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={4} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.180392 0 0 0 0 0.564706 0 0 0 0 0.980392 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_dropShadow_1094_44055"
              result="effect3_dropShadow_1094_44055"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect3_dropShadow_1094_44055"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </motion.g>
  );
};

export default memo(WhiteCircle);
