import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Divider = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    const initialPath = "M 0 80 Q 500 80 1000 80";

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const relativeX = (offsetX / rect.width) * 1000;
      const relativeY = 80 + (offsetY / rect.height - 0.5) * 200;

      const newPath = `M 0 80 Q ${relativeX} ${relativeY} 1000 80`;

      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: initialPath },
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100px] cursor-pointer -my-12"
      style={{ overflow: "visible" }}
    >
      <svg
        width="100%"
        height="200"
        viewBox="0 0 1000 160"
        preserveAspectRatio="none"
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full"
        style={{ overflow: "visible", pointerEvents: "auto" }}
      >
        <path
          ref={pathRef}
          d="M 0 80 Q 500 80 1000 80"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="transparent"
          style={{ pointerEvents: "none" }}
        />
      </svg>
    </div>
  );
};

export default Divider;