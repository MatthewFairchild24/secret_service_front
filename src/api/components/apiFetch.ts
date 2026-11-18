import { API_URL } from "../../config/env"


export async function apiFetch(path: string, options: RequestInit = {}){
    const token = localStorage.getItem("token")

    const headers: Record<string, string> = { 
        "Content-Type":"application/json",
        ...(options.headers as Record<string, string>)
    }

    if(token) headers["Authorization"] = `Bearer ${token}`

    const res = await fetch(`${API_URL}${path}`,{...options, headers})

    if(res.status === 401){
        localStorage.removeItem("token")
        window.location.href = "/login"
        throw new Error("Сессия истекла")
    }

    return res
}