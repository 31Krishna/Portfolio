import React from 'react'
import photo from '../assets/connect.png';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";


const Contact = () => {
  return (
    <div id='contact' className='max-w-screen-xl mx-auto  h-full  text-white '  >
      <h1 className='text-5xl mt-5 p-[2rem] font-semibold capitalize w-full'>Connect <span className='text-purple-400'> With Me </span></h1>
      <div className='flex md:flex-row flex-col'>
        <div className='w-full '>

          < img className='object-contain w-full'  src={photo} alt="" />
        </div>
        <div className='w-full h-96  py-12 flex flex-col justify-center items-center gap-7 pt-12 mt-10 border-3'>
          <a href='https://ktkrishna31@gmail.com'>
            <button class='px-4 py-2 text-xl items-center gap-4 rounded-md w-56 flex before:ease relative hover:scale-[1.2]   overflow-hidden border border-purple-500 bg-purple-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-purple-500 hover:before:-translate-x-40'>
              <span relative="relative z-10 mr-4  ">{<MdEmail />}</span> Email  </button>
          </a>
          

          <a href='https://www.linkedin.com/in/krishna-tiwari-b317502a5'>
          <button class='px-4 py-2 text-xl items-center gap-4 rounded-md flex before:ease relative hover:scale-[1.2] w-56  overflow-hidden border border-purple-500 bg-purple-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-purple-500 hover:before:-translate-x-40'>
              <span relative="relative z-10 mr-4  ">{<FaLinkedin />}</span> Linkedin  </button>
            {/* <button className='px-3 py-2 rounded-xl border-2 border-black w-1/2 flex'>
              <span className='mr-5'>{<FaLinkedin />}</span>linkedin</button> */}
          </a>
          <a href='https://github.com/31Krishna'>
          <button class='px-4 py-2 text-xl items-center gap-4 rounded-md w-56 flex before:ease relative hover:scale-[1.2]    overflow-hidden border border-purple-500 bg-purple-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-purple-500 hover:before:-translate-x-40'>
              <span relative="relative z-10 mr-4  ">{<IoLogoGithub />}</span> Github  </button>
            {/* <button className='px-4 py-1 rounded-xl border-2 border-black w-1/2 flex'>
              <span className='mr-5'>{<IoLogoGithub />}</span>github</button> */}
          </a>
        </div>
      </div>




    </div >
  )
}

export default Contact 