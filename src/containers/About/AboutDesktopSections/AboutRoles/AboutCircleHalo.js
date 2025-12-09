import Typography from "common/components/Typography";

function AboutCircleHalo({ text, height, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 2"
      viewBox={`0 0 ${height} ${width}`}
      height={height}
      width={width}
    >
      <defs>
        <filter id="outer-glow-1" filterUnits="userSpaceOnUse">
          <feOffset></feOffset>
          <feGaussianBlur
            result="blur"
            stdDeviation={width / 16.55}
          ></feGaussianBlur>
          <feFlood floodColor="#192afc" floodOpacity="1"></feFlood>
          <feComposite in2="blur" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter id="outer-glow-2" filterUnits="userSpaceOnUse">
          <feOffset></feOffset>
          <feGaussianBlur
            result="blur-2"
            stdDeviation={width / 16.55}
          ></feGaussianBlur>
          <feFlood floodColor="#14ecec" floodOpacity="1"></feFlood>
          <feComposite in2="blur-2" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
      </defs>
      <g>
        <circle
          cx={height / 2}
          cy={width / 2}
          r={height / 3.975}
          fill="#262626"
          filter="url(#outer-glow-1)"
        ></circle>
        <circle
          cx={height / 2}
          cy={width / 2}
          r={height / 3.975}
          fill="#262626"
          filter="url(#outer-glow-2)"
        ></circle>
        <circle
          cx={height / 2}
          cy={width / 2}
          r={height / 2}
          fill="none"
          stroke="#ebebf2"
          strokeMiterlimit="10"
          opacity="0.4"
        ></circle>
      </g>
      <foreignObject
        width={`${width}px`}
        height={`${height}px`}
        position="absolute"
        style={{
          overflow: "visible",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            m="0"
            color="white"
            as="subtitle2"
            fontWeight="regular"
            textAlign="center"
            style={{
              maxWidth: `${width / 2}px`,
            }}
          >
            {text}
          </Typography>
        </div>
      </foreignObject>
    </svg>
  );
}

export default AboutCircleHalo;
