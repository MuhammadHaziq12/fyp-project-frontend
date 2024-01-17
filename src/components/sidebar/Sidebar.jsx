'use client'

import { React, useState } from 'react'
import { BsArrowLeftShort, BsChevronDown, BsPerson } from 'react-icons/bs'
import { AiFillEnvironment, AiOutlineFileText, AiOutlineLogout, AiOutlineSetting, AiOutlineMail } from 'react-icons/ai'
import { RiDashboardFill } from 'react-icons/ri'

const Sidebar = () => {

  const [open, setOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const Menus = [
    { title: "Dashboard" },
    // { 
    //   title: "Pages",
    //   icon: <AiOutlineFileText />,
    //   submenu: true,
    //   submenuItems: [
    //     {title: "Add Product"},
    //     {title: "view Product"},
    //     {title: "Track Product"},
    //   ],
    // },
    // { title: "Inbox", icon: <AiOutlineMail /> },
    // { title: "Profile", spacing: true, icon: <BsPerson /> },
    // { title: "Setting", icon: <AiOutlineSetting /> },
    // { title: "Logout", icon: <AiOutlineLogout /> },
    { title: "Marketplace", icon: <AiOutlineLogout /> },
    { title: "Stock", icon: <AiOutlineLogout /> },
    { title: "Products", icon: <AiOutlineLogout /> },
    { title: "Category", icon: <AiOutlineLogout /> },
    { title: "Contracts", icon: <AiOutlineLogout /> },
    { title: "Orders", icon: <AiOutlineLogout /> },
    { title: "Track", icon: <AiOutlineLogout /> },
    { title: "Logistics", icon: <AiOutlineLogout /> },
    { title: "Transactions", icon: <AiOutlineLogout /> },
    { title: "Feedback", icon: <AiOutlineLogout /> },
    

  ];

  return (
      <div className={`bg-customColor1 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-cyan-500 text-3xl z-50 rounded-full absolute -right-3 top-9 border border-purple-950 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

        <div className='inline-flex'>
          <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"
            }`} />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>SagriChain</h1>
        </div>

        <ul className='pt-2'>
            {Menus.map((menu, index) => (
              <>
              <li key={index} className={`text-gray-300 text-sm pt-5 pb-5 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-customColor2 rounded-md ${menu.spacing ? "mt-9" : "mt-2"} `}>
                <span className='text-2xl block float-left'>
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                  {menu.title}
                </span>
                {/* {menu.submenu && open && (
                  <BsChevronDown className={`${submenuOpen &&
                    "rotate-180" }`} onClick={() => setSubmenuOpen
                    (!submenuOpen) } />
                )} */}
              </li>
              {/* {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-customColor2 rounded-md'>
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )} */}
              </>
            ))}
        </ul>

      </div>
    
    
  )
}

export default Sidebar;