
import "./App.css"
import BtnDeslogar from "./btnDeslogar"
import { useAppSelector } from "./redux/hooks"

export const App = () => {
  const usuarioLogado = useAppSelector(state=>state.usuario)
  return <div>
    <div>
      bem vindo {usuarioLogado.nome}
    </div>
    <BtnDeslogar/>
  </div>
}
