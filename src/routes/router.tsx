import {
  createBrowserRouter,
} from "react-router";
import LoginPage from "../login";
import ProtectedRouter from "./protectedRouter";
import RegisterPage from "../cadastroUsuario";
import { App } from "../App";
import Sobre from "../sobre";
import Produtos from "../produtos";
import Home from "./home";
import Perfil from "../perfil";
import Contato from "../contato";

const router = createBrowserRouter([
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/cadastro",
    element:<RegisterPage/>
  },
  {
    element: <ProtectedRouter/>,
    children: [
      {
        path:"/",
        element:<App/>,
        children:[
            {
              index:true,
              element:<Home/>
            },
            {
              path:"/sobre",
              element:<Sobre/>
            },
            {
              path:"/produtos",
              element:<Produtos/>
            },
            {
              path:"/perfil",
              element:<Perfil/>
            },
            {
              path:"/contato",
              element:<Contato/>
            }
        ]
      }
    ]
  },
]);

export default router