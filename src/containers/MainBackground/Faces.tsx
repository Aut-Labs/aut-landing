import {
  motion,
  transform,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const animationOrder = {
  initial: 0,
  showParagraphOne: 0.15,
  showCircleImage: 0.25,
  showParagraphTwo: 0.4,
  showParagraphThree: 0.5,
  showParagraphFour: 0.6,
  showParagraphTwoLine: 0.65,
  showParagraphThreeLine: 0.7,
  showParagraphFourLine: 0.75,

  startHide: 0.85,
  endHide: 1,
};

const animationOrderRep = {
  initial: 0,
  showParagraphOne: 0.2,
  showParagraphTwo: 0.3,
  showCircleImage: 0.5,
  growCircleImage: 0.7,
  startHide: 0.85,
  endHide: 1,
};

const Faces = ({ dimensions, parentRef, repParentRef }: any) => {
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: repParentRefScrollY } = useScroll({
    target: repParentRef,
    offset: ["start end", "end end"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [animationOrder.initial, animationOrder.showCircleImage],
    [0, 1]
  );

  const imageScale2 = useTransform(
    scrollYProgress,
    [animationOrder.initial, animationOrder.showParagraphFour],
    [0, 1]
  );

  const fadeOutOpacity = useTransform(
    repParentRefScrollY,
    [animationOrderRep.showParagraphTwo, animationOrderRep.startHide],
    [1, 0]
  );

  const faceToZoomScale = useTransform(
    repParentRefScrollY,
    [animationOrderRep.showParagraphTwo, animationOrderRep.startHide],
    [1, 2]
  );

  const faceToZoomStrokeColor = useTransform(
    repParentRefScrollY,
    [animationOrderRep.showParagraphTwo, animationOrderRep.startHide],
    ["#fff", "#1E2430"]
  );

  const fadeOutOpacityS = useTransform(
    repParentRefScrollY,
    [animationOrderRep.showParagraphTwo, animationOrderRep.startHide],
    [1, 0.8]
  );

  const fadeOutOpacityStroke = useTransform(
    repParentRefScrollY,
    [animationOrderRep.showParagraphTwo, animationOrderRep.startHide],
    [0, "6"]
  );

  const fadeOutOpacityStrokeColor = useTransform(
    repParentRefScrollY,
    [animationOrderRep.showParagraphTwo, animationOrderRep.startHide],
    ["1E2430", "#1E2430"]
  );

  const face1MovementX = useTransform(
    repParentRefScrollY,
    [animationOrderRep.growCircleImage, animationOrderRep.startHide],
    [0, 510 - 323]
  );

  const face1MovementY = useTransform(
    repParentRefScrollY,
    [animationOrderRep.growCircleImage, animationOrderRep.startHide],
    [0, 182 - 361]
  );

  const face2MovementX = useTransform(
    repParentRefScrollY,
    [animationOrderRep.growCircleImage, animationOrderRep.startHide],
    [0, 510 - 160]
  );

  const face2MovementY = useTransform(
    repParentRefScrollY,
    [animationOrderRep.growCircleImage, animationOrderRep.startHide],
    [0, 182 - 200]
  );

  const designWidth = 1440;
  const designHeight = 800;

  // Calculate scale factors
  let scaleX = dimensions.width / designWidth;
  let scaleY = dimensions.height / designHeight;

  // Use the smaller scale factor to keep the aspect ratio
  let scale = Math.min(scaleX, scaleY);

  // Centre the design if the aspect ratios don't match
  let translateX = (dimensions.width - designWidth * scale) / 2;
  let translateY = (dimensions.height - designHeight * scale) / 2;

  return (
    <g
      transform={`translate(${translateX}, ${translateY}) scale(${scale},${scale})`}
    >
      <motion.g
        style={{
          x: face1MovementX,
          y: face1MovementY,
        }}
      >
        <circle
          cx={323}
          cy={361}
          r={25.335}
          fill="black"
          fillOpacity={0.01}
          stroke="#F0F5FF"
          strokeWidth={1.33}
        />
        <path
          d="M322.999 361.167C326.221 361.167 328.833 358.555 328.833 355.333C328.833 352.112 326.221 349.5 322.999 349.5C319.778 349.5 317.166 352.112 317.166 355.333C317.166 358.555 319.778 361.167 322.999 361.167Z"
          stroke="#F0F5FF"
          strokeWidth={1.33}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M332.333 370.5C332.333 368.024 331.349 365.651 329.599 363.9C327.849 362.15 325.475 361.167 322.999 361.167C320.524 361.167 318.15 362.15 316.4 363.9C314.649 365.651 313.666 368.024 313.666 370.5"
          stroke="#F0F5FF"
          strokeWidth={1.33}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>

      <circle
        id="face-to-zoom"
        cx={1074}
        cy={744}
        r={25.335}
        fill="black"
        stroke="#F0F5FF"
        fillOpacity={0.01}
        strokeWidth={1.33}
      />
      <path
        d="M1074 744.167C1077.22 744.167 1079.83 741.555 1079.83 738.333C1079.83 735.112 1077.22 732.5 1074 732.5C1070.78 732.5 1068.17 735.112 1068.17 738.333C1068.17 741.555 1070.78 744.167 1074 744.167Z"
        strokeWidth={1.33}
        stroke="#F0F5FF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1083.33 753.5C1083.33 751.024 1082.35 748.651 1080.6 746.9C1078.85 745.15 1076.47 744.167 1074 744.167C1071.52 744.167 1069.15 745.15 1067.4 746.9C1065.65 748.651 1064.67 751.024 1064.67 753.5"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx={90}
        cy={451}
        r={25.335}
        fill="black"
        fillOpacity={0.01}
        stroke="#F0F5FF"
        strokeWidth={1.33}
      />
      <path
        d="M89.9993 451.167C93.221 451.167 95.8327 448.555 95.8327 445.333C95.8327 442.112 93.221 439.5 89.9993 439.5C86.7777 439.5 84.166 442.112 84.166 445.333C84.166 448.555 86.7777 451.167 89.9993 451.167Z"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M99.3327 460.5C99.3327 458.024 98.3494 455.651 96.599 453.9C94.8487 452.15 92.4747 451.167 89.9993 451.167C87.524 451.167 85.15 452.15 83.3997 453.9C81.6493 455.651 80.666 458.024 80.666 460.5"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={179}
        cy={814}
        r={25.335}
        fill="black"
        fillOpacity={0.01}
        stroke="#F0F5FF"
        strokeWidth={1.33}
      />
      <motion.g
        style={{
          x: face2MovementX,
          y: face2MovementY,
        }}
      >
        <circle
          cx={160}
          cy={200}
          r={25.335}
          fill="black"
          fillOpacity={0.01}
          stroke="#F0F5FF"
          strokeWidth={1.33}
        />
        <path
          d="M159.999 200.167C163.221 200.167 165.833 197.555 165.833 194.333C165.833 191.112 163.221 188.5 159.999 188.5C156.778 188.5 154.166 191.112 154.166 194.333C154.166 197.555 156.778 200.167 159.999 200.167Z"
          stroke="#F0F5FF"
          strokeWidth={1.33}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M169.333 209.5C169.333 207.024 168.349 204.651 166.599 202.9C164.849 201.15 162.475 200.167 159.999 200.167C157.524 200.167 155.15 201.15 153.4 202.9C151.649 204.651 150.666 207.024 150.666 209.5"
          stroke="#F0F5FF"
          strokeWidth={1.33}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      <circle
        cx={302}
        cy={592.167}
        r={25.335}
        fill="black"
        fillOpacity={0.01}
        stroke="#F0F5FF"
        strokeWidth={1.33}
      />
      <path
        d="M301.999 592.334C305.221 592.334 307.833 589.722 307.833 586.5C307.833 583.279 305.221 580.667 301.999 580.667C298.778 580.667 296.166 583.279 296.166 586.5C296.166 589.722 298.778 592.334 301.999 592.334Z"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M311.333 601.667C311.333 599.191 310.349 596.818 308.599 595.067C306.849 593.317 304.475 592.333 301.999 592.333C299.524 592.333 297.15 593.317 295.4 595.067C293.649 596.818 292.666 599.191 292.666 601.667"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={510}
        cy={182}
        r={25.335}
        fill="black"
        fillOpacity={0.01}
        stroke="#F0F5FF"
        strokeWidth={1.33}
      />
      <path
        d="M509.999 182.167C513.221 182.167 515.833 179.555 515.833 176.333C515.833 173.112 513.221 170.5 509.999 170.5C506.778 170.5 504.166 173.112 504.166 176.333C504.166 179.555 506.778 182.167 509.999 182.167Z"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M519.333 191.5C519.333 189.024 518.349 186.651 516.599 184.9C514.849 183.15 512.475 182.167 509.999 182.167C507.524 182.167 505.15 183.15 503.4 184.9C501.649 186.651 500.666 189.024 500.666 191.5"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={946}
        id="face-to-zoom"
        cy={626}
        r={25.335}
        fill="black"
        fillOpacity={0.01}
        stroke="#F0F5FF"
        strokeWidth={1.33}
      />
      <path
        d="M945.999 626.167C949.221 626.167 951.833 623.555 951.833 620.333C951.833 617.112 949.221 614.5 945.999 614.5C942.778 614.5 940.166 617.112 940.166 620.333C940.166 623.555 942.778 626.167 945.999 626.167Z"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M955.333 635.5C955.333 633.024 954.349 630.651 952.599 628.9C950.849 627.15 948.475 626.167 945.999 626.167C943.524 626.167 941.15 627.15 939.4 628.9C937.649 630.651 936.666 633.024 936.666 635.5"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx={1232}
        id="zoom-face"
        cy={454}
        r={25.335}
        fill="black"
        fillOpacity={0.01}
        stroke="#F0F5FF"
        strokeWidth={1.33}
      />
      <path
        d="M1232 454.167C1235.22 454.167 1237.83 451.555 1237.83 448.333C1237.83 445.112 1235.22 442.5 1232 442.5C1228.78 442.5 1226.17 445.112 1226.17 448.333C1226.17 451.555 1228.78 454.167 1232 454.167Z"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1241.33 463.5C1241.33 461.024 1240.35 458.651 1238.6 456.9C1236.85 455.15 1234.47 454.167 1232 454.167C1229.52 454.167 1227.15 455.15 1225.4 456.9C1223.65 458.651 1222.67 461.024 1222.67 463.5"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        id="face-to-zoom"
        cx={1357}
        cy={92}
        r={25.335}
        fill="black"
        fillOpacity={0.01}
        stroke="#F0F5FF"
        strokeWidth={1.33}
      />
      <path
        d="M1357 92.1667C1360.22 92.1667 1362.83 89.555 1362.83 86.3333C1362.83 83.1117 1360.22 80.5 1357 80.5C1353.78 80.5 1351.17 83.1117 1351.17 86.3333C1351.17 89.555 1353.78 92.1667 1357 92.1667Z"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1366.33 101.5C1366.33 99.0245 1365.35 96.6505 1363.6 94.9002C1361.85 93.1498 1359.47 92.1665 1357 92.1665C1354.52 92.1665 1352.15 93.1498 1350.4 94.9002C1348.65 96.6505 1347.67 99.0245 1347.67 101.5"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={873}
        cy={88}
        r={25.335}
        fill="black"
        fillOpacity={0.01}
        stroke="#F0F5FF"
        strokeWidth={1.33}
      />
      <path
        d="M872.999 88.1667C876.221 88.1667 878.833 85.555 878.833 82.3333C878.833 79.1117 876.221 76.5 872.999 76.5C869.778 76.5 867.166 79.1117 867.166 82.3333C867.166 85.555 869.778 88.1667 872.999 88.1667Z"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M882.333 97.4998C882.333 95.0245 881.349 92.6505 879.599 90.9002C877.849 89.1498 875.475 88.1665 872.999 88.1665C870.524 88.1665 868.15 89.1498 866.4 90.9002C864.649 92.6505 863.666 95.0245 863.666 97.4998"
        stroke="#F0F5FF"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <motion.g
        style={{
          scale: imageScale,
          x: 1232 - 520 / 2,
          y: 454 - 520 / 2,
        }}
      >
        <motion.g
          width={520}
          height={520}
          style={{
            opacity: fadeOutOpacity,
          }}
        >
          <motion.circle
            style={{
              scale: imageScale2,
            }}
            opacity="0.24"
            cx="260"
            cy="260"
            r="200"
            fill="#0BA5EC"
          />
          <motion.circle
            style={{
              scale: imageScale2,
            }}
            opacity="0.16"
            cx="260"
            cy="260"
            r="260"
            fill="#0BA5EC"
          />
          <motion.circle
            style={{
              scale: imageScale2,
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
          <circle opacity={0.08} cx={260} cy={260} r={140} fill="#0BA5EC" />
          <circle opacity={0.16} cx={260} cy={260} r={90} fill="#0BA5EC" />
          <circle opacity={0.24} cx={260} cy={260} r={70} fill="#0BA5EC" />

          <g filter="url(#filter0_bdd_1094_44055)">
            <motion.circle
              style={{
                scale: fadeOutOpacityS,
                strokeWidth: fadeOutOpacityStroke,
                stroke: fadeOutOpacityStrokeColor,
              }}
              cx={260}
              cy={260}
              r={180}
              fill="#F0F5FF"
            />
          </g>
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
    </g>
  );
};

export default Faces;
