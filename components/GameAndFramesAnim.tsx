import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import Link from 'next/link';
import { useEffect } from 'react';
import TransitionLink from './TransitionLink';

export const GameAndFramesAnim = () => {
  const Input_HOVER = 'HoverTV';

  const { RiveComponent, rive } = useRive({
    src: '/Rive/portfolio.riv',
    artboard: "FullRightArea",
    stateMachines: "State Machine 1",
    autoplay: true,
  }, {
    fitCanvasToArtboardHeight: true,
  }
  );


  function changeBooelanStateAtPath(inputName: string, val: boolean, path: string) {
    // onHoverLeftInput.value = true;
    if (rive != null) {
      rive.setBooleanStateAtPath(inputName, val, path);
    } else {
      console.error("rive object is null",)
    }
  }

  useEffect(() => {
    if (rive) {
      setTimeout(() => {
        changeBooelanStateAtPath("HoverTV", true, "GamingSetup");
      }, 500);
      setTimeout(() => {
        changeBooelanStateAtPath("HoverTV", false, "GamingSetup");
      }, 3000);
    }
  }, [rive]);


  return (
    <div className='canvas-wrapper hidden md:block -bottom-8 absolute md:right-[-100%] md:w-[120%] lg:w-[80%] lg:right-[-90%]'>
      <RiveComponent
        role="img"
        aria-label="Gaming"
        className='relative w-[120%]'
      />
      <div className='absolute top-[12.5%] right-[18%] h-[11%] w-[32%] bg-orange-800 bg-opacity-0'
        onMouseEnter={() => {
          if (rive != null)
            rive.fireStateAtPath("InteractResume", "Frames");
        }}>
      </div>
      <TransitionLink href='/about'>
        <div className='absolute top-[7%] left-[10%] h-[23%] w-[32%] bg-lime-800 bg-opacity-0'
          onMouseEnter={() => {
            if (rive != null)
              rive.fireStateAtPath("InteractPortrait", "Frames");
          }}>
        </div>
      </TransitionLink>
      <TransitionLink href='/work'>
        <div className='absolute top-[37%] right-[2%] h-[29%] w-[65%] bg-blue-800 bg-opacity-0'
          onMouseEnter={() => changeBooelanStateAtPath("HoverTV", true, "GamingSetup")}
          onMouseLeave={() => changeBooelanStateAtPath("HoverTV", false, "GamingSetup")}>
        </div>
      </TransitionLink>
    </div>
  );

}