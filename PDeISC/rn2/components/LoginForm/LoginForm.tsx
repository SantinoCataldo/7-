import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as AppleAuthentication from 'expo-apple-authentication';
import WelcomeModal from '../Modal/Modal';
import { router } from 'expo-router';

WebBrowser.maybeCompleteAuthSession();

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

  const [, googleResponse, googlePromptAsync] = Google.useAuthRequest({
    iosClientId: 'YOUR_IOS_CLIENT_ID',
    androidClientId: 'YOUR_ANDROID_CLIENT_ID',
    webClientId: '465439229847-trq2um11g9oikfb0pic9dqhlm0aj55pl.apps.googleusercontent.com',
  });

  const [, fbResponse, fbPromptAsync] = Facebook.useAuthRequest({
    clientId: '893258686094057',
  });

  React.useEffect(() => {
    if (googleResponse?.type === 'success') {
      const { authentication } = googleResponse;
      console.log('Google Sign In successful', authentication);
    }
  }, [googleResponse]);

  React.useEffect(() => {
    if (fbResponse?.type === 'success') {
      const { authentication } = fbResponse;
      console.log('Facebook Sign In successful', authentication);
    }
  }, [fbResponse]);

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

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    if (formErrors[name]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    if (validateForm()) {
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
          router.push("/(tabs)/userProfile");
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
    setFormErrors({ email: '', password: '', general: '' });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGoogleSignIn = async () => {
    await googlePromptAsync();
  };

  const handleFacebookSignIn = async () => {
    await fbPromptAsync();
  };

  const handleAppleSignIn = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      console.log('Apple Sign In successful', credential);
    } catch (e) {
      if ((e as Error).message === 'ERR_CANCELED') {
        console.log('Apple Sign In was canceled');
      } else {
        console.log('Apple Sign In error:', e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</Text>

        {formErrors.general && (
          <Text style={styles.errorGeneral}>{formErrors.general}</Text>
        )}

        <TextInput
          style={[styles.input, formErrors.email ? styles.inputError : null]}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
          keyboardType="email-address"
        />
        {formErrors.email && (
          <Text style={styles.errorText}>{formErrors.email}</Text>
        )}

        <TextInput
          style={[styles.input, formErrors.password ? styles.inputError : null]}
          placeholder="Contraseña"
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
          secureTextEntry
        />
        {formErrors.password && (
          <Text style={styles.errorText}>{formErrors.password}</Text>
        )}

        <TouchableOpacity
          style={[styles.button, isSubmitting ? styles.buttonSubmitting : null]}
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          <Text style={styles.buttonText}>
            {isSubmitting ? (isLogin ? 'Iniciando sesión...' : 'Registrando...') : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleLoginRegister} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>
            {isLogin ? 'Crear una cuenta' : 'Ya tengo una cuenta'}
          </Text>
        </TouchableOpacity>

        <View style={styles.separator}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>O</Text>
          <View style={styles.separatorLine} />
        </View>

        <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={handleGoogleSignIn}>
          <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={handleFacebookSignIn}>
          <Text style={styles.buttonText}>Iniciar sesión con Facebook</Text>
        </TouchableOpacity>

        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={styles.appleButton}
          onPress={handleAppleSignIn}
        />
      </View>

      <WelcomeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        username={formData.email}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: "#31572C",
    padding: 30,
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: 'rgba(49, 87, 44, 1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: "#fff",
  },
  input: {
    height: 40,
    borderColor: '#4F772D',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#fff",
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  errorGeneral: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4F772D',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  buttonSubmitting: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  toggleButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  toggleButtonText: {
    color: '#fff',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#fff',
  },
  googleButton: {
    backgroundColor: '#6A994E',
  },
  facebookButton: {
    backgroundColor: '#6A994E',
  },
  appleButton: {
    width: '100%',
    height: 44,
    marginTop: 10,
  },
});