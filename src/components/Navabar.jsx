import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";

const Navabar = () => {
    return (

        <div className='bg-white  w-full py-5 text-black    flex fixed z-50'>


            <div className=' font-semibold text-xl items-center  flex flex-row justify-evenly w-full'>
                <div className='w-[40%] justify-center flex'>
                    <h1 className='font-bold text-purple-800 hover:text-black  lg:text-4xl text-xm '>Krishna Tiwari</h1>
                </div>
                <div className='w-[60%] space-x-12 justify-center   hidden lg:flex '>

                    <a className='text-black hover:text-purple-400' href='#about'>About</a>
                    <a className='text-black hover:text-purple-400' href='#skills'>Skills</a>
                    <a className='text-black hover:text-purple-400' href='#project'>Project</a>
                    <a className='text-black hover:text-purple-400' href='#contact'>Contact</a>
                </div>
                <div className=' lg:hidden  '>
                    <RiMenu2Fill/>
                    </div>

            </div>
        </div>

    )
}

export default Navabar