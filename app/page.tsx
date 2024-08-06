"use client"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { GameTVAnim } from '@/components/GameTVAnim';
import { DeskAnim } from '@/components/DeskAnim';

gsap.registerPlugin(useGSAP);

export default function Home() {

  const container = useRef();

  useGSAP(
    () => {
      var tl = gsap.timeline();
      tl.to(".firstname", { x: 100, duration: 1, ease: 'back.inOut' })
        .to(".lastname", { x: -100, duration: 1, ease: 'back.inOut' }, "0");
    },
    { scope: container }
  );

  

  return (
    <div>
      <div className='ml-auto mr-auto'>
        <div className='fixed text-center text-green-600 bottom-[30%] left-0 right-0 -z-20 text-[15vw] leading-none font-anton_display font-extrabold'>
          <div className='firstname'>CADE</div>
          <div className='lastname'>CONNER</div>
        </div>
      </div>
      <div className='rive fixed bottom-0 left-0 right-0 pb-[10vh]'>
        <div className='inner w-[25%] mx-auto relative block'>
          <DeskAnim />
          <GameTVAnim />
        </div>
      </div>
      <div className='fixed bg-green-900 w-5/6 left-[10%] bottom-[12vh] -z-10 h-1'></div>
    </div>
  );
}
