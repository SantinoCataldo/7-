import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import LoginForm from '@/components/LoginForm/LoginForm';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.loginContainer}
    >
      <LoginForm />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
  });
  
  