import { useEffect, useState } from 'react'

import img from '../../../assets/project/image.jpg'
import img1 from '../../../assets/project/image1.jpg'
import video from '../../../assets/project/Doom.mp4'

import { ProjectType } from '../../../api/modules/project/project.types'
import s from './ProjectPage.module.scss'
import Header from '../../../components/layouts/header/Header'
import Footer from '../../../components/layouts/footer/Footer'
import Container from '../../../components/layouts/container/Container'
import ContainerContent from '../../../components/layouts/containerContent/ContainerContent'
import { PROJECT_DESCRIPITON_2, PROJECT_DESCRIPTION_0, PROJECT_DESCRIPTION_1 } from '../../../app/content/ProjectPage'
import { ProjectService } from '../../../api/services/project.service'
import { useParams } from 'react-router-dom'


export default function ProjectPage() {
    const [project, setProject] = useState<ProjectType>() //задел под интеграцию с апи, сначала просто макет соберу
    const idProject = useParams()

    useEffect(() => {
        ProjectService.getById(Number(idProject.id)).then(setProject)
    },[idProject])

    console.log(idProject)
    console.log(project)
    console.log(idProject.id)

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
                            {project?.description_0 && (
                                <p className={s.description}>{project?.description_1}</p>
                            )}
                            {project?.video?.url && (
                                <video className={s.video} src={project.video.url} controls muted></video>
                            )}
                            {project?.description_0 && (
                                <p className={s.description}>{project?.description_2}</p>
                            )}

                        </div>
                    </ContainerContent>
                    
                </Container>
            </section>
            <Footer/>
        </div>
    </>)
}