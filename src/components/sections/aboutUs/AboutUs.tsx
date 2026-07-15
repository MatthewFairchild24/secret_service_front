import { ABOUT_TEXT, ABOUT_TITLE_ACCENT, ABOUT_TITLE_WHITE} from '../../../app/content/aboutUs'
import Container from '../../layouts/container/Container'

import s from './AboutUs.module.scss'

export default function AboutUs(){
    return(
    <>
        <div className={s.section}>
            <Container>
                <div className={s.containerAboutUs}>
                    <div className={s.contentText}>
                        <h1 className={s.title}>
                            <span className={s.titleWhite}>{ABOUT_TITLE_WHITE}</span>
                            <span className={s.titleAccent}>{ABOUT_TITLE_ACCENT}</span>
                        </h1>
                        <p className={s.text}>{ABOUT_TEXT.split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                <br/>
                            </span>
                        ))}</p>
                    </div>
                    <div className={s.stackPhoto}>
                        <div className={s.photoA}></div>
                        <button className={s.photoButton}>Портфолио</button>
                    </div>
                </div>
            </Container>
        </div>
    </>)
}