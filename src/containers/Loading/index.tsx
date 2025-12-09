import AutLogo from "common/assets/image/map.png";
import Image from "common/components/Image";
import NewLogo from "common/assets/image/Logo v2.png";

export const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999,
        background: `url(${AutLogo.src}) no-repeat padding-box`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Image
        height={{
          _: "20px",
          xs: "30px",
        }}
        // width="100%"
        src={NewLogo.src}
        alt="New_logo"
      />
      <svg
        width="160"
        height="10"
        viewBox="0 0 160 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            marginTop: "2rem"
        }}
      >
        <rect
          opacity="0.24"
          x="0"
          y="0"
          width="160"
          height="6"
          rx="3"
          fill="#F0F5FF"
        ></rect>
        <rect x="0" y="0" width="0" height="6" rx="3" fill="#14ECEC">
          <animate
            attributeName="width"
            from="0"
            to="160"
            dur="1.5s"
            repeatCount="1"
            fill="freeze"
          />
        </rect>
        {/* <defs>
          <filter
            id="filter0_dddddd_463_86450"
            x="0"
            y="0"
            width="320"
            height="166"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="16"></feOffset>
            <feGaussianBlur stdDeviation="40"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.180392 0 0 0 0 0.564706 0 0 0 0 0.980392 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
              mode="color-dodge"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_463_86450"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="16"></feOffset>
            <feGaussianBlur stdDeviation="32"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0784314 0 0 0 0 0.784314 0 0 0 0 0.92549 0 0 0 0.64 0"
            ></feColorMatrix>
            <feBlend
              mode="hard-light"
              in2="effect1_dropShadow_463_86450"
              result="effect2_dropShadow_463_86450"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="8"></feOffset>
            <feGaussianBlur stdDeviation="16"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0784314 0 0 0 0 0.784314 0 0 0 0 0.92549 0 0 0 0.32 0"
            ></feColorMatrix>
            <feBlend
              mode="color-dodge"
              in2="effect2_dropShadow_463_86450"
              result="effect3_dropShadow_463_86450"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="16"></feOffset>
            <feGaussianBlur stdDeviation="40"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.180392 0 0 0 0 0.564706 0 0 0 0 0.980392 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
              mode="color-dodge"
              in2="effect3_dropShadow_463_86450"
              result="effect4_dropShadow_463_86450"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="16"></feOffset>
            <feGaussianBlur stdDeviation="32"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0784314 0 0 0 0 0.784314 0 0 0 0 0.92549 0 0 0 0.64 0"
            ></feColorMatrix>
            <feBlend
              mode="hard-light"
              in2="effect4_dropShadow_463_86450"
              result="effect5_dropShadow_463_86450"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="8"></feOffset>
            <feGaussianBlur stdDeviation="16"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0784314 0 0 0 0 0.784314 0 0 0 0 0.92549 0 0 0 0.32 0"
            ></feColorMatrix>
            <feBlend
              mode="color-dodge"
              in2="effect5_dropShadow_463_86450"
              result="effect6_dropShadow_463_86450"
            ></feBlend>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect6_dropShadow_463_86450"
              result="shape"
            ></feBlend>
          </filter>
        </defs> */}
      </svg>
    </div>
  );
};
