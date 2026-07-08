export default function Produtos() {
  // Lista fictícia de produtos para ilustrar a página
  const listaProdutos = [
    { id: 1, nome: "Notebook Gamer", preco: "R$ 4.500,00" },
    { id: 2, nome: "Mouse Vertical Sem Fio", preco: "R$ 150,00" },
    { id: 3, nome: "Teclado Mecânico RGB", preco: "R$ 350,00" },
  ]

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Nossos Produtos</h1>
      
      <div style={{ display: 'grid', gap: '15px', maxWidth: '400px' }}>
        {listaProdutos.map((produto) => (
          <div 
            key={produto.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ margin: '0 0 5px 0', color: '#222' }}>{produto.nome}</h3>
            <p style={{ margin: 0, color: '#0070f3', fontWeight: 'bold' }}>{produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
