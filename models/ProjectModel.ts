import ProjectType from "./ProjectType";

class ProjectModel {
    id: number;
    name: string;
    imgUrl: string;
    desc: string;
    type: ProjectType;
    link: string;

    constructor(id: number, projName: string, projImgUrl: string, projDesc: string, projType: ProjectType, projLink: string) {
        this.id = id;
        this.name = projName;
        this.imgUrl = projImgUrl;
        this.desc = projDesc;
        this.type = projType;
        this.link = projLink;
    }
};



export default ProjectModel;