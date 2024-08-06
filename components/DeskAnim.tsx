import { useRive } from '@rive-app/react-canvas';
import Link from 'next/link';
import TransitionLink from './TransitionLink';
import { useEffect } from 'react';

export const DeskAnim = () => {
    const { RiveComponent, rive } = useRive({
        src: '/Rive/portfolio2.riv',
        artboard: "Full Desk",
        stateMachines: "State Machine 1",
        autoplay: true,
    }, {
        fitCanvasToArtboardHeight: true,
    }
    )

    const Input_HOVER_L = 'HoverL';
    const Input_HOVER_R = 'HoverR';


    function Up_LMonitor() {
        // onHoverLeftInput.value = true;
        if (rive != null) {
            rive.setBooleanStateAtPath(Input_HOVER_L, true, "LEFT");
        } else {
            console.error("rive object is null",)
        }
    }

    function Down_LMonitor() {
        // onHoverLeftInput.value = false;
        if (rive != null) {
            rive.setBooleanStateAtPath(Input_HOVER_L, false, "LEFT");
        } else {
            console.error("rive object is null",)
        }
    }

    function Up_RMonitor() {
        // onHoverLeftInput.value = true;
        if (rive != null) {
            rive.setBooleanStateAtPath(Input_HOVER_R, true, "RIGHT");
        } else {
            console.error("rive object is null",)
        }
    }

    function Down_RMonitor() {
        // onHoverLeftInput.value = false;
        if (rive != null) {
            rive.setBooleanStateAtPath(Input_HOVER_R, false, "RIGHT");
        } else {
            console.error("rive object is null",)
        }
    }

    useEffect(() => {
        if (rive) {
            setTimeout(() => {
                Up_LMonitor();
                console.log("up left")
            }, 500);
            setTimeout(() => {
                Down_LMonitor();
                console.log("down left")
            }, 1000);
            setTimeout(() => {
                Up_RMonitor();
                console.log("up right")
            }, 600);
            setTimeout(() => {
                Down_RMonitor();
                console.log("down right")
            }, 1100);
        }
    }, [rive]);


    return (
        <div className='canvas-wrapper -bottom-10 absolute w-[90%] left-[-130%]'>
            <RiveComponent
                role="img"
                aria-label="Desk Animation"
                className='relative w-[140%]'
            />
            <TransitionLink href='/work'>
                <div className='absolute top-[12%] left-[2%] h-[24%] w-[50%] bg-blue-800 bg-opacity-0 transition hover:translate-y-[-30%]'
                    onMouseEnter={Up_LMonitor}
                    onMouseLeave={Down_LMonitor}>
                </div>
            </TransitionLink>
            <TransitionLink href='/work'>
                <div className='absolute top-[12%] left-[57%] h-[24%] w-[50%] bg-green-800 bg-opacity-0 transition hover:translate-y-[-30%]'
                    onMouseEnter={Up_RMonitor}
                    onMouseLeave={Down_RMonitor}>
                </div>
            </TransitionLink>
        </div>
    );

}