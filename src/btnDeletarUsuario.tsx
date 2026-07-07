
import { useAppSelector } from './redux/hooks'
import { deletarUsuarioApi } from './api/usuarioApi'

export default function BtnDeletarUsuario() {
  const id = useAppSelector(state=>state.usuario.id)
  async function Delete() {
        const res = await deletarUsuarioApi(id)
        const r =await res.json()
        alert(JSON.stringify(r))
        localStorage.removeItem("token")
        window.location.reload()
  }  
  return (
    <button onClick={Delete}>Remover conta</button>
  )
}
