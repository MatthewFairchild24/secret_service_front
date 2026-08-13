import { ServiceType } from "../../../../api/modules/service/service.types"
import s from "./ServiceCard.module.scss"


export default function ServiceCard({service}:{service:ServiceType}){
    return(<>
        <div className={s.containerCard}> 
            {service.icon?.url }
        <img src={service.icon?.url
        } alt="Неудача" />
            <h2 className={s.titleCard}>{service.title}</h2>
            <p className={s.descriptionCard}>{service.preview_text}</p>
            <button className={s.buttonCard}>Подробнее</button>
        </div>
        
    </>)
}