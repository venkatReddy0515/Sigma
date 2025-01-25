import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsap = (animations) => {
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      animations();
    });
    return () => gsapContext.revert(); // Clean up animations on unmount
  }, [animations]);
};
