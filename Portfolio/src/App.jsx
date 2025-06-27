import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './Componets/SideBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen' style={{ backgroundColor: 'rgb(20, 20, 22)' }}>
        <SideBar />
      </div>
    </>
  )
}

export default App
