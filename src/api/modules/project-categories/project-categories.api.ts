import { api } from "../../http/axios"
import { CreateProjectCategoryDTO } from "./project-categories.dto"
import { ProjectCategoryType } from "./project-categories.types"



export const projectCategoryApi = {
    upload(form: FormData){
        return api.post<CreateProjectCategoryDTO>('/project-categories', form).then(r => r.data)
    },

    getAll(){
        return api.get<ProjectCategoryType[]>('/project-categories').then(r => r.data)
    },

    getById(id:number){
        return api.get<ProjectCategoryType>(`/project-categories/${id}`).then(r => r.data)
    }
    
}