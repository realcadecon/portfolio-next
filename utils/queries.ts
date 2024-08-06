"use server"

import ProjectModel from "@/models/ProjectModel";
import { db } from "./db/index";
import {projectEnum} from "@/utils/db/schema";

import ProjectType from "@/models/ProjectType";


export async function getProjectInformation(props: {type: ProjectType}) {
    // let dbRes = {};
    console.log(props.type);
    let drizzleEnum: any;
    switch (props.type) {
        case ProjectType.Game:
            drizzleEnum = projectEnum.enumValues[1];
            break;
        case ProjectType.Work:
            drizzleEnum = projectEnum.enumValues[2];
            break;
        case ProjectType.Side:
            drizzleEnum = projectEnum.enumValues[3];
            break;
        default:
            drizzleEnum = projectEnum.enumValues[0];
            break;
    }

    // if(drizzleEnum == "ALL") {
    const dbRes = await db.query.projects.findMany();
    // } else {
    //     dbRes = await db.query.projects.findMany({
    //         where: (column, { ilike }) => ilike(column.type, drizzleEnum)
    //     });
    // }
    return dbRes;
    
    const loadedProjects: ProjectModel[] = [];
    // for(const row in dbRes) {
    //     loadedProjects.push({
    //         id: row.id,
    //         name: string;
    //         imgUrl: string;
    //         desc: string;
    //         type: ProjectType;
    //     });
    // }
    return loadedProjects;

}