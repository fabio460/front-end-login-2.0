import { useEffect } from "react"
import "./App.css"
import { autenticarUsuarioApi, listarUsuarioApi } from "./api/usuarioApi"
import LoginPage from "./login"

export const App = () => {
  async function apiTeste() {
    const r = await listarUsuarioApi()
    const usuario =await r.json()
    const status = r.status
    //console.log(status)
    //console.log(usuario)
    const auth = await autenticarUsuarioApi()
    const res = await auth.json()
    console.log(res)
    console.log(auth.status)
  }
  useEffect(()=>{
    apiTeste()
  },[])
  return <div>olaa
    <LoginPage />
  </div>
}
