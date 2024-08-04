
export class PortfolioProject {
    name: string;
    imgUrl: string;
    desc: string;
    type: string;

    constructor(projName: string, projImgUrl: string, projDesc: string, projType: string) {
        this.name = projName;
        this.imgUrl = projImgUrl;
        this.desc = projDesc;
        this.type = projType;
    }
};