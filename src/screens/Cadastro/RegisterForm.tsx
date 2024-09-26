import React, { useState, FC } from 'react';

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não correspondem');
      return;
    }

    if (!formData.email || !formData.name || !formData.username) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Simulating form submission
    alert('Cadastro realizado com sucesso!');
    setError(null); // Clear errors after success
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Y🔥urSelf</h1>
        {error && <p className="error-message">{error}</p>}
        
        <label htmlFor="name">Nome Completo:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="username">Nome de Usuário:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirmar Senha:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Cadastrar</button>
        {/* If you need a link, specify a valid URL or remove this */}
        {/* <a href='/home' target="_blank">Go to Home</a> */}
      </form>
    </div>
  );
};

export default RegisterForm;