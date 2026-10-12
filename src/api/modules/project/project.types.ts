export interface ImageType{
    id: number
    url: string
}

export interface VideoType{
    id: string
    url: string
}

export interface Category{
    id:number
    name: string
}

export interface ProjectType{
    id: number
    title: string
    description_0?: string 
    description_1?: string
    description_2?: string
    short_text: string
    image_0: ImageType 
    image_1?: ImageType | null
    video?: VideoType | null
    category?: Category | null
}
