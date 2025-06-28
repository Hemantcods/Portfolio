import React, { useState, useEffect } from 'react'


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

  return (
  <div className='flex items-center fixed top-0 left-0 w-full z-50 text-white bg-transparent'>
    <div className="logo font-bold text-3xl p-10 absolute left-0 top-3">&lt; H{text} &gt;</div>
    <div>
      <button className='font-bold text-2xl border-2 absolute right-0 top-3 m-12 mt-10 p-2 rounded-3xl pl-4 pr-4'>
        Contact
      </button>
    </div>
  </div>
)
}

export default NavBar