'use client'

import {React, useState} from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'

const Sidebar = () => {

  const [open, setOpen] = useState(true)

  return (
    <div className='flex'>
      <div className={`bg-purple-950 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-cyan-500 text-3xl rounded-full absolute -right-3 top-9 border border-purple-950 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
      </div>
      <div className='p-7'>
        <h1 className='text-2xl font-semibold'>Home Page</h1>
      </div>
    </div>
  )
}

export default Sidebar