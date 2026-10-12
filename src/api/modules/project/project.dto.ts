export interface CreateProjectDTO{
    title: string
    description_0?: string 
    description_1?: string
    description_2?: string
    short_text: string
    image_id_0: {id: number, url: string}
    image_id_1?: {id: number, url: string} | null
    video_id?: {id: string, url: string} | null
    categories_id?:{id: number, name: string} | null
}