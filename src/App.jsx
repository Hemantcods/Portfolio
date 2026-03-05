import React from 'react'
import { Navbar, Welcome,Dock,Home } from '@components'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap'
import {Terminal,Safari,Resume,Finder,CreateText,Image,Contact} from '@windows'
gsap.registerPlugin(Draggable)
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <CreateText/>
      <Image/>
      <Contact/>
      <Home/>
    </main>
  )
}

export default App