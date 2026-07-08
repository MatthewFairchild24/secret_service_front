import { NavLink } from "react-router-dom"
import logoMarkUrl, {ReactComponent as LogoMark} from '../../../assets/brand/logo_ss_rigth_text_1.svg'

import Container from "../container/Container"
import s from "./Header.module.scss"

export default function Header(){
    const navItems = [
        {label:'Main', to:'/'},
        {label:'notMain', to:'/'}
    ]


    return(<>
        <header>
            <Container className={s.containerHeader}>
                <div className={s.row}>
                    <NavLink to="/" className={s.brand}>
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