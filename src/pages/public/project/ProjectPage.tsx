import { useEffect, useState } from 'react'

import { ProjectType } from '../../../api/modules/project/project.types'
import s from './ProjectPage.module.scss'
import Header from '../../../components/layouts/header/Header'
import Footer from '../../../components/layouts/footer/Footer'
import Container from '../../../components/layouts/container/Container'
import ContainerContent from '../../../components/layouts/containerContent/ContainerContent'
import { ProjectService } from '../../../api/services/project.service'
import { useParams } from 'react-router-dom'
import Project from '../../../components/sections/projects/Project'


export default function ProjectPage() {
    const [project, setProject] = useState<ProjectType>() 
    const idProject = useParams()

    useEffect(() => {
        ProjectService.getById(Number(idProject.id)).then(setProject)
    },[idProject])



    return(<>
        <div className={s.page}>
            <Header/>
            <section className={s.main}>
                <Container> 
                    <ContainerContent>
                        <div className={s.content}>
                            <h1 className={s.title}>
                                {/* <span className={s.titleWhite}>Название </span>
                                <span className={s.titleAccent}>проекта</span> */}
                                {project?.title}
                            </h1>
                            {project?.image_0?.url && ( 
                                <img className={s.image_0} src={project?.image_0?.url} alt='image_0'></img>
                            )}
                            {project?.description_0 && (
                                <p className={s.description}>{project?.description_0}</p>
                            )}
                            {/* <p className={s.description}>{project?.description_0 }</p> */}
                            {project?.image_1?.url && (
                                <img className={s.image_1} src={project?.image_1?.url} alt='image_1'></img>
                            )}
                            {/* <img className={s.image_1} src={project?.image_1?.url} alt="image_1" /> */}
                            {project?.description_1 && (
                                <p className={s.description}>{project?.description_1}</p>
                            )}
                            {project?.video?.url && (
                                <video className={s.video} src={project.video.url} controls muted></video>
                            )}
                            {project?.description_2 && (
                                <p className={s.description}>{project?.description_2}</p>
                            )}


                            <Project />

                        </div>
                    </ContainerContent>
                    
                </Container>
            </section>
            <Footer/>
        </div>
    </>)
}