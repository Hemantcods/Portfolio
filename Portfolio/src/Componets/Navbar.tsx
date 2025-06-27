import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center static text-white bg-transparent'>
      <div className="logo font-bold text-3xl p-10  absolute left-0 top-3">&lt; H &gt;</div>
      <div><button className='font-bold text-2xl border-2 absolute right-0 top-3 m-12 mt-10 p-2 rounded-3xl pl-4 pr-4'>Contact</button></div>
    </div>
  )
}

export default NavBar
