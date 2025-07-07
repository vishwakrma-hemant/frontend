import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className=' w-full py-[100px] relative '>
        <div className='text-blue-900 max-w-[1240px] mx-auto text-center font-bold my-md md:my-[100px]'>
        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg" alt="" className='absolute top-0 left-0 z-0 opacity-50 w-full h-full object-cover' />
            <div className='text-md md:text-3xl text-black'> 
                Vishwakarma
            </div>
            <div className=' text-3xl  md:text-6xl my-4'>
                Welcome Musica
            </div>
            <div className=' text-md md:text-3xl mb-8 '>
                <ReactTyped 
                className='pl-2'
                    strings={["Welcome Hemant", "Vishwakarma ji visit again"]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={true}
                />
            </div>
            <a href="_" className='z-10' target="_blank" rel="noopener noreferrer">
            <button className='py-2 px-4 bg-green-500 rounded-full text-white text-lg hover:bg-blue-600 border border-none'>click me!</button>
            </a>
        </div>
    </div>
  )
}

export default Hero