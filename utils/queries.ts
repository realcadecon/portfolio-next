"use server"

import { db } from "./db/index";
import ProjectType from "@/models/ProjectType";
import { and, arrayContains, inArray } from "drizzle-orm";


export async function getProjectInformation(props: { types: ProjectType[], tech: string[] }) {
    console.log(props.types);

    if (props.types.length == 0) {
        props.types.push(ProjectType.Work);
        props.types.push(ProjectType.Game);
        props.types.push(ProjectType.Side);
    }

    let dbRes = {};
    if(props.tech.length == 0) {
        dbRes = await db.query.projects.findMany({
            where: (model) => inArray(model.type, props.types)
        });
    } else {
        dbRes = await db.query.projects.findMany({
            where: (model) => and(
                inArray(model.type, props.types),
                arrayContains(model.tech, props.tech)
            )
        });
    }
    return dbRes;
}