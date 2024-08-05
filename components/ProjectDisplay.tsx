import { PortfolioProject } from "../models/ProjectModel"


export const ProjectDisplay: React.FC<{project: PortfolioProject}> = (props) => {

    const portProject: PortfolioProject = props.project;
    return (
        <div className="text-center">
            <div>{portProject.name}</div>
            <img src={portProject.imgUrl} className="w-1/4 h-1/4"></img>
            <div>{portProject.desc}</div>
            <div>{portProject.type}</div>
        </div>
    )
}