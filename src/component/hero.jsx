import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className=' w-full py-[100px] relative '>
        <div className='text-blue-900 max-w-[1240px] mx-auto text-center font-bold my-md md:my-[100px]'>
        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg" alt="" className='absolute top-0 left-0 z-[-10] opacity-65 w-full h-full object-cover' />
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
            <div>
            {/* <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOyoLY6m9jBewKvi7CtTb-IfR-a-HmSCB2lW8rnuKTsJmjIkyt68QSIejjIoYEGf-g_0qRKpusw02-JZCkZX4aTaNGOLwoikewTr1MFnFz58svCvK_Lvo7AHKVU2rcJaPidu1TmcvFJh8Mvp-FNnexT9bfYKB3dF-N0WBy2mPzmqeysdaAAEn6rolb/s1600/shraddha-kapoor-saree-bollywood-actress--(7).jpg" target="_blank" rel="noopener noreferrer">
            </a> */}
            <button className='py-2 px-4 bg-green-800 rounded-full text-white text-lg hover:bg-blue-600 border border-none'>click me!</button>
            </div>
        </div>
    </div>
  )
}

export default Hero