import { serviceApi } from "../modules/service/service.api"
import { CreateServiceDTO } from "../modules/service/service.dto"

export const serviceService = {
    upload(file: File):Promise<CreateServiceDTO>{
        const form = new FormData()
        form.append("file", file)
        return serviceApi.upload(form)
    },
    get(){
        return serviceApi.getAll()
    }
}