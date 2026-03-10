import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Apple } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Loading = () => {
  const [loading,setloading]=useState(true)
  useEffect(()=>{
      setTimeout(() => {
        setloading(false)
      }, 6000);
  })
  const bar=useRef(null)
  const screen=useRef(null)
  useGSAP(()=>{
    gsap.to(bar.current,{
      width:"30vw",
      duration:5
    })
    gsap.to(screen.current,{
      y:"-100vh",
      duration:1,
      delay:5,
      ease:"power2.inOut"
    })
    return 
  },[])

  return <div className={`${loading?"flex":"hidden"} bg-black absolute z-100 w-screen h-screen justify-center items-center flex-col gap-7 `}ref={screen}>
    <div className=" text-white">
          <Apple size={100}/>
    </div>
    <div className="loading" ref={bar}>
        <div className="bar bg-white w-full flex h-1 rounded-2xl"></div>
    </div>
  </div>;
};

export default Loading;
