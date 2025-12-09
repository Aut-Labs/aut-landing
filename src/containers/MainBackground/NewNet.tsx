import newNet from "common/assets/image/New net.png";
import {
  SloganContext,
  sloganAnimationOrder,
} from "containers/sections/Slogan";
import { useAnimation, motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";

export const NewNetBG = () => {
  const { scrollYProgress } = useContext(SloganContext);
  const showLargeNovaItemCtrl = useAnimation();
  const isMounted = useRef(true);
  const started = useRef(false);

  useEffect(() => {
    scrollYProgress.on("change", async (v) => {
      if (!isMounted.current) return;

      if (v >= sloganAnimationOrder.final && !started.current) {
        showLargeNovaItemCtrl.start("after");
        started.current = true;
      } else if (v <= sloganAnimationOrder.final && started.current) {
        showLargeNovaItemCtrl.start("initial");
        started.current = false;
      }
    });

    return () => {
      isMounted.current = false; // Indicate the component has been unmounted
      try {
        showLargeNovaItemCtrl.stop();
      } catch (error) {}
    };
  }, [scrollYProgress]);

  return (
    <>
      <mask
        id="mask0_1_10093"
        maskUnits="userSpaceOnUse"
        x="-149"
        y="-425"
        width="1756"
        height="1756"
      >
        <motion.circle
          variants={{
            initial: {
              opacity: 0,
              r: 0,
              transition: {
                duration: 0.4, // 2 seconds duration
              },
            },
            after: {
              r: 1000,
              opacity: 1,
              transition: {
                duration: 0.4, // 2 seconds duration
              },
            },
          }}
          animate={showLargeNovaItemCtrl}
          initial="initial"
          cx="729"
          cy="453"
          fill="#fff"
        />
      </mask>

      <g mask="url(#mask0_1_10093)">
        <image
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          xlinkHref={newNet.src}
        />
      </g>
    </>
  );
};
