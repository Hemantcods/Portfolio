import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useScrollDirection from '../Functions/Scrolldetect';




function Skills() {
  const direction = useScrollDirection();
  const navigate = useNavigate()

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  useEffect(() => {
    if (direction) {
      if (direction === "down") {
        navigate("/projects")
      } else {
        navigate("/about")
      }
    }
  }, [direction]);
  return (
    <>
      <div className={`flex flex-col items-center justify-center pt-50  scale-125 transition-all duration-700
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 '}`}>
        <div className="text-gray-400 text-lg italic mb-2 text-center max-w-xl">
          “A problem is a chance for you to do your best.”
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-2 tracking-wide text-center">
          {Array.from("Skills & Experience").map((char, i) => (
            <span
              key={i}
              className="inline-block transition-transform duration-400 ease-in-out hover:text-orange-400  hover:animate-bounce"
              style={{ display: char === " " ? "inline-block" : undefined, minWidth: char === " " ? "0.5em" : undefined }}
            >
              {char}
            </span>
          ))}
          <style>
            {`
              .bounce-stretch:hover {
                animation: bounce-stretch 0.4s;
                transform: scaleY(0.5) translateY(-0.5em);
              }
              @keyframes bounce-stretch {
                0% { transform: scaleY(1) translateY(0) translateX(0); }
                50% { transform: scaleY(1) translateY(-0.5em) translateX(0.5); }
                100% { transform: scaleY(1) translateY(0); }
              }
            `}
          </style>

        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-8"></div>
      </div>
      <div className={`flex justify-center items-center min-h-[60vh] bg-transparent transition-all duration-700 delay-200
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col gap-10 justify-center items-center bg-transparent rounded-2xl shadow-lg p-10 backdrop-blur-md">
          <div className="flex flex-wrap gap-15 justify-center items-center">
            <img className="scale-150 transition-transform duration-300 hover:scale-175" src="https://skillicons.dev/icons?i=html" alt="html" />
            <img className="scale-150 transition-transform duration-300 hover:scale-175" src="https://skillicons.dev/icons?i=css" alt="css" />
            <img className="scale-150 transition-transform duration-300 hover:scale-175" src="https://skillicons.dev/icons?i=javascript" alt="javascript" />
            <img className="scale-150 transition-transform duration-300 hover:scale-175" src="https://skillicons.dev/icons?i=react" alt="react" />
            <img className="scale-150 transition-transform duration-300 hover:scale-175" src="https://skillicons.dev/icons?i=vite" alt="vite" />
            <img className="scale-150 transition-transform duration-300 hover:scale-175" src="https://skillicons.dev/icons?i=mongodb" alt="mongodb" />
            <img className="scale-150 transition-transform duration-300 hover:scale-175" src="https://skillicons.dev/icons?i=github" alt="github" />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <img className="scale-150 transition-transform duration-300 hover:scale-175" src="https://skillicons.dev/icons?i=py" alt="python" />
            <img className="scale-150 transition-transform duration-300 hover:scale-175" src="https://skillicons.dev/icons?i=pytorch" alt="pytorch" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
