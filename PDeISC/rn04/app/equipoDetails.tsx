import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Equipo, Jugador, Partido, EstadisticaJugador } from '@/utils/types';

export default function EquipoDetails({ route }: { route: any }) {
  const { equipoId } = route.params;
  const [equipo, setEquipo] = useState<Equipo | null>(null);
  const [jugadores, setJugadores] = useState<Jugador[]>([]);
  const [partidos, setPartidos] = useState<Partido[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/equipos/${equipoId}`)
      .then((response) => response.json())
      .then((data) => {
        setEquipo(data.equipo);
        setJugadores(data.jugadores);
        setPartidos(data.partidos);
      })
      .catch((error) => console.error(error));
  }, [equipoId]);

  if (!equipo) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{equipo.nombre}</Text>
      <Text style={styles.subtitle}>Puntos: {equipo.puntos}</Text>
      <Text style={styles.subtitle}>Partidos Jugados: {equipo.partidos_jugados}</Text>
      <Text style={styles.subtitle}>Goles a Favor: {equipo.goles_a_favor}</Text>
      <Text style={styles.subtitle}>Goles en Contra: {equipo.goles_en_contra}</Text>

      <Text style={styles.sectionTitle}>Jugadores</Text>
      {jugadores.map((jugador) => (
        <Text key={jugador.id}>
          {jugador.nombre} {jugador.apellido} - {jugador.posicion}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Partidos</Text>
      {partidos.map((partido) => (
        <Text key={partido.id}>
          {partido.equipo_local_nombre} {partido.goles_local} - {partido.goles_visitante} {partido.equipo_visitante_nombre} ({partido.fecha})
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});
