import { projectCategoryApi } from "../modules/project-categories/project-categories.api";
import { CreateProjectCategoryDTO } from "../modules/project-categories/project-categories.dto";


export const ProjectCategoryService = {
    upload(file: File):Promise<CreateProjectCategoryDTO>{
        const form = new FormData()
        form.append("file", file)
        return  projectCategoryApi.upload(form)
    },
    get(){
        return projectCategoryApi.getAll()
    },
    getById(id:number){
        return projectCategoryApi.getById(id)
    }
}