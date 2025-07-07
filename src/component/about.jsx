import React from 'react'
const About = () => {
  return (
    <div className=' max-w-[1240px] mx-auto md:grid grid-cols-3 py-10'>

        <div className='col-span-1 md:p-6   '>
          {/* <a href="https://youtu.be/inEu2qQuGZ8?list=RDinEu2qQuGZ8" target='_black'>
          </a> */}
            <img src='/Assetss/Image/sonam.jpg' className=' md:h-[289px] mx-auto' alt="Img"  />
        </div>
        <div className='col-span-2 md:py-4 py-10 mx-6 md:mx-0'>
            <h1 className=' text-xl md:text-3xl font-bold text-blue-500 '>About Us</h1>
            <p className='text-md my-4 '>
                Welcome to our music app! We are passionate about bringing you the best music experience possible.
                 Our team is dedicated to curating a diverse selection of songs and artists to suit every taste.
                  Whether you're looking for the latest hits or timeless classics, we've got you covered.
                   Join us on this musical journey and discover new sounds every day!
                Welcome to our music app! We are passionate about bringing you the best music experience possible.
                 Our team is dedicated to curating a diverse selection of songs and artists to suit every taste.
                  Whether you're looking for the latest hits or timeless classics, we've got you covered.
                   Join us on this musical journey and discover new sounds every day!
            </p>
            <button className='py-4 px-12 bg-green-500 rounded-full text-white text-2xl hover:bg-blue-600'>click me!</button>
            
        </div>
    </div>
  )
}

export default About