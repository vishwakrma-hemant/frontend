import React from 'react'
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
const Header = () => {
    const [toggle, setToggle] = React.useState(false);

  return (
    <div className='bg-blue-500 p-4'>
   <div className='max-w-[1280px] mx-auto text-white py-2 flex items-center justify-between'>
     <div className='text-lg font-bold text-black '>Hemant Vishwakarma</div>
      {
        toggle ?
        <IoMenuSharp onClick={() => setToggle(!toggle)} className='text-2xl md:hidden block' />
        :
      <IoCloseSharp onClick={() => setToggle(!toggle)} className='text-2xl md:hidden block'/>
      }
     <ul className='hidden md:flex gap-4 '>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
        <li>SignUp</li>
     </ul>
     {/* Responsive Menu bar */}
     <div className={`fixed top-[76px] ${toggle ? 'left-0' : '-left-full'} transition-all duration-300 ease-in-out`}>
     <ul className='md:hidden fixed bg-black w-full h-screen   text-white'>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>Login</li>
        <li className='p-4'>SignUp</li>
     </ul>
     </div>
     </div>
   </div>
  )
}

export default Header