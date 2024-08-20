"use client"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { DeskAnim } from '@/components/DeskAnim';
import { GameAndFramesAnim } from '@/components/GameAndFramesAnim';
import { Navbar } from '@/components/Navbar';

gsap.registerPlugin(useGSAP);

export default function Home() {
  
  return (
    <div>
      <div className='ml-auto mr-auto'>
        <div className='fixed text-center text-primary bottom-[50%] md:bottom-[65%] lg:bottom-[20%] left-0 right-0 -z-20 text-[20vw] md:text-[15vw] leading-none font-anton_display font-extrabold'>
          <div className='flex flex-col md:flex-row lg:flex-col justify-center md:gap-8'>
            <div className='firstname'>CADE</div>
            <div className='lastname'>CONNER</div>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 md:bottom-0 left-0 right-0 pb-[10vh]'>
        <div className='inner w-[38%] right-[10%] md:right-0 md:w-[25%] mx-auto relative'>
          <DeskAnim />
          <GameAndFramesAnim />
        </div>
      </div>
      <div className='fixed bg-accent w-5/6 left-[10%] bottom-[10vh] lg:bottom-[12vh] -z-10 h-1'></div>
    </div>
  );
}
