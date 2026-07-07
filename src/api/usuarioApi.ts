import { linkApi } from "."
import { responseType } from "../typesGerais"

export const listarUsuarioApi = () => {
    return fetch(linkApi+"usuario",{
        method:"GET",
    })
    .then(r=>r)
    .catch((error)=>error)
    
}

export const criarUsuarioApi = async (nome:string, email:string, senha:string) => {
    return fetch(linkApi+"criarUsuario",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({nome,email,senha})
    })
    .then(r=>r)
    .catch(err=>err)
}

export const logarUsuarioApi = (email:string, senha:string)=>{
    return fetch(linkApi+"logarusuario",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,senha})
    })
    .then(r=>r)
    .catch(err=>err)
}

export const autenticarUsuarioApi = ()=>{
    const token = localStorage.getItem("token")
    const res:Promise<responseType> = fetch(linkApi+"autenticarusuario",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bear ${token}`
        }
    })
    .then(r=>r)
    .catch(err=>err)
    return res
}