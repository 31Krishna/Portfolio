import React from 'react';

const Skills = () => {
  const skills = [
    {
      src: "https://imgs.search.brave.com/iNThpdpRFbAWLNVz2jLCbrYRoYB7jt2gYLd26t-v7DI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzYxL0hU/TUw1X2xvZ29fYW5k/X3dvcmRtYXJrLnN2/Zy8yMjBweC1IVE1M/NV9sb2dvX2FuZF93/b3JkbWFyay5zdmcu/cG5n",
      alt: "HTML5"
    },
    {
      src: "https://imgs.search.brave.com/344EhT2dahSKLZLsA9XdISFXO4RbOaBcldViJtccd-o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzYyL0NT/UzNfbG9nby5zdmcv/MjIwcHgtQ1NTM19s/b2dvLnN2Zy5wbmc",
      alt: "CSS3"
    },
   
    
    {
      src: "https://imgs.search.brave.com/7VCLeGTcSequc6Ptwf3DvxmLGusPi_90-Umrw6X1LRk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9qYXZhc2Ny/aXB0LWpzLWljb24t/MjA0OHgyMDQ4LW55/eHZ0dmswLnBuZw",
      alt: "JavaScript"
    },

    {
      src: "https://imgs.search.brave.com/kWh_6AQWS9PTr_gkaZJlxXZP8RWHRDZQcUqNzXigZqU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3JlYWN0LmpwZw",
      alt: "React"
    },
    {
      src:"https://logowik.com/content/uploads/images/greensock-gsap4425.logowik.com.webp",
      alt:"Gsap"
    },
    {
      src:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png",
      alt:"Tailwind Css"
    },
    {
      src:"https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      alt:"Git Hub"
    },
    {
      src:"https://cdn.iconscout.com/icon/premium/png-512-thumb/git-11796868-9632973.png?f=webp&w=256",
      alt:"Git"
    }
  ];

  return (
    <div id='skills' className='text-white'>
      <div className='max-w-screen-xl mx-auto h-full'>
        <h1 className='text-5xl font-medium p-[2rem] capitalize'>my <span className='text-purple-400'>skills</span></h1>
        <div className='grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 mt-7 '>
          {skills.map((skill, index) => (
            <div key={index} className='bg-black shadow-lg rounded-lg overflow-hidden transform hover:scale-[1.1] transition duration-300 ease-in-out'>
              <img className='w-full h-48 object-contain justify-center flex' src={skill.src} alt={skill.alt} />
              <div className='p-2'>
                <h2 className='text-center text-xl font-semibold capitalize bg-black text-white'>{skill.alt}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
