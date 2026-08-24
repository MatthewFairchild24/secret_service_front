import Container from "../../layouts/container/Container"

import s from './Project.module.scss'

import { useEffect, useRef, useState } from "react"
import ContainerContent from "../../layouts/containerContent/ContainerContent"
import { ProjectType } from "../../../api/modules/project/project.types"
import { ProjectService } from "../../../api/services/project.service"

export default function Project(){
    const [projects, setProjects] = useState<ProjectType[]>([])

    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ProjectService.get().then(setProjects)
    },[])


    const handlePrev = () => {
        if(!trackRef.current)return
        trackRef.current.scrollBy({left: -trackRef.current.clientWidth, behavior: "smooth"})
    }

    const handleNext = () => {
         if(!trackRef.current)return
        trackRef.current.scrollBy({left: trackRef.current.clientWidth, behavior: "smooth"})
    }

    return(
    <>
        <div className={s.section}>
            <Container>
                <ContainerContent>
                    <div className={s.containerProject}>
                    <h1 className={s.title}>
                        <span className={s.titleWhite}>Наши </span>
                        <span className={s.titleAccent}>проекты</span>
                    </h1>
                    <div className={s.carousel}>
                        <div className={s.track} ref={trackRef}>
                            {projects.map((project, i) => (
                                <div className={s.slide} key={i}>
                                    <div className={s.imageWrapper}>
                                        <img src={project.image_0?.url} alt="image" />
                                        <div className={s.overlay}></div>
                                    </div>
                                    <div className={s.textWrapper}>
                                        <h2 className={s.titleCard}>{project.title}</h2>
                                        <h1 className={s.subTitleCard}>{project.short_text}</h1>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>

                        <button className={s.prev} onClick={handlePrev}>&#10094;</button>
                        <button className={s.next} onClick={handleNext}>&#10095;</button>
                    </div>
                </div>      
                </ContainerContent>
                
            </Container>
        </div>
    </>
    )
}