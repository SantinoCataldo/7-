import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import UserProfile from '@/components/UserProfile/UserProfile';

export default function UserScreen() {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.loginContainer}
    >
      <UserProfile />
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
  
  