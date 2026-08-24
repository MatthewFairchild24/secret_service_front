import { api } from "../../http/axios"
import { CreateProjectDTO } from "./project.dto"
import { ProjectType } from "./project.types"

export const projectApi = {
    upload(form: FormData){
        return api.post<CreateProjectDTO>('/project', form).then(r => r.data)
    },

    getAll(){
        return api.get<ProjectType[]>('/project').then(r => r.data)
    }
}