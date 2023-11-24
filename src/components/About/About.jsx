import React from 'react'
import './About.css'
import Typed from 'react-typed';
import cut from '../../assets/cut.png'
import lang from '../../assets/lang.png'
function About() {
  return (
    <div className='px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[690px] mx-auto'>
      <div>
        <h1 className='animate__animated animate__fadeInUp text-white text-xl tracking-tight font-bold inter header md:text-3xl text-center'>
          
        <Typed
                     strings={[
                      'Hi , I am Vineet Agarwal',
                      'Welcome to my Den !',
                      'Scroll down to learn more...']}
                      typeSpeed={40}
                      backSpeed={50}
             
                      loop 
            
                />


           </h1>
        <p className='text-secondary animate__animated animate__fadeInUp font-light mt-2  md:text-xl text-sm text-center cursor-pointer'>A 19 year old exploring the amazingness of tech</p>
      </div>
      <div>
        <img src={lang} className='language object-cover h-56 mx-auto mt-10 md:h-96  mb-24 animate__animated animate__fadeInUp' />
      </div>
      <section className='flex flex-col md:flex-row gap-2 md:gap-9 col-reverse mb-20 md:md-20 animate__animated animate__fadeInUp'>
        <h2 className='md:w-32 text-secondary shrink-0 text-xl mb-5 md:mb-0 cursor-pointer '>
          About
        </h2>
        <div className="flex flex-col gap-6">
          <p className='text-primary font-normal tracking-wide'>Hola Amigos ! Vineet Agarwal Here
          </p>
          <p className='text-primary font-normal tracking-wide'>I am a passionate 19 year old full stack developer who likes working at your issues while you sit back and relax with a cup of coffee ☕ </p>
          <p className='text-primary font-normal tracking-wide'>I am proficient in number of technologies including React , Git , Docker , Azure , Java and much more , I also make <a class="underline-offset-4 underline underline" target="_blank" href="https://www.youtube.com/channel/UCgj5Or8irAPTVdmzxuFLW8A">YouTube</a> videos, where I share my knowledge and contribute to the community </p>
          <p className='text-primary font-normal tracking-wide'>My hobbies include Exploring and learning new technologies , basketball and Video games</p>
        </div>

      </section>
      <section className='flex flex-col md:flex-row gap-2 md:gap-9 col-reverse  animate__animated animate__fadeInUp mb-20'>
        <h2 className='md:w-32 text-secondary shrink-0 text-xl mb-5 md:mb-0 cursor-pointer'>
          Skills
        </h2>
        <div className="flex flex-col gap-6">
          <div className='flex flex-col gap-4 mb-10'>
            <p className='text-secondary  py-1 px-2 bg-stone-900 rounded-lg max-w-[fit-content] cursor-pointer'>Languages</p>
            <div className="flex gap-6 flex-wrap max-w-[400px] ">
              <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
              <img src=" https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" />
              <img src="    https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />



            </div>
          </div>
          <div className='flex flex-col gap-4 mb-10'>
            <p className='text-secondary  py-1 px-2 bg-stone-900 rounded-lg max-w-[80px] cursor-pointer'>Frontend</p>
            <div className="flex gap-6 flex-wrap max-w-[400px] ">

              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
              <img src=" https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
              <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
              <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
              <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
              <img src=" https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
              <img src=" https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
              <img src=" https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" />

              <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
              {/* <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=VineeTagarwaL-Code" /> */}




            </div>
          </div>

          <div className='flex flex-col gap-4 mb-10'>
            <p className='text-secondary  py-1 px-2 bg-stone-900 rounded-lg max-w-[fit-content] cursor-pointer'>Backend</p>
            <div className="flex gap-6 flex-wrap max-w-[400px] ">
              <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" />
              <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
              <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />
              <img src=" https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
              <img src="  https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
            </div>
          </div>

          <div className='flex flex-col gap-4 mb-10'>
            <p className='text-secondary  py-1 px-2 bg-stone-900 rounded-lg max-w-[fit-content] cursor-pointer'>Devops</p>
            <div className="flex gap-6 flex-wrap max-w-[400px] ">
              <img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" />
              <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
            </div>
          </div>
          <div className='flex flex-col gap-4 mb-10'>
            <p className='text-secondary  py-1 px-2 bg-stone-900 rounded-lg max-w-[fit-content] cursor-pointer'>Tools</p>
            <div className="flex gap-6 flex-wrap max-w-[400px] ">
              <img src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" />
              <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
              <img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" />
              <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" />
              <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
            </div>
          </div>




          {/* <div className='flex flex-col gap-4'>
              <p className='text-secondary  py-1 px-2 bg-stone-900 rounded-lg'>Backend</p>
              
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-secondary  py-1 px-2 bg-stone-900 rounded-lg'>Cloud</p>
            
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-secondary  py-1 px-2 bg-stone-900 rounded-lg'>Devops</p>
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
            </div> */}
        </div>

      </section>

      <section className='flex flex-col md:flex-row gap-2 md:gap-9 col-reverse mb-20 md:md-20 animate__animated animate__fadeInUp'>
        <h2 className='md:w-32 text-secondary shrink-0 text-xl mb-5 md:mb-0 cursor-pointer'>
          Work
        </h2>
        <div className="flex flex-col gap-6 ">
          <p className='text-primary font-normal tracking-wide'>1yr+ Experience in full stack developement</p>
          <p className='text-primary font-normal tracking-wide'>My unwavering passion for creating and building has propelled me to where I am today. Through freelancing and hands-on experience with cutting-edge technologies, I've not only landed lucrative gigs but also secured a coveted internship in just a matter of months on my journey as a full-stack developer. </p>
          <div className='jobs flex  '>
            <div className="job flex flex-nowrap justify-between items-center group hover:bg-stone-900 px-5 py-6 rounded-lg max-w-[500px] w-[500px] cursor:pointer">
              <div className='flex items-center flex-nowrap group'>
                <img src={cut} className='h-10' />
                <p className='text-primary ml-4 group-hover:text-white'>Full stack Web Dev Intern</p>
              </div>
              <p className='text-secondary font-lighter tracking-wide'>2023</p>


            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default About