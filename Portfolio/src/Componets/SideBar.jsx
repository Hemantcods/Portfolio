import React, { useEffect } from 'react'
import useSectionStore from '../Store'


function SideBar({ section }) {
  const sections = ["home", "about", "projects", "contact"];
  const currentSection = useSectionStore(state => state.currentSection);
  const fullbarlength = 35;
  const barheight = fullbarlength / sections.length;

  useEffect(() => {
    // Add any side effects here if needed
  }, []);

  return (
    <>
    <div className="fixed top-1/3 right-15 z-50">
      <div
        className="bar border-white h-50 w-0.5 bg-white"
        style={{ height: `${fullbarlength}vh` }}
      >
        <div className="wheel relative border-red-400 bg-red-400  border-2 rounded-xl w-1" style={{ height: `${barheight}vh` }}><div/>
        </div>
      </div>
    </div>
    </>
  );
}

export default SideBar;

