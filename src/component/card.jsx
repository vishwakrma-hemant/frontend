import React from 'react';
import { FaUserAlt } from "react-icons/fa";
const Card = () => {
  return (
  <div className='py-2'>  
    <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 py-10 gap-8 '>
        <div className='p-4 col-span-1 mx-2  shadow-lg hover:scale-105 duration-500 h-[420px] rounded-lg hover:bg-gray-500'>
            <div className='flex justify-center items-center mb-4'>
              <FaUserAlt  className='text-center text-[70px]'/>
            </div>
              <h2 className=' text-[30px] text-center'>Web devloper</h2>
              <div>

            <p className='text-sm text-center'>Card description goes here. Web Developer is perform so many task and also help to other people for doing something.</p>
              </div>
        </div>
        <div className='p-4 col-span-1 shadow-lg hover:scale-105 duration-500 h-[420px] rounded-lg hover:bg-gray-500'>
           <div className='flex justify-center items-center mb-4'>
              <FaUserAlt  className='text-center text-[70px]'/>
            </div>
              <h2 className=' text-[30px] text-center'>Web devloper</h2>
              <div>

            <p className='text-sm text-center'>Card description goes here. Web Developer is perform so many task and also help to other people for doing something.</p>
              </div>
        </div>
        <div className='p-4 col-span-1 shadow-lg hover:scale-105 duration-500 h-[420px] rounded-lg hover:bg-gray-500'>
            <div className='flex justify-center items-center mb-4'>
              <FaUserAlt  className='text-center text-[70px]'/>
            </div>
              <h2 className=' text-[30px] text-center'>Web devloper</h2>
              <div>

            <p className='text-sm text-center'>Card description goes here. Web Developer is perform so many task and also help to other people for doing something.</p>
              </div>
        </div>
    </div>
    </div>
  )
}

export default Card