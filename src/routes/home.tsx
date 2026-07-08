export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#1a1a1a', marginBottom: '10px' }}>Bem-vindo ao Painel Principal</h1>
      <p style={{ color: '#4a4a4a', fontSize: '16px', lineHeight: '1.5' }}>
        Esta é a página inicial da sua aplicação. Aqui você pode gerenciar suas informações 
        e navegar pelas seções do sistema usando o menu.
      </p>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
        <h3 style={{ margin: '0 0 5px 0', color: '#1e40af' }}>💡 Dica do Sistema</h3>
        <p style={{ margin: 0, color: '#1e3a8a', fontSize: '14px' }}>Use o menu de navegação acima para explorar os produtos e as configurações de perfil.</p>
      </div>
    </div>
  )
}
