export interface CreateServiceDTO{
    title: string
    preview_text:string
    description?: string
    image_id_0?: {id: number, url: string} | null
    image_id_1?:{id: number, url: string} | null
    icon:{id: number, url: string} | null
}