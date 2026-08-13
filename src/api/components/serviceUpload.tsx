
import { CreateServiceDTO } from "../modules/service/service.dto"
import { serviceService } from "../services/service.service"
import React from "react"


export function ServiceUpload(){
    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if(!file) return

        const uploaded:CreateServiceDTO = await serviceService.upload(file)
        console. log("uploaded: ", uploaded)
    }

    return <input type="file" accept="video/*" onChange={handleUpload} />
}