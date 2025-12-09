import map from "common/assets/image/map.png";

export const MainBG = ({ width, height }) => {
  return (
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1.38889}
        height={2.35849}
      >
        <use
          xlinkHref="#image0_529_70621"
          transform="scale(0.000694444 0.00117925)"
        />
      </pattern>
      <filter
        id="filter0_f_529_70621"
        x={-1588}
        y={-657}
        width={2772}
        height={2772}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={450}
          result="effect1_foregroundBlur_529_70621"
        />
      </filter>
      <filter
        id="filter1_f_529_70621"
        x={19}
        y={-1834}
        width={3120}
        height={3120}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={450}
          result="effect1_foregroundBlur_529_70621"
        />
      </filter>
      <linearGradient
        id="paint0_linear_529_70621"
        x1={-202}
        y1={243}
        x2={-202}
        y2={1215}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#36BFFA" />
        <stop offset={1} stopColor="#EE46BC" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_529_70621"
        x1={1579}
        y1={-934}
        x2={1579}
        y2={386}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3E1C96" />
        <stop offset={1} stopColor="#FEE4E2" />
      </linearGradient>
      <clipPath id="clip0_529_70621">
        <rect width={width} height={height} fill="white" />
      </clipPath>
      <image
        id="image0_529_70621"
        width={2000}
        height={2000}
        xlinkHref={map.src}
      />
    </defs>
  );
};
