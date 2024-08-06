/* eslint-disable @next/next/no-img-element */
import ProjectModel from "@/models/ProjectModel"

export const ProjectDisplay: React.FC<{ project: ProjectModel }> = (props) => {
    const portProject: ProjectModel = props.project;

    return (
        <div className="flex flex-col justify-center items-center text-center">
            <div>{portProject.name}</div>
            <video autoPlay loop muted className="" src={portProject.imgUrl}></video>
            <div>{portProject.desc}</div>
            <div>{portProject.type}</div>
        </div>
    )
}