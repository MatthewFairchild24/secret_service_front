import { DEFAULT_TEXT, DEFAULT_TITLE } from '../../../app/content/aboutUs'
import Container from '../../layouts/container/Container'

import s from './AboutUs.module.scss'

export default function AboutUs(){
    return(
    <>
        <div className={s.section}>
            <Container>
                <div className={s.containerAboutUs}>
                    <div className={s.contentText}>
                        <h1 className={s.title}>{DEFAULT_TITLE}</h1>
                        <p className={s.text}>{DEFAULT_TEXT.split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                <br/>
                            </span>
                        ))}</p>
                    </div>
                    <div className={s.stackPhoto}>
                        <div className={s.photoA}></div>
                        <div className={s.photoB}></div>
                    </div>
                </div>
            </Container>
        </div>
    </>)
}