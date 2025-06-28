import React, { useEffect, useState } from 'react'

const roles = ["Python Developer", "Editor", "Web Developer"]

function Home() {
  const [write, setWrite] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [stopped, setStopped] = useState(false)

  useEffect(() => {
    if (stopped) return;
    let timeout;
    const currentRole = roles[roleIndex]

    if (!deleting && charIndex <= currentRole.length) {
      setWrite(currentRole.slice(0, charIndex))
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 100)
    } else if (!deleting && charIndex > currentRole.length) {
      // If it's the last role, stop here
      if (roleIndex === roles.length - 1) {
        setWrite(currentRole)
        setStopped(true)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1000)
      }
    } else if (deleting && charIndex >= 0) {
      setWrite(currentRole.slice(0, charIndex))
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 50)
    } else if (deleting && charIndex < 0) {
      setDeleting(false)
      setRoleIndex(roleIndex + 1)
      setCharIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex, stopped])

  return (
    <div className="text-white">
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            width: 1ch;
            animation: blink 1s steps(1) infinite;
          }
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
      <div className='flex'>
        <div className="left static">
          <div className="intro text-6xl font-mono absolute top-80 left-10 "> Hi I am Hemant</div>
          <div className="role text-6xl font-mono absolute top-100 left-10">
            I am a {write}
            <span className="blinking-cursor">|</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Home