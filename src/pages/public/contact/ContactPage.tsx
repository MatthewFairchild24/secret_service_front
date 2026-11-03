import Container from '../../../components/layouts/container/Container'
import ContainerContent from '../../../components/layouts/containerContent/ContainerContent'
import Header from '../../../components/layouts/header/Header'
import Feedback from '../../../components/sections/freedback/Feedback'
import s from './ContactPage.module.scss'

export default function ContactPage(){
    return(
    <>
        <div className={s.page}>
            <Header/>
            <section className={s.main}>
                <Container>
                    <ContainerContent>
                        <div className={s.content}>
                            <div className={s.title}>
                                <div className={s.titleWhite}>Нащи</div>
                                <div className={s.titleAccent}>контакты</div>
                            </div>

                            <Feedback></Feedback>

                        </div>
                        
                    </ContainerContent>
                </Container>
            </section>

        </div>
    </>)
}