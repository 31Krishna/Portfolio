import React from 'react'
import photo from '../assets/boy.png'
import { SiStagetimer } from "react-icons/si";
import { IoMdContacts } from "react-icons/io";
import Type from './Type';


const Home = () => {
  return (

    <div className='mx-auto text-2xl flex w-full h-full flex-col lg:flex-row select-none  text-white'>
        <div className='lg:w-1/2 w-full h-screen lg:pl-40 p-4 pt-40 capitalize text-2xl '>
          <p className='font-semibold'>
            Hello! It's me</p>
          <h2 className='font-bold  '>Krishna Tiwari</h2>
          <Type />
          <p className='pt-4'>Seeking a Frontend Developer role to contribute innovative solutions and fresh perspectives, eager to join a forward-thinking organization that empowers fresh talent.
          </p>
          <div className='space-x-7 flex flex-col w-full justify-center items-center lg:pr-40  lg:flex-row select-none mt-5 ' >
            <button class=" px-4 py-3 mt-5 text-2xl rounded-md items-center  flex hover:scale-[1.1] relative w-[12rem]  overflow-hidden border border-purple-400 bg-white text-purple-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-purple-400 hover:before:w-2/4 hover:before:bg-purple-400 hover:after:w-2/4 hover:after:bg-purple-400"><span class="relative z-10 flex "> <span className='mr-4 justify-center items-center'><SiStagetimer /> </span>Resume</span></button>

            <a href='https://www.linkedin.com/in/krishna-tiwari-b317502a5'> 
            <button class=" px-4 py-3 mt-5  text-2xl rounded-md items-center flex hover:scale-[1.1] relative overflow-hidden border text-nowrap border-purple-400 bg-white text-purple-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-purple-400 hover:before:w-2/4 hover:before:bg-purple-400 hover:after:w-2/4 hover:after:bg-purple-400"><span class="relative z-10 flex  "> <span className='mr-3 justify-center items-center'>< IoMdContacts /> </span>Contact me</span></button>
            </a>
          </div>
        </div>
        <div className='lg:w-1/2 h-full mt-32 md:mt-0 w-full '>
          <img className='object-contain' src={photo} alt="" />
        </div>
    </div>
  )
}

export default Home