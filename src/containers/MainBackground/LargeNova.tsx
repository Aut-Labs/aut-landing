import { memo } from "react";
import novalarge from "common/assets/image/nova_large.png";

export const NovaItem = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="none"
        viewBox="0 0 100 100"
      >
        <circle
          cx="22"
          cy="22.629"
          r="16.343"
          fill="#F0F5FF"
          opacity="0.08"
        ></circle>
        <circle
          cx="22"
          cy="22.629"
          r="10.686"
          fill="#F0F5FF"
          opacity="0.16"
        ></circle>
        <circle
          cx="22"
          cy="22.629"
          r="7.543"
          fill="#F0F5FF"
          opacity="0.24"
        ></circle>
        <circle cx="22" cy="22.629" r="16.343" fill="#F0F5FF"></circle>
        <path
          stroke="#1E2430"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.836"
          d="M17.233 19.433L19.8 22l-2.567 2.567L14.667 22l2.566-2.567zM22 14.667l2.567 2.566L22 19.8l-2.567-2.567L22 14.667z"
        ></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.836"
          d="M26.767 19.433L29.333 22l-2.566 2.567L24.2 22l2.567-2.567zM22 24.2l2.567 2.567L22 29.332l-2.567-2.566L22 24.2z"
        ></path>
      </svg>
    );
  };

const LargeNova = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="258"
      height="258"
      fill="none"
      viewBox="0 0 258 258"
    >
      <circle
        cx="129"
        cy="128.886"
        r="126.975"
        fill="#000"
        fillOpacity="0.01"
        stroke="#36BFFA"
        strokeWidth="2.508"
        opacity="0.16"
      ></circle>
      <circle
        cx="129"
        cy="128.886"
        r="83.603"
        fill="#000"
        fillOpacity="0.01"
        stroke="#36BFFA"
        strokeWidth="2.508"
        opacity="0.32"
      ></circle>
      <circle
        cx="129"
        cy="128.886"
        r="59.089"
        fill="#000"
        fillOpacity="0.01"
        stroke="#36BFFA"
        strokeWidth="2.508"
        opacity="0.64"
      ></circle>
      <circle cx="129" cy="128.886" r="49.029" fill="#1E2430"></circle>
      <circle
        cx="129"
        cy="128.886"
        r="49.029"
        fill="url(#pattern0)"
        style={{ mixBlendMode: "soft-light" }}
      ></circle>
      <path
        stroke="#F0F5FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.508"
        d="M114.7 119.3l7.7 7.7-7.7 7.7-7.7-7.7 7.7-7.7zM129 105l7.7 7.7-7.7 7.7-7.7-7.7 7.7-7.7zM143.3 119.3l7.7 7.7-7.7 7.7-7.7-7.7 7.7-7.7zM129 133.6l7.7 7.7-7.7 7.7-7.7-7.7 7.7-7.7z"
      ></path>
      <defs>
        <pattern
          id="pattern0"
          width="38.462"
          height="38.462"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01923)" xlinkHref="#image0_1_11486"></use>
          <image
            id="image0_1_11486"
            width="2000"
            height="2000"
            xlinkHref={novalarge.src}
          />
        </pattern>
      </defs>
    </svg>
  );
};

export default memo(LargeNova);
