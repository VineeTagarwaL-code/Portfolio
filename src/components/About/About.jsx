import React from 'react'
import './About.css'
import lang from '../../assets/lang.png'
function About() {
  return (
    <div className='px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[690px] mx-auto'>
        <div>
            <h1 className='animate__animated animate__fadeInUp text-white text-xl tracking-tight font-bold inter header md:text-3xl'>Hi , I am Vineet Agarwal </h1>
            <p className='text-secondary animate__animated animate__fadeInUp font-light mt-2  md:text-xl text-sm'>A 19 year old exploring the amazingness of tech</p>
        </div>
        <div>
          <img src={lang} className='language object-cover h-56 mx-auto mt-6 md:h-96 mb-24 animate__animated animate__fadeInUp'/>
        </div>
        <section className='flex flex-col md:flex-row gap-2 md:gap-9 col-reverse mb-20 animate__animated animate__fadeInUp'>
          <h2 className='md:w-32 text-secondary shrink-0 text-xl'>
            About
          </h2>
          <div className="flex flex-col gap-6">
          <p className='text-primary font-normal tracking-wide'>Hola Amigos ! Vineet Agarwal Here</p>
          <p className='text-primary font-normal tracking-wide'>I am a passionate 19 year old full stack developer who likes working at your issues while you sit back and relax with a cup of coffee ☕ </p>
          <p className='text-primary font-normal tracking-wide'>I am proficient in number of technologies including React , Git , Docker , Azure , Java and much more , I also make <a class="underline-offset-4 underline underline" target="_blank" href="https://www.youtube.com/channel/UCgj5Or8irAPTVdmzxuFLW8A">YouTube</a> videos, where I share my knowledge and contribute to the community </p>
          <p className='text-primary font-normal tracking-wide'>My hobbies include Exploring and learning new technologies , basketball and Video games</p>
          </div>

        </section>
        <section className='flex flex-col md:flex-row gap-2 md:gap-9 col-reverse  animate__animated animate__fadeInUp'>
          <h2 className='md:w-32 text-secondary shrink-0 text-xl'>
            Skills
          </h2>
          <div className="flex flex-col gap-6">
          <p className='text-primary font-normal tracking-wide'>Hola Amigos ! Vineet Agarwal Here</p>
          <p className='text-primary font-normal tracking-wide'>I am a passionate 19 year old full stack developer who likes working at your issues while you sit back and relax with a cup of coffee ☕ </p>
          <p className='text-primary font-normal tracking-wide'>I am proficient in number of technologies including React , Git , Docker , Azure , Java and much more , I also make <a class="underline-offset-4 underline underline" target="_blank" href="https://www.youtube.com/channel/@brianruizy">YouTube</a> videos, where I share my knowledge and contribute to the community </p>
          <p className='text-primary font-normal tracking-wide'>My hobbies include Exploring and learning new technologies , basketball and Video games</p>
          </div>

        </section>
    </div>
  )
}

export default About