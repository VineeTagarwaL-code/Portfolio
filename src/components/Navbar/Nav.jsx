import 'tailwindcss/base.css';
import React from 'react';
import logo from '../../assets/logo.webp';
import circlePic from '../../assets/circle.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons'

import './Nav.css';

function Nav() {
   return (
      <header className='relative md:sticky top-0 z-20 bg-primary'>
         <nav className='px-4 md:px-6 py-3 lg max-w-[700px] mx-auto flex justify-between items-center gap-3'>
            <a className='shrink-0'>
               <img src={logo} className='h-14'></img>
            </a>
            <ul class="hidden md:flex items-center gap-1">
               <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800" >
                  <a class="text-secondary text-sm text-base hover:text-white font-medium tracking-wide" href="/about">About</a>
               </li>
               <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800" >
                  <a class="text-secondary text-sm text-base hover:text-white font-medium tracking-wide" href="/about">Blog</a>
               </li>
               <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800" >
                  <a class="text-secondary text-sm text-base hover:text-white font-medium tracking-wide" href="/about">Project</a>
               </li>
               <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800" >
                  <a class="text-secondary text-sm text-base hover:text-white font-medium tracking-wide" href="/about">Video</a>
               </li>
            </ul>
            <div className='md:hidden relative ml-auto'>
               <div className='flex px-4 py-2 rounded-lg bg-stone-800 cursor-pointer mr-2 justify-between items-center gap-3'>
                  <p className='text-secondary text-sm text-base hover:text-white font-medium tracking-wide'>Menu</p>
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#b4b4b4", }} size="xs" />
               </div>
               {/* <div className='absolute '>
                  <h1>hello</h1>
               </div> */}
            </div>

            <img src={circlePic} className='h-8'></img>


         </nav>
      </header>
   );
}

export default Nav;


{/* <nav className='navbar flex justify-center items-center gap-7 '>
<div className='flex flex-row justify-center items-center gap-7 w-full md:w-3/6'>
  <img src={logo} className='h-20 cursor-[url("../../assets/circle.png"),_pointer]' alt="Logo" />
  <div className='flex flex-row justify-center items-center gap-5 px-10'>
    <div className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800">
      <p className='text-secondary text-sm text-base hover:text-white font-medium tracking-wide'>About</p>
    </div>
    <div className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800">
      <p className='text-secondary text-sm text-base hover:text-white font-medium tracking-wide'>Blog</p>
    </div>
    <div className="cursor-pointer px-4 py-2 rounded-lg hover-bg-stone-800">
      <p className='text-secondary text-sm text-base hover:text-white font-medium tracking-wide'>Project</p>
    </div>
    <div className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800">
      <p className='text-secondary text-sm text-base hover:text-white font-medium tracking-wide'>Video</p>
    </div>
  </div>
  <img src={circlePic} className='h-10 cursor-pointer' alt="Circle Pic" />
</div>
</nav> */}