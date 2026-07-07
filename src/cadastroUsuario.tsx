import React, { useState, ChangeEvent, FormEvent } from 'react';
import { criarUsuarioApi } from './api/usuarioApi';
import { NavLink } from 'react-router';

// Interface para definir a estrutura dos dados do formulário
interface FormData {
  nome: string;
  email: string;
  senha:  string;
}

// Interface para gerenciar o estado de feedback da requisição
interface RequestStatus {
  loading: boolean;
  error: string | null;
  success: boolean;
}

export default function RegisterPage(): React.JSX.Element {
  // Estado tipado para o formulário
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    senha: ''
  });

  // Estado tipado para controle de fluxo da requisição
  const [status, setStatus] = useState<RequestStatus>({ 
    loading: false, 
    error: null, 
    success: false 
  });

  // Captura as mudanças nos inputs usando o tipo correto do React
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Envia os dados para a API tratando o evento de submissão
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault(); 
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await criarUsuarioApi(formData.nome, formData.email, formData.senha)

      if (!response.ok) {
        throw new Error('Falha ao realizar o cadastro. Tente novamente.');
      }

      const data = await response.json();
      setStatus({ loading: false, error: null, success: true });
      
      // Limpa os campos tipados corretamente
      setFormData({ nome: '', email: '', senha: '' });
      console.log('Sucesso:', data);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      setStatus({ loading: false, error: errorMessage, success: false });
      console.error('Erro na requisição:', err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Crie sua conta</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="nome" style={styles.label}>Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Digite seu nome completo"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="seu.email@exemplo.com"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="senha" style={styles.label}>Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Crie uma senha forte"
            />
          </div>

          <button 
            type="submit" 
            disabled={status.loading} 
            style={status.loading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
          >
            {status.loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
          <div>Já tem cadastrado? <NavLink to={"/login"}>clique aqui</NavLink></div>

        </form>

        {status.success && <p style={styles.successMessage}>Cadastro realizado com sucesso!</p>}
        {status.error && <p style={styles.errorMessage}>{status.error}</p>}
      </div>
    </div>
  );
}

// Objeto de estilos com tipagem implícita do CSS inline do React
const styles: Record<string, React.CSSProperties> = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif' },
  card: { padding: '2rem', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' },
  title: { textAlign: 'center', marginBottom: '1.5rem', color: '#333' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  label: { fontSize: '0.9rem', fontWeight: 'bold', color: '#555' },
  input: { padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' },
  button: { padding: '0.75rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer' },
  buttonDisabled: { backgroundColor: '#a0cfff', cursor: 'not-allowed' },
  successMessage: { color: 'green', marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' },
  errorMessage: { color: 'red', marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }
};
