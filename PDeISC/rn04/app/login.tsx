import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Cambiado para importar desde el paquete correcto
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); 
  const [userType, setUserType] = useState('Seguidor');
  const router = useRouter();

  const handleAuth = async () => {
    if (isLogin) {
      // Lógica para el inicio de sesión
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        if (response.ok) {
          alert('Inicio de sesión exitoso ' + `Bienvenido ${data.user.email}`);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', data.user.nombre);
          router.push('/');
        } else {
          alert('Error de inicio de sesión ' + data.error);
        }
      } catch (error) {
        alert('Error de conexión con el servidor');
      }  
    } else {
      // Lógica para el registro
      if (!name || !email || !password) {
        alert('Por favor, completa todos los campos');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password, tipo_usuario: userType }),
        });
        const data = await response.json();
        if (response.ok) {
          alert('Registro exitoso'+ ' Ahora puedes iniciar sesión');
          setIsLogin(true);
        } else {
          alert(data.error);
        }
      } catch (error) {
        alert('Error de conexión con el servidor');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Iniciar Sesión' : 'Registro'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {!isLogin && (
        <View style={styles.pickerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
            editable={!isLogin} // El campo de nombre solo debe estar habilitado en el registro
          />
          <Text>Tipo de usuario:</Text>
          <Picker
            selectedValue={userType}
            style={styles.picker}
            onValueChange={(itemValue) => setUserType(itemValue)}
          >
            <Picker.Item label="Administrador" value="Administrador" />
            <Picker.Item label="Jugador" value="Jugador" />
            <Picker.Item label="Seguidor" value="Seguidor" />
          </Picker>
        </View>
      )}

      <Button title={isLogin ? 'Iniciar Sesión' : 'Registrarse'} onPress={handleAuth} />

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.toggle}>
        <Text style={styles.toggleText}>
          {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  pickerContainer: {
    width: '100%',
    marginVertical: 10,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  toggle: {
    marginTop: 15,
  },
  toggleText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
