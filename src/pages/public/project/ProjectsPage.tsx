import s from './ProjectsPage.module.scss'
import Footer from "../../../components/layouts/footer/Footer";
import Header from "../../../components/layouts/header/Header";
import Container from '../../../components/layouts/container/Container';
import ContainerContent from '../../../components/layouts/containerContent/ContainerContent';
import { useEffect, useState } from 'react';
import { ProjectCategoryType } from '../../../api/modules/project-categories/project-categories.types';
import { ProjectCategoryService } from '../../../api/services/project-categories.service';
import { ProjectType } from '../../../api/modules/project/project.types';
import { ProjectService } from '../../../api/services/project.service';
import ProjectCard from './component/ProjectCard';

import {motion, AnimatePresence} from 'framer-motion'



export default function ProjectsPage(){
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
    const [projectCategory, setProjectCategory] = useState<ProjectCategoryType[]>([])
    const [projects, setProjects] = useState<ProjectType[]>([])

    useEffect(() => {
        ProjectCategoryService.get().then(setProjectCategory)    
    },[])

    useEffect(()=>{
        ProjectService.get().then(setProjects)
    },[])
    
    const filteredProject = selectedCategory
        ? projects.filter(
            project => project.category?.id === selectedCategory
        )
        : projects


    return <>
        <div className={s.page}>
            <Header />
            <section className={s.main}>
                <Container>
                    <ContainerContent>
                        <div className={s.content}>
                            <div className={s.title}>
                                <span className={s.titleWhite}>Наши </span>
                                <span className={s.titleAccent}>проекты</span>
                            </div>
                            <div className={s.projectCategoryContent}>
                                <div className={s.category}>
                                    {projectCategory.map((category, i) => (
                                        <div 
                                        className={`${s.categoryItem} ${selectedCategory === category.id ? s.active : '' }`} 
                                        key={i}
                                        onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}>
                                            {category.name}
                                        </div>
                                    ))}
                                </div>  
                                <div className={s.projectContent}>
                                    <AnimatePresence>
                                        {filteredProject.map((project, i) => (
                                            <motion.div
                                            key={project.id}
                                            layout
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            transition={{duration: 0.4}}>
                                                <ProjectCard project={project} key={i}/>
                                            </motion.div>
                                        ))}   
                                    </AnimatePresence>
                                    
                                </div>                              
                            </div>

                            
                        </div>
                    </ContainerContent>
                </Container>
            </section>
            <Footer />
        </div>
        
    </>
}   