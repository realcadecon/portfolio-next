import ProjectModel from "@/models/ProjectModel";
import { sql } from "@vercel/postgres";

export default async function Work({
    params
}: {
    params: { user: string }
}): ProjectModel[] {

    const loadedProjects: ProjectModel[] = [];
    const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;
    for (const row in rows) {
        
    }
    return loadedProjects;
}