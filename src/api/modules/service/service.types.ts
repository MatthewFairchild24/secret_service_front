export interface ImageType{
    id: number,
    url: string
}

export interface ServiceType{
    title: string
    preview_text:string
    description: string
    image_id_0: ImageType | null
    image_id_1:ImageType | null
    icon:ImageType | null
}