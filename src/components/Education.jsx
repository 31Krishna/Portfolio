import React from 'react'
import photo from '../assets/padhai.png'

const Education = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row h-full text-white'>
      <div className='lg:w-1/2 w-full'>
        <h1 className='text-5xl p-4 font-medium select-none'>Educa<span className='text-purple-400'>tion</span></h1>
          <p className='text-2xl p-4 from-neutral-700 text-left  mt-7'>
          I am currently pursuing a Bachelor of Technology (B.Tech) in Electronics and Communication at PSIT Kanpur, with an expected graduation in 2026.Throughout my academic journey, I have developed a keen interest in areas like development and new technologies, which I have explored through both coursework and personal projects.
          </p>
      </div>
      <div className='lg:w-1/2 w-full h-full'>
            <img className='max-h-screen object-center object-contain' src={photo} alt="" />
          </div>
    </div>
  )
}

export default Education