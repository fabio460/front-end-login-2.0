import { Link, Outlet } from "react-router"
import "./App.css"

import { useAppSelector } from "./redux/hooks"
import BtnDeslogar from "./btnDeslogar"
import BtnDeletarUsuario from "./btnDeletarUsuario"

export const App = () => {
  const usuarioLogado = useAppSelector(state => state.usuario)

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#f8fafc", 
      fontFamily: "Inter, system-ui, sans-serif",
      color: "#1e293b"
    }}>
      {/* BARRA DE NAVEGAÇÃO SUPERIOR */}
      <nav style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        {/* Links do Menu Expandido com as 5 páginas */}
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/sobre" style={linkStyle}>Sobre</Link>
          <Link to="/produtos" style={linkStyle}>Produtos</Link>
          <Link to="/contato" style={linkStyle}>Contato</Link>
          <Link to="/perfil" style={linkStyle}>Perfil</Link>
        </div>

        {/* Informações do Usuário e Ações */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontSize: "12px", color: "#64748b", display: "block" }}>Bem-vindo,</span>
            <strong style={{ fontSize: "14px", color: "#0f172a" }}>{usuarioLogado.nome || "Usuário"}</strong>
          </div>
          
          {/* Container de Botões de Ação */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <BtnDeslogar />
            <BtnDeletarUsuario />
          </div>
        </div>
      </nav>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <main style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "40px 24px" 
      }}>
        <div style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
          padding: "32px",
          minHeight: "400px"
        }}>
          {/* Todas as 5 páginas renderizam dinamicamente aqui dentro */}
          <Outlet />
        </div>
      </main>
    </div>
  )
}

// Estilo base reutilizável para os links da navbar
const linkStyle = {
  textDecoration: "none",
  color: "#475569",
  fontWeight: 500,
  fontSize: "15px",
  transition: "color 0.2s ease",
}
