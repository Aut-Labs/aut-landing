import { SloganContext, sloganAnimationOrder } from "containers/sections/Slogan";
import { useTransform, motion, useAnimation } from "framer-motion";
import { memo, useContext, useEffect, useRef } from "react";

const WhiteBG = () => {
  const { scrollYProgress } = useContext(SloganContext);

  const scale = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.reputationStart,
      sloganAnimationOrder.interactionsStart,
      sloganAnimationOrder.end,
    ],
    [0, 52, 1]
  );

  const translateX = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.reputationStart,
      sloganAnimationOrder.end,
    ],
    [1423.5 - 27 / 2, 1270]
  );

  const translateY = useTransform(
    scrollYProgress,
    [
      sloganAnimationOrder.reputationStart,
      sloganAnimationOrder.end,
    ],
    [630 - 28 / 2, 455]
  );

  const faceScaleCtrl = useAnimation();
  const isMounted = useRef(true);
  const started = useRef(false);

  useEffect(() => {
    scrollYProgress.on("change", async (v) => {
      if (!isMounted.current) return;

      if (v >= sloganAnimationOrder.final && !started.current) {
        faceScaleCtrl.start("after");
        started.current = true;
      } else if (v <= sloganAnimationOrder.final && started.current) {
        faceScaleCtrl.start("initial");
        started.current = false;
      }
    });

    return () => {
      isMounted.current = false; // Indicate the component has been unmounted
      try {
        faceScaleCtrl.stop();
      } catch (error) {}
    };
  }, [scrollYProgress]);

  return (
    <>
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        transition={{ stiffness: 1000 }}
        style={{
          scale: scale,
          x: translateX,
          y: translateY,
        }}
        d="M7.84677 1.97509C9.3135 1.51436 10.9015 1.79442 12.4335 1.59816C14.0726 1.3882 15.6466 0.308743 17.2708 0.767856C18.8835 1.22373 19.8955 2.92296 21.1807 4.07076C22.436 5.19187 23.8738 6.10633 24.8243 7.51378C25.7958 8.95243 26.537 10.5996 26.7476 12.3141C26.9558 14.0099 26.4168 15.6446 26.0228 17.2725C25.6422 18.8451 25.3804 20.5112 24.4541 21.7903C23.5392 23.0538 22.0967 23.738 20.7734 24.5218C19.5184 25.265 18.2131 25.8651 16.8234 26.3095C15.3821 26.7704 13.9306 27.2985 12.4002 27.1995C10.8387 27.0984 9.2616 26.615 7.90826 25.7325C6.57235 24.8615 5.77425 23.3604 4.68407 22.1681C3.55388 20.9322 2.0581 20.0171 1.30396 18.5101C0.535968 16.9755 0.272596 15.2051 0.354489 13.5164C0.435349 11.849 1.21137 10.3753 1.77309 8.83652C2.33927 7.2855 2.63336 5.54994 3.70421 4.34019C4.77722 3.12802 6.31575 2.45601 7.84677 1.97509Z"
        fill="white"
      />
    </>
  );
};

export default memo(WhiteBG);
