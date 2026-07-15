import Container from "../../layouts/container/Container"

import s from './Project.module.scss'
import img from '../../../assets/project/image.jpg'
import img1 from '../../../assets/project/image1.jpg'
import img2 from '../../../assets/project/image2.jpg'
import img3 from '../../../assets/project/image3.jpg'
import { useRef } from "react"

export default function Project(){

    const trackRef = useRef<HTMLDivElement>(null)

    const images = [img, img1, img2, img3]

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
                <div className={s.containerProject}>
                    <div className={s.carousel}>
                        <div className={s.track} ref={trackRef}>
                            {images.map((src, i) => (
                                <div className={s.slide} key={i}>
                                    <img src={src} alt="image" />
                                </div>
                            ))}
                        </div>

                        <button className={s.prev} onClick={handlePrev}>назад</button>
                        <button className={s.next} onClick={handleNext}>вперед</button>
                    </div>
                </div>
            </Container>
        </div>
    </>
    )
}