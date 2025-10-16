import React from "react";
import BubbleStyle from "./bubble.style";

const Bubble = ({ position = "bottom center", className, ...props }) => {
  return (
    <BubbleStyle
      className={`${position} ${className || ""}`}
      alt="bubble"
      {...props}
    >
      {props.children}
    </BubbleStyle>
  );
};

export default Bubble;
