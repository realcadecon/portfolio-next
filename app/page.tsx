"use client"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import { GameTVAnim } from '@/components/GameTVAnim';
import { DeskAnim } from '@/components/DeskAnim';
// import RiveAnim from '@/public/Rive/portfolio2.riv'

gsap.registerPlugin(useGSAP);

export default function Home() {

  const container = useRef();

  // useGSAP(
  //   () => {
  //     var tl = gsap.timeline();
  //     tl.to(".firstname", { x: 100, duration: 1, ease: 'back.inOut' })
  //       .to(".lastname", { x: -100, duration: 1, ease: 'back.inOut' }, "0");
  //   },
  //   { scope: container }
  // );


  return (
    <div>
      <div className='ml-auto mr-auto -z-50'>
        <div className='relative text-center text-green-600 text-[20vw] leading-none font-anton_display font-extrabold'>
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
    </div>
  );
}
