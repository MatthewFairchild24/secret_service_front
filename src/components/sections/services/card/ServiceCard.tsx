import s from "./ServiceCard.module.scss"

import { ReactNode } from "react"


export type ServiceCardProps = {
    title: string
    description: string
    icon: ReactNode
}


export default function ServiceCard({title, description, icon}:ServiceCardProps){
    return(<>
        <div className={s.containerCard}> 
            {icon }
            <h2 className={s.titleCard}>{title}</h2>
            <p className={s.descriptionCard}>{description}</p>
            <button className={s.buttonCard}>Подробнее</button>
        </div>
        
    </>)
}