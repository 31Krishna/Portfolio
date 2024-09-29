import React from 'react'
import{ Typewriter } from'react-simple-typewriter'

let Type = () => { 
  return (
    <div>
        <h2 className='text-purple-400 text-3xl'>
            <Typewriter
            words={['Web-developer','Front-end developer']}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

            />
        </h2>
    </div>
  )
}

export default Type