import React from "react";
import { useState, useLayoutEffect, useEffect } from "react";
import { useToggle } from "./useToggle";

export default function useMobile() {
  const [isNavClicked, toggleNavClick, setIsNavClicked] = useToggle();
  const [size, setSize] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState();

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsNavClicked(false);
  }, [isMobile, setIsNavClicked]);

  useEffect(() => {
    size[0] < 900 ? setIsMobile(true) : setIsMobile(false);
  }, [size]);
  return { isMobile, isNavClicked, toggleNavClick };
}
