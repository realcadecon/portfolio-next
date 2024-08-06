import ProjectModel from "@/models/ProjectModel"


export const ProjectDisplay: React.FC<{ project: ProjectModel }> = (props) => {

    const portProject: ProjectModel = props.project;



    return (
        <div className="flex flex-col justify-center items-center text-center">
            <div>{portProject.name}</div>

            <div className="video-container p-5">
                {portProject.imgUrl.endsWith("mp4") ?
                    <video autoPlay loop muted className="object-cover w-full rounded-md" src={portProject.imgUrl}></video>
                    :
                    <img src={portProject.imgUrl} className="object-cover w-[400%] rounded-md" alt={`Screenshot of ${portProject.name} project`}></img>
                }
            </div>
            <div>{portProject.desc}</div>
            <div>{portProject.type}</div>
        </div>
    )
}