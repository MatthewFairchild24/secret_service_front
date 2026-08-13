
import { api } from "../../http/axios"
import { CreateServiceDTO } from "./service.dto"
import { ServiceType } from "./service.types"


export const serviceApi = {
    upload(form:FormData){
        return api.post<CreateServiceDTO>("/service", form).then(r => r.data)
    },
    getAll(){
        return api.get<ServiceType[]>("/service").then(r => r.data)
    }

}