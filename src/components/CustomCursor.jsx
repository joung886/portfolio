import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CursorOuter = styled(motion.div)`
  width: 40px;
  height: 40px;
  border: 2px solid rgba(66, 153, 225, 0.5);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;

  @media (max-width: 968px) {
    display: none;
  }
`;

const CursorInner = styled(motion.div)`
  width: 12px;
  height: 12px;
  background: rgba(66, 153, 225, 0.9);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;

  @media (max-width: 968px) {
    display: none;
  }
`;

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 968) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <CursorOuter
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 45,
          mass: 0.1,
        }}
      />
      <CursorInner
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 40,
          mass: 0.2,
        }}
      />
    </>
  );
};

export default CustomCursor;
