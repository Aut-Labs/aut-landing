import React from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import Typography from "common/components/Typography";

const Loading = ({ title, subtitle }) => {
  return (
    <Tooltip
      placement="topLeft"
      overlayClassName="button-tooltip"
      align={{
        offset: [10, 20],
      }}
      overlay={
        <div
          style={{
            width: "325px",
            height: "192px",
          }}
        >
          <Typography
            m="0 0 10px 0"
            color="white"
            as="subtitle1"
            textAlign="left"
          >
            {title}
          </Typography>
          <Typography
            m="0"
            color="nightBlack"
            as="caption"
            textAlign="left"
            fontSize={{
              _: "16px",
            }}
          >
            {subtitle}
          </Typography>
        </div>
      }
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "50%",
            color: "black",
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "50%",
            color: "black",
            width: "70px",
            height: "70px",
            fontSize: "70px",
            lineHeight: "70px",
            zIndex: "2",
          }}
        >
          +
        </div>
        <div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
            zIndex: 1,
          }}
        >
          {/* <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "250px", width: "250px" }}
          /> */}
        </div>
      </div>
    </Tooltip>
  );
};

function CircleImage({ pulseButtons }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 2"
      viewBox="0 0 1600 1601"
    >
      <defs>
        <filter id="outer-glow-1" filterUnits="userSpaceOnUse">
          <feOffset></feOffset>
          <feGaussianBlur result="blur" stdDeviation="100"></feGaussianBlur>
          <feFlood floodColor="#192afc" floodOpacity="1"></feFlood>
          <feComposite in2="blur" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter id="outer-glow-2" filterUnits="userSpaceOnUse">
          <feOffset></feOffset>
          <feGaussianBlur result="blur-2" stdDeviation="100"></feGaussianBlur>
          <feFlood floodColor="#14ecec" floodOpacity="1"></feFlood>
          <feComposite in2="blur-2" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <radialGradient
          id="Degradado_sin_nombre_135"
          cx="1893.71"
          cy="5469.23"
          r="1"
          data-name="Degradado sin nombre 135"
          fx="1893.71"
          fy="5469.23"
          gradientTransform="scale(497.08 -497.08) rotate(-45 -5656.188 5017.752)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.79" stopColor="#192afc" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#14ecec"></stop>
        </radialGradient>
        <radialGradient
          id="Degradado_sin_nombre_139"
          cx="1890.98"
          cy="5470.06"
          r="1"
          data-name="Degradado sin nombre 139"
          fx="1890.98"
          fy="5470.06"
          gradientTransform="scale(361.67 -361.67) rotate(-45 -5659.053 5013.9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.71" stopColor="#192afc" stopOpacity="0"></stop>
          <stop offset="0.99" stopColor="#14ecec"></stop>
        </radialGradient>
        <radialGradient
          id="Degradado_sin_nombre_143"
          cx="1884.88"
          cy="5471.93"
          r="1"
          data-name="Degradado sin nombre 143"
          fx="1884.88"
          fy="5471.93"
          gradientTransform="scale(224.78 -224.78) rotate(-45 -5665.175 5005.05)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.63" stopColor="#192afc" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#14ecec"></stop>
        </radialGradient>
        <radialGradient
          id="Degradado_sin_nombre_147"
          cx="1865.08"
          cy="5477.98"
          r="1"
          data-name="Degradado sin nombre 147"
          fx="1865.08"
          fy="5477.98"
          gradientTransform="scale(100.87 -100.87) rotate(-45 -5685.516 4976.751)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4" stopColor="#192afc" stopOpacity="0"></stop>
          <stop offset="0.96" stopColor="#14ecec"></stop>
        </radialGradient>
      </defs>
      <g>
        <circle
          cx="800"
          cy="800.29"
          r="500"
          fill="#262626"
          filter="url(#outer-glow-1)"
        ></circle>
        <circle
          cx="800"
          cy="800.29"
          r="500"
          fill="#262626"
          filter="url(#outer-glow-2)"
        ></circle>
        <circle
          cx="800"
          cy="800.29"
          r="500"
          fill="url(#Degradado_sin_nombre_135)"
        ></circle>
        <circle
          cx="800"
          cy="800.29"
          r="361.74"
          fill="url(#Degradado_sin_nombre_139)"
        ></circle>
        <circle
          cx="800"
          cy="800.29"
          r="225.08"
          fill="url(#Degradado_sin_nombre_143)"
        ></circle>
        <circle
          cx="800"
          cy="800.29"
          r="104.5"
          fill="url(#Degradado_sin_nombre_147)"
        ></circle>
      </g>

      {pulseButtons.map(({ title, link, subtitle, x, y }, index) => (
        <g
          key={`circle-svg-g-key${index}`}
          transform={`scale(1) translate(${x}, ${y})`}
        >
          <foreignObject
            key={`circle-foreign-object-key${index}`}
            id="pulse_button"
            width="100"
            height="100"
          >
            <Loading link={link} title={title} subtitle={subtitle} />
          </foreignObject>
        </g>
      ))}
    </svg>
  );
}

export default CircleImage;
