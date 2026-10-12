import { useEffect, useState } from 'react'

import Container from '../../../components/layouts/container/Container'
import ContainerContent from '../../../components/layouts/containerContent/ContainerContent'
import Header from '../../../components/layouts/header/Header'
import s from './ServicesPage.module.scss'
import { ServiceType } from '../../../api/modules/service/service.types'
import { serviceService } from '../../../api/services/service.service'
import ServiceCard from '../../../components/sections/services/card/ServiceCard'

export default function ServicesPage(){
    const [services, setServices] = useState<ServiceType[]>([])

    useEffect(()=>{
        serviceService.get().then(setServices) 
    },[])


    return(
    <>
        <div className={s.page}>
            <Header />
            <section className={s.main}>
                <Container>
                    <ContainerContent>
                        
                        <div className={s.content}>
                            
                            <div className={s.title}>
                                <div className={s.titleWhite}>Наши</div>
                                <div className={s.titleAccent}>услуги</div>
                            </div>
                            <div className={s.containerService}>
                                {services.map((card, i) => (
                                    <ServiceCard key={i} service={card}></ServiceCard>
                                ))}
                            </div>
                        </div>
                        
                    </ContainerContent>
                </Container>
            </section>
        </div>
    </>)
}