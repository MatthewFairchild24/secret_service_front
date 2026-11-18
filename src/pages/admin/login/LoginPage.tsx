import { useEffect, useState } from "react"
import Container from "../../../components/layouts/container/Container"
import ContainerContent from "../../../components/layouts/containerContent/ContainerContent"
import s from "./LoginPage.module.scss"
import { useNavigate } from "react-router-dom"
import { apiFetch } from "../../../api/components/apiFetch"
import { color } from "framer-motion"

export default function LoginPage(){

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        login: '',
        password: ''
    })
    // const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")


    const handleSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        setError("")

        try {
            const res = await apiFetch('/admin/auth', {
                method: "POST",
                body: JSON.stringify(loginData)
            })

            if(!res.ok){
                const data = await res.json()
                throw new Error(data.message || "Ошибка авторизации")
            }

            const accessToken = await res.json()
            localStorage.setItem("token", accessToken)
            // navigate('/panel') Когда дома доделаю ДАшборд тогда поменяю
            
            alert(`Красава хоть как-то у тебя получилось сделать авторизацию`)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Что-то пошло не так, ты ебанько")
        }
    }

    
    return(<>
        <div className={s.page}>
            <Container>
                <ContainerContent>    
                    <form action="" onSubmit={handleSubmit}>
                        <div className={s.content}>
                            <h2>Уеба</h2>
                            <input className={s.input} type="text" placeholder="Логинидзе" name='login' value={loginData.login} onChange={(e) => setLoginData({...loginData, login: e.target.value })}/>
                            <input className={s.input} type="password"  placeholder="Паролио" name='password' value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})}/>
                            {error && <p style={{color: "red"}}></p>}
                            <button type="submit" className={s.button}>test</button>
                        </div>
                    </form> 
                </ContainerContent>
            </Container>
        </div>
    </>)
}