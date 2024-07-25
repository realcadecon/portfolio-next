import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import Link from 'next/link';

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
    HoverTVSMInput.value = true;
  }

  function TurnOffTV() {
    HoverTVSMInput.value = false;
  }


  return (
    <div className='canvas-wrapper bottom-0 absolute w-[90%] right-[-115%]'>
      <RiveComponent
        role="img"
        aria-label="Gaming"
        className='relative w-[120%]'
      />
      <Link className='absolute top-[15%] right-[20%] h-[40%] w-[58%] bg-blue-800 bg-opacity-0'
        onMouseEnter={TurnOnTV}
        onMouseLeave={TurnOffTV}
        href='/work'>
      </Link>
    </div>
  );

}