import ProjectModel from "@/models/ProjectModel"


export const ProjectDisplay: React.FC<{project: ProjectModel}> = (props) => {

    const portProject: ProjectModel = props.project;
    return (
        <div className="text-center">
            <div>{portProject.name}</div>
            <img src="https://side-projs-blob.s3.amazonaws.com/portfolio/demeterLight.png" width="640" height="480"></img>
            <img src={portProject.imgUrl} className="w-1/4 h-1/4"></img>
            <div>{portProject.desc}</div>
            <div>{portProject.type}</div>
        </div>
    )
}