import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import WelcomeModal from '../Modal/Modal';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
  general: string;
}

export default function LoginForm() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: '',
    password: '',
    general: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLogin, setIsLogin] = useState(true); 
  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = {
      email: '',
      password: '',
      general: ''
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, ingresa un email válido';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
      isValid = false;
    } else if (!/\d/.test(formData.password)) {
      newErrors.password = 'La contraseña debe contener al menos un número';
      isValid = false;
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = 'La contraseña debe contener al menos una letra minúscula';
      isValid = false;
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'La contraseña debe contener al menos una letra mayúscula';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Crear el objeto de datos incluyendo el campo 'action'
      const requestData = {
        ...formData,
        action: isLogin ? 'login' : 'register'
      };

      try {
        const response = await axios.post(`http://localhost/login/login.php`, requestData);

        if (response.data.success) {
          console.log(`${isLogin ? 'Login' : 'Registro'} exitoso:`, response.data.message);
          console.log('Datos del usuario:', response.data);

          setUsername(response.data.mail);
          setIsModalOpen(true);
        } else {
          setFormErrors(prevErrors => ({
            ...prevErrors,
            general: response.data.message
          }));
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setFormErrors(prevErrors => ({
            ...prevErrors,
            general: error.response?.data?.message || `Error al ${isLogin ? 'iniciar sesión' : 'registrar'}. Por favor, intenta de nuevo.`
          }));
        } else {
          setFormErrors(prevErrors => ({
            ...prevErrors,
            general: 'Error inesperado. Por favor, intenta de nuevo.'
          }));
        }
      }
    }

    setIsSubmitting(false);
  };

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
    setFormErrors({ email: '', password: '', general: '' }); // Limpiar errores al cambiar entre login y registro
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" /></svg>
      </div>

      <h1 className="login-title">{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h1>

      {formErrors.general && (
        <div className="error-general">{formErrors.general}</div>
      )}

      <div className="form-group">
        <input
          className={`form-input ${formErrors.email ? 'input-error' : ''}`}
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={validateForm}
          type="email"
          required
        />
        {formErrors.email && (
          <p className="error-text">{formErrors.email}</p>
        )}
      </div>

      <div className="form-group">
        <input
          className={`form-input ${formErrors.password ? 'input-error' : ''}`}
          placeholder="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          onBlur={validateForm}
          type="password"
          required
        />
        {formErrors.password && (
          <p className="error-text">{formErrors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className={`submit-button ${isSubmitting ? 'button-submitting' : ''}`}
        disabled={isSubmitting}
        >
        {isSubmitting ? (isLogin ? 'Iniciando sesión...' : 'Registrando...') : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
      </button>

      <button type="button" onClick={toggleLoginRegister} className="toggle-button">
        {isLogin ? 'Crear una cuenta' : 'Ya tengo una cuenta'}
      </button>
    </form>
    <WelcomeModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      username={formData.email}
      />
    </>
    
  );
}
