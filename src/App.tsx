
import "./App.css"
import BtnDeletarUsuario from "./btnDeletarUsuario"
import BtnDeslogar from "./btnDeslogar"
import { useAppSelector } from "./redux/hooks"

export const App = () => {
  const usuarioLogado = useAppSelector(state=>state.usuario)
  return <div>
    <div>
      bem vindo <h3>{usuarioLogado.nome}</h3>
    </div>
    <BtnDeslogar/>
    <BtnDeletarUsuario/>
  </div>
}
