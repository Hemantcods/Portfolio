import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useScrollDirection from '../Functions/Scrolldetect';




function Skills() {
  const direction = useScrollDirection();
  const navigate=useNavigate()


    useEffect(() => {
    if (direction) {
      if(direction==="down"){
        navigate("/projects")
    }else{
      navigate("/about")
    }
  }
  }, [direction]);
  return (
    <>
      <div className='grayscale static'>
        <img className='relative top-100' src="https://skillicons.dev/icons?i=js,html,css,react,py,pytorch,vite,mongodb,wasm)](https://skillicons.dev" alt=""  />
      </div>
    </>
  )
}

export default Skills
