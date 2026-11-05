import { useEffect, useState } from "react"
import { ServiceType } from "../../../api/modules/service/service.types"
import { useParams } from "react-router-dom"
import { serviceService } from "../../../api/services/service.service"

import s from "./ServicePage.module.scss"
import Header from "../../../components/layouts/header/Header"
import Footer from "../../../components/layouts/footer/Footer"
import Container from "../../../components/layouts/container/Container"
import ContainerContent from "../../../components/layouts/containerContent/ContainerContent"
import Services from "../../../components/sections/services/Services"


export default function ServicePage() {
    const [service, setService] = useState<ServiceType>()
    const idService = useParams()
    console.log(service)
    useEffect(() => {
            serviceService.getById(Number(idService.id)).then(setService)
            
        },[idService])


    return(<>
        <div className={s.page}>
            <Header />
            <section className={s.main}>
                <Container>
                    <ContainerContent>
                        <div className={s.content}>
                            <h1 className={s.title}>
                                {service?.title}
                            </h1>
                            {service?.image_0?.url && (
                                <img className={s.image_0} src={service?.image_0?.url} alt="image_0" />
                            )}    
                            {service?.description && (
                                <p className={s.description}>{service?.description}</p>
                            )}
                            {service?.image_1?.url && (
                                <img className={s.image_1} src={service?.image_1?.url} alt="image_1" />
                            )}    

                            <Services />
                            
                        </div>
                    </ContainerContent>
                </Container>
            </section>
            <Footer />
        </div>
    </>)
}