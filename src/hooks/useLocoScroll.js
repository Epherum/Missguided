import "locomotive-scroll/src/locomotive-scroll.scss";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";

function useLocoScroll(start) {
  const [scroll, setScroll] = useState(null);
  useEffect(() => {
    if (start) {
      let locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.075,
        multiplier: 0.8,
      });
      setScroll(locomotiveScroll);
      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, [start]);
  return scroll;
}

export default useLocoScroll;
