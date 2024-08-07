import { useRive } from '@rive-app/react-canvas';
import Link from 'next/link';
import TransitionLink from './TransitionLink';
import { useEffect } from 'react';

export const DeskAnim = () => {
    const { RiveComponent, rive } = useRive({
        src: '/Rive/portfolio.riv',
        artboard: "Full Desk",
        stateMachines: "State Machine 1",
        autoplay: true,
    }, {
        fitCanvasToArtboardHeight: true,
    }
    )

    const Input_HOVER_L = 'HoverL';
    const Input_HOVER_R = 'HoverR';
    const Input_HOVER_Java = 'JavaHover';
    const Input_HOVER_C = 'CHover';
    const Input_HOVER_UE1 = 'UE1Hover';
    const Input_HOVER_UE2 = 'UE2Hover';
    const Input_HOVER_UE3 = 'UE3Hover';
    const Input_HOVER_React = 'ReactHover';


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
                <div className='absolute top-[38%] left-[0%] h-[15%] w-[50%] bg-blue-800 bg-opacity-50 transition hover:translate-y-[-30%]'
                    onMouseEnter={Up_LMonitor}
                    onMouseLeave={Down_LMonitor}>
                </div>
            </TransitionLink>
            <TransitionLink href='/work'>
                <div className='absolute top-[12%] left-[57%] h-[24%] w-[50%] bg-green-800 bg-opacity-50 transition hover:translate-y-[-30%]'
                    onMouseEnter={Up_RMonitor}
                    onMouseLeave={Down_RMonitor}>
                </div>
            </TransitionLink>
            <div className='java-book absolute top-[12%] left-[0%] h-[10%] w-[5%] bg-green-800 bg-opacity-50 transition hover:translate-y-[-30%]'
                onMouseEnter={() => changeBooelanStateAtPath('JavaHover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('JavaHover', false, "Bookshelf")}>
            </div>
            <div className='c-book absolute top-[12%] left-[5%] h-[10%] w-[5%] bg-blue-800 bg-opacity-50 transition hover:translate-y-[-30%]'
                onMouseEnter={() => changeBooelanStateAtPath('CHover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('CHover', false, "Bookshelf")}>
            </div>
            <div className='ue1-book absolute top-[12%] left-[10%] h-[10%] w-[5%] bg-yellow-800 bg-opacity-50 transition hover:translate-y-[-30%]'
                onMouseEnter={() => changeBooelanStateAtPath('UE1Hover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('UE1Hover', false, "Bookshelf")}>
            </div>
            <div className='ue2-book absolute top-[12%] left-[15%] h-[10%] w-[5%] bg-red-800 bg-opacity-50 transition hover:translate-y-[-30%]'
                onMouseEnter={() => changeBooelanStateAtPath('UE2Hover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('UE2Hover', false, "Bookshelf")}>
            </div>
            <div className='ue3-book absolute top-[12%] left-[20%] h-[10%] w-[5%] bg-purple-800 bg-opacity-50 transition hover:translate-y-[-30%]'
                onMouseEnter={() => changeBooelanStateAtPath('UE3Hover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('UE3Hover', false, "Bookshelf")}>
            </div>
            <div className='ue3-book absolute top-[12%] left-[25%] h-[10%] w-[5%] bg-orange-800 bg-opacity-50 transition hover:translate-y-[-30%]'
                onMouseEnter={() => changeBooelanStateAtPath('ReactHover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('ReactHover', false, "Bookshelf")}>
            </div>
            <div className='ue3-book absolute top-[12%] left-[30%] h-[10%] w-[5%] bg-lime-800 bg-opacity-50 transition hover:translate-y-[-30%]'
                onMouseEnter={() => {
                    if(rive!=null) 
                        rive.fireStateAtPath('Interact', "DiplomaAB");
                }}>
            </div>
        </div>
    );

}