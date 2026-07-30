import s from './Footer.module.scss'
import Container from '../container/Container'
import { NavLink, replace, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Footer(){

    const navigate = useNavigate()
    const location = useLocation()

    const [open, setOpen] = useState(false)

    const navItems = [
        {label: "Услуги", to:"/"},
        {label: "Проекты", to:"/"},
        {label: "Контакты", to:"/"},

    ]

    const scrollTopInstant = () => {
        window.scrollTo({top: 0, left: 0, behavior:"auto"})
    }

    const goHomeByLogo = (e:React.MouseEvent) =>{
        e.preventDefault()
        setOpen(false)
        navigate("/", {replace: location.pathname === '/'})
        scrollTopInstant()
    } 


    return(<>
        <footer className={s.footer}>
            <Container className={s.containerFooter}>
                <div className={s.grid}>
                    <div>
                        <div className={s.containerLogo}>
                            <NavLink to='/'
                                className={s.brand}
                                onClick={goHomeByLogo}
                                aria-label='На главную'
                            >
                                <span className={s.logoWrap} aria-hidden="true">
                                    <h1>LOGO</h1>
                                    <h2>Secret Service</h2>
                                </span>
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <div className={s.containerNavigation}>
                            <h3>Навигация</h3>
                            <nav className={s.nav}>
                                {navItems.map((i) => (
                                    <NavLink key={i.label} to={i.to} className={s.link}>{i.label}</NavLink>
                                ))}
                            </nav>
                        </div>
                    </div>
                    <div>
                        <div className={s.containerContacts}>
                            <h3>Контакты</h3>
                            <p>Телефон: <span className={s.phone}>+7(000)000-00-00</span></p>
                            <p>Почта: <span className={s.email}>somethingEmail@yandex.ru</span></p>
                            <p>Адрес: <span className={s.address}>something address 15/1</span></p>
                        </div>
                    </div>

                </div>

                <div className={s.bottom}>
                    <span>©{new Date().getFullYear()} Secret Service</span>
                </div>
            </Container>
        </footer>
    </>)
}