import { ProjectType } from "../../../../api/modules/project/project.types";
import { Link } from "react-router-dom";

import img from "../../../../assets/project/default_img.jpg"

import s from "./ProjectCard.module.scss"

export default function ProjectCard({project}: {project:ProjectType}){

    return(<>
        <div className={s.containerCard}>
            <Link to={`/project/${project.id}`}>
                <div className={s.imageWrapper}>
                    {project.image_0?.url ? (
                        <img src={project.image_0.url} alt="image_is_have" />
                    ) : (
                        <img src={img} alt="default_image" />
                    )}
                    {/* <img src={project.image_0?.url} alt="image" /> */}
                    <div className={s.overlay}></div>
                </div>
            </Link>
            
            <div className={s.textWrapper}>
                <h2 className={s.titleCard}>{project.title}</h2>
                <h1 className={s.subTitleCard}>{project.short_text}</h1>
            </div>
        </div>
    </>)
}