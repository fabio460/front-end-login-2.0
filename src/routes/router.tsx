import {
  createBrowserRouter,
} from "react-router";
import LoginPage from "../login";
import ProtectedRouter from "./protectedRouter";
import RegisterPage from "../cadastroUsuario";
import { App } from "../App";

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
        element:<App/>
      }
    ]
  },
]);

export default router