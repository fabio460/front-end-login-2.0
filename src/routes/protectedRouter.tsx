
import {useEffect,useState} from 'react'
import { Outlet, Navigate } from 'react-router'
import { usuarioType } from '../typesGerais'
import { autenticarUsuarioApi } from '../api/usuarioApi'
import { useAppDispatch } from '../redux/hooks'
import { adicionarUsuario } from '../redux/usuarioReducer'

export default function ProtectedRouter() {
  const [status, setStatus] = useState<"autenticado"|"não autenticado"|"aguardando">("aguardando")
  const dispatch =  useAppDispatch()
  
  async function HandleAutenticado() {
    const u = await autenticarUsuarioApi()
    const user = await u.json()
    if (u.status === 200) {
        setStatus('autenticado')
        dispatch(adicionarUsuario(user as usuarioType))
        return null  
    }
    setStatus('não autenticado')
    
  }
  useEffect(()=>{ 
    HandleAutenticado()
  },[])
  
  if (status === "aguardando") {
    return <div>aguarde ...</div>
  }
  if (status === 'autenticado') {
    return <div>
        <Outlet />
    </div>
  }
  return (
    <Navigate to={"/login"} replace/>

  )
}
