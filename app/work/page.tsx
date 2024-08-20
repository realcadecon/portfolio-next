"use client"

import { ProjectDisplay } from "@/components/ProjectDisplay";
import ProjectModel from "@/models/ProjectModel";
import { Suspense, useEffect, useState } from "react";
import { getProjectInformation } from "@/utils/queries";
import ProjectType from "@/models/ProjectType";
import Select, { MultiValue } from "react-select"
import { useSearchParams } from "next/navigation";

export default function Work() {

    const [portProjs, setPortProjs] = useState<ProjectModel[]>([]);
    const [dbError, setDBError] = useState("");
    const [projFilter, setProjFilter] = useState<ProjectType[]>([ProjectType.Work, ProjectType.Game, ProjectType.Side]);
    const [techFilter, setTechFilter] = useState<string[]>([]);
    const [search, setSearch] = useState<number>(-1);

    const proj = [
        { value: ProjectType.Work, label: "Work" },
        { value: ProjectType.Game, label: "Games" },
        { value: ProjectType.Side, label: "Side" },
    ]

    const tech = [
        { value: "Java", label: "Java" },
        { value: "SpringBoot", label: "Spring Boot" },
        { value: "C++", label: "C++" },
        { value: "React", label: "React" },
        { value: "NextJS", label: "NextJS" },
        { value: "TailwindCSS", label: "Tailwind CSS" },
        { value: "Blender", label: "Blender" },
        { value: "UE5", label: "Unreal Engine 5" },

    ]

    const searchParams = useSearchParams();
    const paramValue = searchParams.get("type");
    


    const handleProjChange = (newValues: MultiValue<{ value: ProjectType; label: string; }>) => {
        const newProjs: ProjectType[] = [];
        newValues.forEach((val) => newProjs.push(val.value));
        setProjFilter([...newProjs]);
        setSearch(-1);
    }

    const handleTechChange = (newValues: MultiValue<{ value: string; label: string; }>) => {
        const newTech: string[] = [];
        console.log(newValues);
        newValues.forEach((val) => newTech.push(val.value.toUpperCase()));
        setTechFilter([...newTech]);
    }

    useEffect(() => {
        switch (paramValue) {
            case "work":
                setProjFilter([ProjectType.Work]);
                setSearch(0);
                break;
            case "games":
                setProjFilter([ProjectType.Game]);
                setSearch(1);
                break;
            case "side":
                setProjFilter([ProjectType.Side]);
                setSearch(2);
                break;
            default:
                setProjFilter([]);
                setSearch(-1);
        }
    }, [paramValue])

    useEffect(() => {
        console.log(projFilter);
        const fetchProjects = async () => {
            const projects: any = await getProjectInformation({ types: projFilter, tech: techFilter });
            console.log(projects)
            setPortProjs(projects);
        }

        fetchProjects().catch((error: any) => {
            setDBError(error.message);
            console.error(error.message);
        })

    }, [projFilter, techFilter]);

    return (
        <div className="bg-base min-h-screen p-8 md:p-10 mb-[15%]">
            <div className="flex justify-center items-center gap-3 mb-5 font-roboto">
                <label className="font-medium">Type:</label>
                {search === -1 ? 
                    <Select className="z-30" isMulti closeMenuOnSelect={false} options={proj} onChange={(newValue) => handleProjChange(newValue)} />
                    :
                    <Select value={proj[search]} className="z-30" isMulti closeMenuOnSelect={false} options={proj} onChange={(newValue) => handleProjChange(newValue)} />
                }                
                <label className="font-medium">Tech:</label>
                <Select className="z-30 max-w-96" isMulti closeMenuOnSelect={false} options={tech} onChange={(newValue => handleTechChange(newValue))} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row mx-auto md:px-4">
                {portProjs.map(proj =>
                    <ProjectDisplay project={proj} key={proj.name} />
                )}
            </div>
        </div>
    )
}