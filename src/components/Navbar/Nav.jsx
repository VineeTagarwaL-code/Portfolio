import 'tailwindcss/base.css';
import React from 'react';
import logo from '../../assets/vineet.svg';
import circlePic from '../../assets/circle.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons'

import './Nav.css';

function Nav() {
   return (
      <header className='relative md:sticky top-0 z-20 bg-primary'>
         <nav className='px-6 md:px-6 py-3 lg max-w-[700px] mx-auto flex justify-between items-center gap-3'>
            <a className='shrink-0'> 
       <img src={logo} className='h-8'/> 

               </a>
            <ul class="hidden md:flex items-center gap-1">
               <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800 group" >
                  <a class="text-secondary text-sm text-base group-hover:text-white font-medium tracking-wide " href="#about">About</a>
               </li>
               <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800  group" >
                  <a class="text-secondary text-sm text-base group-hover:text-white font-medium  tracking-wide" href="#skills">Skills</a>
               </li>
               <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800 group" >
                  <a class="text-secondary text-sm text-base group-hover:text-white font-medium  tracking-wide" href="#Work">Work</a>
               </li>
               <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800 group" >
                  <a class="text-secondary text-sm text-base group-hover:text-white font-medium  tracking-wide" href="#Project">Project</a>
               </li>
           
               <li className="cursor-pointer px-4 py-2 rounded-lg hover:bg-stone-800 group" >
                  <a class="text-secondary text-sm text-base group-hover:text-white font-medium  tracking-wide" href="#">Blogs</a>
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

            <img src={circlePic} className='h-8 cursor-pointer'></img>


         </nav>
      </header>
   );
}

export default Nav;

