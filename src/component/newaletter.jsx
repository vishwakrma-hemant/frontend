import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-blue-500 py-2'>
    <div className='max-w-[1240px] mx-auto md:flex justify-between  py-6  '>
        <div className='p-4'>
            <h1 className='font-bold text-xl lg:text-3xl text-white'>Want to Learn New Thing.</h1>
            <p className='text-sm lg:text-md'>Subscribe to our newsletter for the latest updates and resources.</p>
        </div>
        <div className='p-4'>
            <input type="text" placeholder='Enter your name' className='p-3 me-2 text-gray-800 rounded-md'/>
             <button className='p-3 bg-green-500 rounded-md text-white hover:bg-blue-600'>click me!</button>

            <p className='text-lg py-2 text-white'>we can help you learn new things. And this is new way <br/> we can help you learn new things.</p>
        </div>
    </div>
    </div>
  )
}

export default Newsletter