import { CreateProjectDTO } from "../modules/project/project.dto";
import { projectApi } from "../modules/project/project.api";


export const ProjectService = {
    upload(file: File):Promise<CreateProjectDTO>{
        const form = new FormData()
        form.append("file", file)
        return projectApi.upload(form)
    },
    get(){
        return projectApi.getAll()
    },
    getById(id: number){
        return projectApi.getById(id)
    }
}