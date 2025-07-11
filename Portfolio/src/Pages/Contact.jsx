import React,{use, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import useScrollDirection from '../Functions/Scrolldetect';
import { Form, useForm } from "react-hook-form"
import Sendbtn from '../Componets/sendbtn';
function Contact() {
  const[sentStatus,setSentStatus]=useState(false)
  const direction = useScrollDirection();
  const navigate=useNavigate()

    useEffect(() => {
    if (direction) {
      if(direction==="up"){
        navigate("/projects")
    }
  }
  }, [direction]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  const adddata=(e)=>{
    console.log(e.target)
    fetch(import.meta.env.VITE_GOOGle_FORMS_LINK,{
      method:"POST",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body:(`name=${e.name}&email=${e.email}&message=${e.message}`)
      }).then(() => {
        setSentStatus(true);
      }).catch((err) => {
        console.error(err);
      });
      
    }
  return (
  <div className="flex justify-center items-center min-h-screen bg-transparent text-white">
    <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Me</h2>
      <form onSubmit={handleSubmit(adddata)} className="flex flex-col gap-5">
        <input
          className="p-3 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Name"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="text-red-400 text-sm" role='alert'>Name is required.</p>}

        <input
          className="p-3 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Email"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="text-red-400 text-sm">Please  enter a valid email.</span>}

        <textarea
          className="p-3 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Message"
          rows={4}
          {...register("message", { required:true })}
        />
        {errors.message && <span className="text-red-400 text-sm">Please enter a message</span>}
        {/* {
          sentStatus ? (
            <button
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition"
              disabled
            >
              Sent!
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition"
            >
              Send
            </button>
          )
        } */}
        <Sendbtn initName='Send' hoverName='Sending' doneName='Sent' status={sentStatus} onClick={handleSubmit(adddata)} />
      </form>
    </div>
  </div>
)
}

export default Contact
