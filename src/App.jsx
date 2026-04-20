import React from 'react'
import { Navbar, Welcome,Dock,Home,Loading} from '@components'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap'
import {Terminal,Safari,Resume,Finder,CreateText,Image,Contact,Archive} from '@windows'
gsap.registerPlugin(Draggable)
const App = () => {
  return (
    <main>
      <Loading/>
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
      <Archive/>
    </main>
  )
}

export default App