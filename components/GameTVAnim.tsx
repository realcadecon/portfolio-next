import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import Link from 'next/link';
import { useEffect } from 'react';
import TransitionLink from './TransitionLink';

export const GameTVAnim = () => {
  const Input_HOVER = 'HoverTV';

  const { RiveComponent, rive } = useRive({
    src: '/Rive/portfolio2.riv',
    artboard: "GamingSetup",
    stateMachines: "State Machine 1",
    autoplay: true,
  }, {
    fitCanvasToArtboardHeight: true,
  }
  );

  const HoverTVSMInput = useStateMachineInput(rive, "State Machine 1", Input_HOVER);

  function TurnOnTV() {
    if (HoverTVSMInput != null) {
      HoverTVSMInput.value = true;
    }
  }

  function TurnOffTV() {
    if (HoverTVSMInput != null) {
      HoverTVSMInput.value = false;
    }
  }

  useEffect(() => {
    if (HoverTVSMInput) {
      setTimeout(() => {
        TurnOnTV();
        console.log("tv on")
      }, 500);
      setTimeout(() => {
        TurnOffTV();
        console.log("tv off")
      }, 3000);
    }
  }, [HoverTVSMInput]);


  return (
    <div className='canvas-wrapper -bottom-8 absolute w-[90%] right-[-115%]'>
      <RiveComponent
        role="img"
        aria-label="Gaming"
        className='relative w-[120%]'
      />
      <TransitionLink href='/work'>
        <div className='absolute top-[15%] right-[20%] h-[40%] w-[58%] bg-blue-800 bg-opacity-0'
          onMouseEnter={TurnOnTV}
          onMouseLeave={TurnOffTV}>
        </div>
      </TransitionLink>
    </div>
  );

}