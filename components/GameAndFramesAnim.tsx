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
    <div className='canvas-wrapper -bottom-8 absolute w-[80%] right-[-115%]'>
      <RiveComponent
        role="img"
        aria-label="Gaming"
        className='relative w-[120%]'
      />
      <div className='absolute bottom-[40%] right-[12%] h-[26%] w-[35%] bg-orange-800 bg-opacity-50'
        onMouseEnter={() => {
          if (rive != null)
            rive.fireStateAtPath("InteractResume", "Frames");
        }}>
      </div>
      <TransitionLink href='/about'>
        <div className='absolute bottom-[24%] left-[10%] h-[60%] w-[35%] bg-lime-800 bg-opacity-50 transition'
          onMouseEnter={() => {
            if (rive != null)
              rive.fireStateAtPath("InteractPortrait", "Frames");
          }}>
        </div>
      </TransitionLink>
      <TransitionLink href='/work'>
        <div className='absolute top-[15%] right-[20%] h-[40%] w-[58%] bg-blue-800 bg-opacity-50'
          onMouseEnter={() => changeBooelanStateAtPath("HoverTV", true, "GamingSetup")}
          onMouseLeave={() => changeBooelanStateAtPath("HoverTV", false, "GamingSetup")}>
        </div>
      </TransitionLink>
    </div>
  );

}