// src/types/navigation.ts
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined; // No tiene parámetros
  Equipo: { nombreEquipo: string }; // Parámtero para la pantalla de Equipo
};