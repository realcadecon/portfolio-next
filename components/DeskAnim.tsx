import { useRive } from '@rive-app/react-canvas';
import Link from 'next/link';

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
        rive.setBooleanStateAtPath(Input_HOVER_L, true, "LEFT")
    }

    function Down_LMonitor() {
        // onHoverLeftInput.value = false;
        rive.setBooleanStateAtPath(Input_HOVER_L, false, "LEFT")
    }

    function Up_RMonitor() {
        // onHoverLeftInput.value = true;
        rive.setBooleanStateAtPath(Input_HOVER_R, true, "RIGHT")
    }

    function Down_RMonitor() {
        // onHoverLeftInput.value = false;
        rive.setBooleanStateAtPath(Input_HOVER_R, false, "RIGHT")
    }

    return (
        <div className='canvas-wrapper bottom-0 absolute w-[90%] left-[-115%]'>
            <RiveComponent
                role="img"
                aria-label="Desk Animation"
                className='relative w-[120%]'
            />
            <Link className='absolute top-[13%] left-[2%] h-[25%] w-[42%] bg-blue-800 bg-opacity-0'
                onMouseEnter={Up_LMonitor}
                onMouseLeave={Down_LMonitor}
                href="/work">
            </Link>
            <a className='absolute top-[13%] left-[50%] h-[25%] w-[42%] bg-green-800 bg-opacity-0'
                onMouseEnter={Up_RMonitor}
                onMouseLeave={Down_RMonitor}
                href="/work">
            </a>
            <div className='fixed bg-green-900 w-5/6 bottom-[13vh] -z-10 h-1'></div>
        </div>
    );

}