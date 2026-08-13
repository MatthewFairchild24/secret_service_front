import { useEffect, useState } from 'react'
import { ServiceType } from '../../../api/modules/service/service.types'
import Container from '../../layouts/container/Container'
import ContainerContent from '../../layouts/containerContent/ContainerContent'
import ServiceCard from './card/ServiceCard'

import s from './Services.module.scss'
import { serviceService } from '../../../api/services/service.service'

// const cards: ServiceCardProps [] = [
//     {
//         icon: <FenceIcon />,
//         title: 'Fence',
//         description: 'Fence description'
//     },      
//     {
//         icon: <Paintbrush/>,
//         title: 'Paintbrush',
//         description: 'Paintbrush description а теперь давай представим, что это одно полноценное предложение которое вытянули из описания и оно тут висит и не знает что делать с концом'
//     },
//     {
//         icon: <HummerIcon/>,
//         title: 'Hummer',
//         description: 'Hummer descripiton'
//     },
//     {
//         icon: <WrenchIcon/>,
//         title: 'Wrench',
//         description: 'Wrench description'
//     }
// ]


export default function Services(){

    const [services, setServices] = useState<ServiceType[]>([])

    useEffect(()=>{
        serviceService.get().then(setServices)
    },[])

    return(<>
        <Container>
            <ContainerContent>
                <h1>Наши услуги</h1>

                <div className={s.containerService}>
                    {services.map((card, i) => (
                        <ServiceCard
                            key = {i} service={card}
                        />
                    ))}
                    
                    
                </div>
            </ContainerContent>
        </Container>


    </>)
}