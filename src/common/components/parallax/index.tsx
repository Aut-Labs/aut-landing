import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useWindowSize } from "react-use";

gsap.registerPlugin(ScrollTrigger);

const mapRange = (
  in_min: number,
  in_max: number,
  input: number,
  out_min: number,
  out_max: number
) => {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export default function Parallax({
  className,
  children,
  speed = 1,
  id = "parallax",
  position,
}: any) {
  const trigger = useRef<any>(null);
  const target = useRef<any>(null);

  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    if (!trigger.current || !target.current) return;
    const y = windowWidth * speed * 0.1;

    const setY = gsap.quickSetter(target.current, "y", "px");
    const set3D = gsap.quickSetter(target.current, "force3D");

    const timeline = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (e) => {
          if (position === "top") {
            setY(e.progress * y);
          } else {
            setY(-mapRange(0, 1, e.progress, -y, y));
          }

          set3D(e.progress > 0 && e.progress < 1);
        },
      },
    });

    return () => {
      timeline.kill();
    };
  }, [id, speed, position, windowWidth]);

  return (
    <div ref={trigger}>
      <div ref={target} className={className}>
        {children}
      </div>
    </div>
  );
}
