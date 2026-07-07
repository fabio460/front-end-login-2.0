import React, { useState, ChangeEvent, FormEvent } from 'react';
import { logarUsuarioApi } from './api/usuarioApi';
import { Navigate, useNavigate } from 'react-router';

// Interface para definir a estrutura dos dados do login
interface LoginData {
  email: string;
  senha: string;
}

// Interface para gerenciar o estado de feedback da autenticação
interface AuthStatus {
  loading: boolean;
  error: string | null;
  success: boolean;
}

export default function LoginPage(): React.JSX.Element {

  const navigate = useNavigate()
  // Estado tipado para as credenciais do usuário
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    senha: ''
  });

  // Estado tipado para controle de fluxo da requisição de login
  const [status, setStatus] = useState<AuthStatus>({ 
    loading: false, 
    error: null, 
    success: false 
  });

  // Captura as mudanças nos campos de input
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Envia as credenciais para a API autenticadora
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault(); 
    setStatus({ loading: true, error: null, success: false });

    try {
      const response:any = await logarUsuarioApi(loginData.email, loginData.senha)
      console.log(response)
      if (response?.status !== 200) {
        throw new Error('E-mail ou senha incorretos.');
      }

      const data = await response.json();
      setStatus({ loading: false, error: null, success: true });
      
      // Limpa os campos após o sucesso
      setLoginData({ email: '', senha: '' });
      
      // Armazene o token recebido no localStorage/Context se aplicável
      localStorage.setItem('token', data.token);
      navigate("/")

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao realizar login';
      setStatus({ loading: false, error: errorMessage, success: false });
      console.error('Erro na requisição:', err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Acesse sua conta</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
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
              value={loginData.senha}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Digite sua senha"
            />
          </div>

          <button 
            type="submit" 
            disabled={status.loading} 
            style={status.loading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
          >
            {status.loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        {status.success && <p style={styles.successMessage}>Login realizado com sucesso! Redirecionando...</p>}
        {status.error && <p style={styles.errorMessage}>{status.error}</p>}
      </div>
    </div>
  );
}

// Objeto de estilos idêntico ao da página de cadastro para consistência visual
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
