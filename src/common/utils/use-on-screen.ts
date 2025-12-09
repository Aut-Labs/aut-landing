import { RefObject, useState, useEffect } from "react";

export const useOnScreen = (
  ref: RefObject<Element>,
  name: string,
  options: IntersectionObserverInit = {
    threshold: 0,
  }
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const updateRootMarginBasedOnTarget = () => {
      const mergedOptions = {
        ...options,
      };
      return mergedOptions;
    };

    // Use a function to get the options so that we don't need to specify the dependencies for useEffect
    const observerOptions = updateRootMarginBasedOnTarget();

    // Create the observer with options specific to the target element
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, name]);

  return isIntersecting;
};
