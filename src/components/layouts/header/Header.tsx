import { NavLink, useLocation, useNavigate } from "react-router-dom"
import logoMarkUrl, {ReactComponent as LogoMark} from '../../../assets/brand/logo_ss_rigth_text_1.svg'

import Container from "../container/Container"
import s from "./Header.module.scss"
import { useState } from "react"

export default function Header(){

    const navigate = useNavigate()
    const location = useLocation()

    const [open, setOpen] = useState(false)


    const navItems = [
        {label:'Услуги', to:'/'},
        {label:'Проекты', to:'/'},
        {label:'Контакты', to:'/'},
    ]

    const scrollTopInstance = () => {
        window.scrollTo({top:0, left:0, behavior:"auto"})
    }

    const goHomebyLogo = (e:React.MouseEvent) =>{
        e.preventDefault()
        setOpen(false)
        navigate("/", {replace: location.pathname === '/'})
        scrollTopInstance()

    }


    return(<>
        <header className={s.header}>
            <Container className={s.containerHeader}>
                <div className={s.row}>
                    <NavLink to="/"
                    className={s.brand}
                    onClick={goHomebyLogo}
                    aria-label="На главную">
                        <span className={s.logoWrap} aria-hidden="true">
                            <h2>LOGO</h2>
                            {/* <LogoMark className={s.logoSvg}/>    Потом переделаю когда захочу повозиться с дизайном, пока планирую больше уделять времени концепту и практике  */} 
                        </span>
                    </NavLink>

                    <nav className={s.nav}>
                        {navItems.map((i) => (
                            <NavLink key={i.label} to={i.to} className={s.link}>{i.label}</NavLink>
                        ))}
                    </nav>

                    <div className={s.right}>
                        <button className={s.phone}>+7(000)000-00-00</button>
                    </div>
                </div>
            </Container>
        </header>
    </>)
}