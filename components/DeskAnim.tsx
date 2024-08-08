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
                <div className='absolute top-[41%] left-[0%] h-[18%] w-[48%] bg-blue-800 bg-opacity-0 transition hover:translate-y-[-29%]'
                    onMouseEnter={Up_LMonitor}
                    onMouseLeave={Down_LMonitor}>
                </div>
            </TransitionLink>
            <TransitionLink href='/work'>
                <div className='absolute top-[41%] left-[49%] h-[18%] w-[48%] bg-green-800 bg-opacity-0 transition hover:translate-y-[-27%]'
                    onMouseEnter={Up_RMonitor}
                    onMouseLeave={Down_RMonitor}>
                </div>
            </TransitionLink>
            <div className='java-book absolute top-[12%] left-[74%] h-[13.5%] w-[7%] bg-green-800 bg-opacity-0 transition hover:scale-y-[130%] hover:translate-y-[-10%]'
                onMouseEnter={() => changeBooelanStateAtPath('JavaHover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('JavaHover', false, "Bookshelf")}>
            </div>
            <div className='c-book absolute top-[12%] left-[82%] h-[13.5%] w-[7%] bg-blue-800 bg-opacity-0 transition hover:scale-y-[130%] hover:translate-y-[-10%]'
                onMouseEnter={() => changeBooelanStateAtPath('CHover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('CHover', false, "Bookshelf")}>
            </div>
            <div className='ue1-book absolute top-[10%] left-[90%] h-[16%] w-[4%] bg-yellow-800 bg-opacity-0 transition hover:scale-y-[130%] hover:translate-y-[-10%]'
                onMouseEnter={() => changeBooelanStateAtPath('UE1Hover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('UE1Hover', false, "Bookshelf")}>
            </div>
            <div className='ue2-book absolute top-[10%] left-[95%] h-[16%] w-[4%] bg-red-800 bg-opacity-0 transition hover:scale-y-[130%] hover:translate-y-[-10%]'
                onMouseEnter={() => changeBooelanStateAtPath('UE2Hover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('UE2Hover', false, "Bookshelf")}>
            </div>
            <div className='ue3-book absolute top-[10%] left-[101%] h-[16%] w-[4%] bg-purple-800 bg-opacity-0 transition hover:scale-y-[130%] hover:translate-y-[-10%]'
                onMouseEnter={() => changeBooelanStateAtPath('UE3Hover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('UE3Hover', false, "Bookshelf")}>
            </div>
            <div className='ue3-book absolute top-[13%] left-[106%] h-[13%] w-[8%] bg-orange-800 bg-opacity-0 transition hover:scale-y-[135%] hover:translate-y-[-13%]'
                onMouseEnter={() => changeBooelanStateAtPath('ReactHover', true, "Bookshelf")}
                onMouseLeave={() => changeBooelanStateAtPath('ReactHover', false, "Bookshelf")}>
            </div>
            <TransitionLink href='/about'>
            <div className='ue3-book absolute top-[14%] left-[8%] h-[17.5%] w-[35%] bg-lime-800 bg-opacity-0 transition '
                onMouseEnter={() => {
                    if(rive!=null) 
                        rive.fireStateAtPath('Interact', "DiplomaAB");
                }}>
            </div>
            </TransitionLink>
        </div>
    );

}