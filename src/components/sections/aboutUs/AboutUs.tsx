import Container from '../../layouts/container/Container'

import s from './AboutUs.module.scss'

export default function AboutUs(){
    return(
    <>
        <div className={s.section}>
            <Container>
                <div className={s.containerAboutUs}>
                    <div className={s.contentText}>
                        <h2 className={s.title}></h2>
                        <p className={s.text}></p>
                    </div>
                    <div className={s.contentImage}></div>
                </div>
            </Container>
        </div>
    </>)
}