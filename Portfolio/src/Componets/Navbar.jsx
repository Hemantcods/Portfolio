import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'


function NavBar() {
  const [text, setText] = useState(" ")

  useEffect(() => {
    let isMounted = true
    let show = true
    function loop() {
      if (!isMounted) return
      setText(show ? "_" : " ")
      show = !show
      setTimeout(loop, 1000)
    }
    loop()
    return () => { isMounted = false }
  }, [])

  const navigate = useNavigate()
  const navigator = () => {
    navigate("/contact")
  }
  return (
    <>
      <div className='flex static justify-between '>
        <div className="logo h-3 w-10 relative top-4 left-4 cursor-pointer"><img className='' src="..\src\assets\Logo.svg" alt="" /></div>
        <div className="btns  relative top-4  ">
          <ul className='flex font-anonymouspro uppercase gap-10'>
            <li>
              <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'}`}>overview</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'}`}>about</NavLink>
            </li>
            <li>
              <NavLink to='/skills' className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'}`}>skills</NavLink>
            </li>
            <li>
              <NavLink to='/projects' className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'}`}>projects</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'}`}>contact</NavLink>
            </li>
          </ul>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default NavBar