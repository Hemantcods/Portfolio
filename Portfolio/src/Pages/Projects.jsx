import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useScrollDirection from '../Functions/Scrolldetect';
import Card from '../Componets/Card';


function Projects() {
  const direction = useScrollDirection();
  const navigate=useNavigate()
  const [mounted, setMounted] = useState(false);
    
      useEffect(() => {
        setMounted(true);
      }, []);


    useEffect(() => {
    if (direction) {
      if(direction==="down"){
        navigate("/contact")
    }else if(direction==="up"){
      navigate("/skills")
    }
  }
  }, [direction]);
  return (
  <div className="text-white flex flex-col justify-center items-center min-h-screen">
    <h1
      className={`text-3xl scale-200 mb-7 font-bold transition-all duration-700
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {Array.from("Projects").map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-400 ease-in-out hover:text-orange-400 hover:animate-bounce"
          style={{
            display: char === " " ? "inline-block" : undefined,
            minWidth: char === " " ? "0.5em" : undefined,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
    <Card/>
  </div>
)
}

export default Projects
