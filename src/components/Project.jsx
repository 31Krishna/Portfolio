import React from 'react'
import pic from '../assets/p1.png'
import pohto from '../assets/p2.png'
import picture from '../assets/p3.png'
import phot from '../assets/p4.png'
import { IoLogoGithub } from "react-icons/io5";

const Project = () => {
    const project = [
        {    
            id:1,
            src: pic,
            alt: 'tic tac toe',
           link:"https://github.com/31Krishna/Tic-tac-toe",
            desc: 'Tic-Tac-Toe is built using HTML for the structure, creating a 3x3 grid for players to interact with. CSS is used to style the board, making it visually appealing and responsive. JavaScript controls the game logic, handling player turns, marking cells with X or O, and checking for a winner or tie after each move. Together, these technologies create an interactive, playable version of Tic-Tac-Toe'
        },
        {
            id:2,
            src: pohto,
            alt: 'Recipe Finder',
            desc: "The Recipe Finder App is a modern, web-based tool developed using React, Tailwind CSS, and a recipe API, designed to help users discover delicious meals with ease. Users can search for recipes by entering specific ingredients, allowing the app to suggest a variety of dishes they can create. The app also offers advanced filtering options, enabling users to narrow down results by cuisine type, dietary preferences, or meal categories. With a clean, responsive interface, this app provides a seamless experience for cooking enthusiasts and those looking to try new recipe",
            link:"https://github.com/31Krishna/Recipe-Finder"
        },
        {
            id:3,
            src: picture,
            alt: 'two good co',
            link:"https://github.com/31Krishna/Two-good-",
            desc: 'create a visually engaging landing page using HTML, CSS, JavaScript, GSAP, and Locomotive Scroll, you can follow a structured approach. The HTML provides the basic structure, including sections like the hero, about, features, and contact. The CSS styles the layout, making it responsive and visually appealing, with elements like background images, typography, and spacingGSAP (GreenSock Animation Platform) is used to animate elements as the user scrolls or interacts with the page. For instance, you can animate the hero section text to fade in or slide up when the page loads. Locomotive Scroll adds smooth, inertia-based scrolling, and it can trigger animations at specific scroll pointsTogether'
        },
        {
            id:4,
            src: phot,
            alt: 'to do project',
            link:"https://github.com/31Krishna/To-do-list",
            desc: 'A To-Do List app using ReactJS and Tailwind CSS combines React powerful component-based structure with Tailwind utility-first CSS framework for quick styling. In this app, React handles the dynamic functionality, such as adding, editing, deleting, and marking tasks as complete. Each task is represented as a React component, allowing for easy re-rendering when the state changes. Tailwind CSS is used to style the components with minimal custom CSS, providing a clean, responsive interface. Together, React and Tailwind CSS create a user-friendly, functional, and visually appealing to-do list'
        }
    ]
    return (
        <div id='project' className='text-white p-8'>
            <div className='max-w-screen-xl mx-auto ' >
                <h1 className='text-5xl p-4 font-semibold'>Pro<span className='text-purple-400'>ject</span></h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-7 mt-9 '>
                    {project.map((project, index) => (
                        <div key={index} className='bg-purple-200 border-4 border-purple-900 max-h-96 overflow-scroll rounded-t-3xl'>
                            <img className='w-full h-48 object-contain transform hover:scale-105 transition duration-300 ease-in-out mt-5' src={project.src} alt="" />
                            <h2 className='text-center text-xl pt-2 font-bold capitalize text-black '>{project.alt}</h2>
                            <h3 className='text-base font-semibold text-left hover:text-black text-zinc-500 p-5'>{project.desc}</h3>
                            <a key={project.id} href={project.link} target='_blank' rel='noopener noreferrer' className='flex justify-center'>
                                <button className='px-4 py-2 text-xl items-center  gap-4 rounded-md mb-5 flex before:ease relative hover:scale-[1.2]    overflow-hidden border border-purple-500 bg-purple-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-purple-500 hover:before:-translate-x-40'>
                                    <span relative="relative z-10 mr-4  ">{<IoLogoGithub />}</span> Github  </button>

                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project