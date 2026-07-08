import { useAppSelector } from "./redux/hooks"

export default function Perfil() {
    const usuarioLogado = useAppSelector(state => state.usuario)
    
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#1a1a1a', marginBottom: '20px' }}>Meu Perfil</h1>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px', backgroundColor: '#f9fafb', maxWidth: '450px' }}>
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#4b5563', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
          {usuarioLogado.nome.split('')[0]}
        </div>
        <div>
          <h2 style={{ margin: '0 0 4px 0', fontSize: '18px', color: '#111827' }}>Usuário(a): {usuarioLogado.nome}</h2>
          <p style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '14px' }}>{usuarioLogado.email}</p>
          <span style={{ padding: '4px 8px', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
            Nível: Administrador
          </span>
        </div>
      </div>
    </div>
  )
}
