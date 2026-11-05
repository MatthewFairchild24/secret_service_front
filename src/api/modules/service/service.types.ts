export interface ImageType{
    id: number,
    url: string
}

export interface ServiceType{
    id:number
    title: string
    preview_text:string
    description: string
    image_0?: ImageType | null
    image_1?:ImageType | null
    icon?:ImageType | null
}