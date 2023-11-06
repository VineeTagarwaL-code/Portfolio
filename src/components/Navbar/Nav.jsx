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
         <nav className='px-6 md:px-6 py-3 lg max-w-[710px] mx-auto flex justify-between items-center gap-3'>
            <a className='shrink-0'> 
                {/* <img src={logo} className='h-12'/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 375 375" version="1.2"><defs><clipPath id="clip1"><path d="M 103.636719 64.171875 L 271.476562 64.171875 L 271.476562 310 L 103.636719 310 Z M 103.636719 64.171875 "></path></clipPath></defs><g id="surface1"><g clip-path="url(#clip1)" clip-rule="nonzero"><path fill="currentColor" d="M 211.375 151.808594 C 203.050781 149.433594 194.765625 155.722656 194.765625 164.390625 L 194.765625 297.785156 C 194.765625 305.234375 201.695312 310.808594 208.941406 309.09375 C 244.675781 300.671875 271.355469 268.492188 271.355469 230.195312 C 271.355469 193.117188 246.363281 161.785156 211.375 151.808594 Z M 180.15625 144.734375 L 180.15625 297.785156 C 180.15625 305.234375 173.230469 310.808594 165.980469 309.09375 C 130.246094 300.675781 103.566406 268.492188 103.566406 230.195312 L 103.566406 74.296875 C 103.566406 68.449219 108.902344 64.046875 114.640625 65.164062 C 151.925781 72.410156 180.15625 105.335938 180.15625 144.734375 Z M 180.15625 144.734375 "></path></g></g></svg> 
            
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

            <img src={circlePic} className='h-8 cursor-pointer'></img>


         </nav>
      </header>
   );
}

export default Nav;

