import React from 'react'
import WindowWrapper from '@hoc/WindowWrapper'
import { techStack } from '@constants'
import { Check, Flag } from 'lucide-react'
import {WindowControls} from '@components'

const Terminal = () => {
  return <>
  <div className='window-header'>
    <WindowControls target="terminal"/>
    <h2>Tech Stack</h2>
  </div>
  <div className='techstack'>
    <p>
        <span className='font-bold'>
            @Hemant %
        </span>
        Show Tech Stack 
    </p>
    <div className='label'>
        <p className='w-32'>Category</p>
        <p>Technologies</p>
    </div>
    <ul className='content'>
        {techStack.map(({category,items})=>(
            <li key={category} className='flex items-center'>
                <Check className='check' size={20}/>
                <h3>{category}</h3>
                <ul>
                    {items.map((item,i)=>(
                        <li key={i}>
                            {item}{i<items.length-1 ? ",":""}
                        </li>
                    ))}
                </ul>
            </li>
        ))}
    </ul>
    <div className='footnote'>
        <p>
            <Check size={20}/>5 of 5 stacks loaded sucessfully. (100%)
        </p>
        <p className='text-black'>
            <Flag size={15} fill='black'/>
            Render Time: 6ms
        </p>
    </div>
  </div>
  </>
}
const TerminalWindow=WindowWrapper(Terminal,"terminal")
export default TerminalWindow