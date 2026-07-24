import Header from '../../../components/layouts/header/Header'
import AboutUs from '../../../components/sections/aboutUs/AboutUs'
import Container from '../../../components/layouts/container/Container'

import s from './HomePage.module.scss'
import Project from '../../../components/sections/projects/Project'
import Services from '../../../components/sections/services/Services'

export default function HomePage(){
    return(<>
        <div className={s.page}>
            <Header/>
            <main className={s.main}>
                <section className={s.hero}>
                    <Container>
                        <div className={s.heroContent}>
                            <h1 className={s.title}>Надежные металлические конструкции для вашего участка</h1>
                            <p className={s.subTitle}>Современные решения для благоустройства территории и архитектурного оформления</p>

                            <div className={s.actions}>
                                {/* Что-нибудь добавлю */}
                            </div>
                        </div>
                    </Container>

                </section>

                <section className={`section section--loose ${s.sectionCompact}`}>
                    <AboutUs />
                </section>

                <section className={`section section--tigth ${s.sectionCompact}`}>
                    <Project />
                </section>

                <section className={`secction section--tight {s.sectionCompact}`}>
                    <Services></Services>
                </section>
            </main>
        </div>
       
        

    </>)
}