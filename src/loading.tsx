export default function Loading() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh", // Centraliza na área do conteúdo
      width: "100%",
      fontFamily: "sans-serif"
    }}>
      {/* Círculo Animado (Spinner) */}
      <div style={{
        width: "48px",
        height: "48px",
        border: "4px solid #e2e8f0",
        borderTop: "4px solid #2563eb", // Cor azul combinando com o painel
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }} />

      {/* Texto de Apoio */}
      <p style={{
        marginTop: "16px",
        color: "#64748b",
        fontSize: "15px",
        fontWeight: 500,
        letterSpacing: "0.5px"
      }}>
        Carregando informações...
      </p>

      {/* Injeção do CSS da animação direto no componente */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
