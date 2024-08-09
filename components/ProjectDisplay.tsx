/* eslint-disable @next/next/no-img-element */
import ProjectModel from "@/models/ProjectModel"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { useRef, useState } from "react";



export const ProjectDisplay: React.FC<{ project: ProjectModel }> = (props) => {
    const portProject: ProjectModel = props.project;

    const container = useRef(null);
    const [timeline, setTimeline] = useState<gsap.core.Timeline>();

    useGSAP(() => {
        const tl = gsap.timeline()
            .addLabel("init")
            .to(`.init-overlay-${portProject.id}`, { autoAlpha: 0, duration: .3 })
            .to(`#desc-${portProject.id}`, { autoAlpha: 1, duration: .3 })
            .reverse();
        setTimeline(tl);
    }, {scope: container})

    return (
        <a ref={container} className="relative container" href="/" onMouseEnter={() => {if(timeline) timeline.play()}} onMouseLeave={() => {if(timeline) timeline.reverse()}} onClick={() => gsap.to(".container", { display: "hidden" })}>
            <div className={`absolute text-white font-bold md:font-normal bottom-[3%] left-[5%] z-20 init-overlay-${portProject.id}`}>{portProject.name}</div>
            <video autoPlay playsInline loop muted className="rounded-3xl w-full object-cover" src={portProject.imgUrl}></video>
            <div className={`absolute shadow-overlay left-0 right-0 bg-gradient-to-t from-black bottom-0 h-[50%] z-10 rounded-b-3xl`}></div>
            <div className={`absolute bottom-[4%] right-[4%] inline-block py-[1%] px-[3%] rounded-full bg-primary z-20 text-xs font-semibold font-sans text-gray-200 init-overlay-${portProject.id}`}>{portProject.type}</div>
            <div className={`absolute z-20 bottom-[6%] left-[5%] w-[80%] text-white opacity-0`} id={`desc-${portProject.id}`}>{portProject.desc}</div>
        </a>
    )
}