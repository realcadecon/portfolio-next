"use client"

import { ProjectDisplay } from "@/components/ProjectDisplay";
import ProjectModel from "@/models/ProjectModel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProjectInformation } from "@/utils/queries";
import ProjectType from "@/models/ProjectType";
import TransitionLink from "@/components/TransitionLink";

export default function Work() {

    const [portProjs, setPortProjs] = useState<ProjectModel[]>([]);
    const [dbError, setDBError] = useState("");
    const [projFilter, setProjFilter] = useState<ProjectType>(ProjectType.All);

    useEffect(() => {
        const fetchProjects = async () => {
            const projects: any = await getProjectInformation({ type: ProjectType.Work });
            console.log(projects)
            setPortProjs(projects);
        }

        fetchProjects().catch((error: any) => {
            setDBError(error.message);
            console.error(error.message);
        })
    }, []);


    return (
        <div className="bg-base min-h-screen pb-10">
            <div className="text-center p-6 text-primary">
                <TransitionLink href="/">Back to Home</TransitionLink>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row mx-auto px-4">
                {portProjs.map(proj =>
                    <ProjectDisplay project={proj} key={proj.name} />
                )}
            </div>
        </div>
    )
}