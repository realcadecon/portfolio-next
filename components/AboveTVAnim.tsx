import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import Link from 'next/link';
import TransitionLink from './TransitionLink';
import { useEffect } from 'react';

export const AboveTVAnim = () => {
    const { RiveComponent, rive } = useRive({
        src: '/Rive/portfolio.riv',
        artboard: "Artboard",
        stateMachines: "State Machine 1",
        autoplay: true,
    }, {
        fitCanvasToArtboardHeight: true,
    }
    )

    const Resume = useStateMachineInput(rive, "State Machine 1", "InteractResume");
    const Portrait = useStateMachineInput(rive, "State Machine 1", "InteractPortrait");


    return (
        <div className='canvas-wrapper bottom-56 absolute w-[80%] right-[-110%]'>
            <RiveComponent
                role="img"
                aria-label="Photo Frame Animation"
                className='relative w-[100%]'
            />
            <div className='absolute bottom-[40%] right-[12%] h-[26%] w-[35%] bg-orange-800 bg-opacity-0'
                onMouseEnter={() => {
                    if(Resume!=null)
                        Resume.fire();
                    }}>
            </div>
            <TransitionLink href='/about'>
            <div className='absolute bottom-[24%] left-[10%] h-[60%] w-[35%] bg-lime-800 bg-opacity-0 transition'
                onMouseEnter={() => {
                    if(Portrait!=null) 
                        Portrait.fire();
                }}>
            </div>
            </TransitionLink>
        </div>
    );

}