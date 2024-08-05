"use client"

import { ProjectDisplay } from "@/components/ProjectDisplay";
import ProjectModel from "@/models/ProjectModel";
import Link from "next/link";
import { useState } from "react";


export default function Work() {

    const [portProjs, setPortProjs] = useState<ProjectModel[]>([]);



    return (
        <div>
            My Work Display
            <br />
            <Link href="/">Back to Home</Link>
            <div className="grid grid-cols-3 grid-flow-row mx-auto">
                {
                portProjs.map(proj =>
                    <ProjectDisplay project={proj} key={proj.name}/>
                )}
            </div>
        </div>
    )
}