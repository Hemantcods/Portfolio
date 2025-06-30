import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import useScrollDirection from '../Functions/Scrolldetect';
function Contact() {
  const direction = useScrollDirection();
  const navigate=useNavigate()


    useEffect(() => {
    if (direction) {
      if(direction==="up"){
        navigate("/projects")
    }
  }
  }, [direction]);
  return (
    <div className='text-white'>
      Contact
    </div>
  )
}

export default Contact
