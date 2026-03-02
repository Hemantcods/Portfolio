import React, { useRef } from "react";
import { dockApps } from "@constants";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Diameter } from "lucide-react";
const Dock = () => {
  const DockRef = useRef(null);
  const toggleApp = (app) => {
    // TODO : Implement Open Window Logic
  };
  useGSAP(() => {
    const dock = DockRef.current;
    if (!dock) return;
    const icons = dock.querySelectorAll(".dock-icon");
    const animateIcons = (mouseX) => {
      const { left: Left } = dock.getBoundingClientRect();
      icons.forEach((icon) => {
        const { left: iconLeft, width: iconWidth } =
          icon.getBoundingClientRect();
        const center = iconLeft - Left + iconWidth / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.3) / 20000);
        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };
    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      const mouseX = e.clientX - left;
      animateIcons(mouseX);
    };
    const handleMouseLeave = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };
    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <section id="dock">
      <div ref={DockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id ?? name} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
