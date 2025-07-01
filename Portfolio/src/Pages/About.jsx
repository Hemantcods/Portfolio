import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollDirection from '../Functions/Scrolldetect';


function About() {
  const direction = useScrollDirection();
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);

  useEffect(() => {
    if (direction) {
      if (direction === "down") {
        navigate("/skills")
      } else if (direction === "up") {
        navigate("/")
      }
    }
  }, [direction]);
  return (
    <div className='text-white '>
      <div className="justify-center items-center flex h-screen">
        <div>
          <h1 className={`text-3xl scale-200 mb-7 font-bold text-center block transition-all duration-700
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 '}`}>
            {Array.from("About").map((char, i) => (
            <span
              key={i}
              className="inline-block transition-transform duration-400 ease-in-out hover:text-orange-400  hover:animate-bounce"
              style={{ display: char === " " ? "inline-block" : undefined, minWidth: char === " " ? "0.5em" : undefined }}
            >
              {char}
            </span>
          ))}
          </h1>
          <p className={`block text-center text-xl transition-all duration-700 delay-200
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 '} `}>Problem solver, well-organised person, loyal employee with high attention to detail.
            <br /> Fan of esports, outdoor activities, video games, and coding of course.</p>
        </div>
      </div>
    </div>
  )
}

export default About
