export default function Contato() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h1 style={{ color: '#1a1a1a', marginBottom: '15px' }}>Fale Conosco</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>Envie uma mensagem e nossa equipe responderá em breve.</p>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          placeholder="Seu Nome" 
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px' }} 
        />
        <input 
          type="email" 
          placeholder="Seu E-mail" 
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px' }} 
        />
        <textarea 
          placeholder="Sua Mensagem" 
          rows={4} 
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', resize: 'vertical' }} 
        />
        <button 
          type="submit" 
          style={{ padding: '10px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  )
}
