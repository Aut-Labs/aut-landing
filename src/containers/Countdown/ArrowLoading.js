import React, { useState, useEffect } from "react";


const ArrowLoading = () => {
  const [content, setContent] = useState('');
  useEffect(() => {
    const start = async () => {
      const animationData = await import("common/assets/Scroll_Down_Animation.json");
      const { Player } = await import("@lottiefiles/react-lottie-player");
      setContent(
        <Player
          autoplay
          loop
          src={animationData}
          style={{ height: "100%", width: "100%" }}
        />
      );
    };
    if (!content) {
        start();
    }
  }, [content]);

  return content;
};

export default ArrowLoading;
