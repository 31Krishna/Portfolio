import React from 'react'
import photo from '../assets/about.png'

const About = () => {
  return (
    <div id='about' className='text-white' >


      <div className='max-w-screen-xl mx-auto h-full'>
        <h1 className='text-5xl text-white  capitalize p-[2rem] '><span className='text-purple-400'>About</span> me</h1>
        <div className='flex flex-col lg:flex-row space-x-8'>
          <div className='w-full ' >
            <img className='max-h-screen object-contain' src={photo} alt="" />

          </div>
          <div>
            <p className='text-2xl capitalize font-semibold  items-center max-w-screen-xl mx-auto mt-9  '>
              I'm a third year B.Tech student and a wanna'be full stack developer with a passion for creating dynamic and user-friendly web applications. I have knowledge of front-end technologies, and I'm always eager to learn and adapt to new challenges in the tech world.

            </p>
          </div>

        </div>
      </div>



    </div>
  )
}

export default About