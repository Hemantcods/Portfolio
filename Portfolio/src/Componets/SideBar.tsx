import React, { useEffect } from 'react'
import useSectionStore from '../Store'


function SideBar({section}) {
  const sections=["home","about","projects","contact"]
  const currentSection = useSectionStore(state => state.currentSection);
  useEffect(() => {
    console.log(currentSection);

  }, []);

  return (
  <div className="fixed top-1/3 right-15 z-50">
    <div className='bar border-white h-50 w-0.5 bg-white'>
      <div className='wheel relative border-red-400 bg-red-400 h-6 border-2 rounded-xl w-1'>
      </div>
    </div>
  </div>
)
}

export default SideBar
