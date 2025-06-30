import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollDirection from '../Functions/Scrolldetect';


function About() {
  const direction = useScrollDirection();
  const navigate=useNavigate()


    useEffect(() => {
    if (direction) {
      if(direction==="down"){
        navigate("/skills")
    }else if(direction==="up"){
      navigate("/")
    }
  }
  }, [direction]);
  return (
    <div className='text-white'>
      About
    </div>
  )
}

export default About
