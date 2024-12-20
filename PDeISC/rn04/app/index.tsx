import { Image, StyleSheet, ScrollView, View, Button, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import { Equipo, Jugador, Partido, EstadisticaJugador } from '@/utils/types';
import { useRouter } from 'expo-router';
import * as Linking from 'expo-linking';

export default function HomeScreen() {
  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [jugadores, setJugadores] = useState<Jugador[]>([]);
  const [partidos, setPartidos] = useState<Partido[]>([]);
  const [estadisticas, setEstadisticas] = useState<EstadisticaJugador[]>([]);
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();

  const redirectToLogin = () => {
    router.push('/login');
  };


  // Función para obtener los equipos
  const fetchEquipos = async () => {
    try {
      const response = await fetch('http://localhost:3000/equipos');
      const data = await response.json();
      setEquipos(data);
    } catch (error) {
      console.error('Error fetching equipos:', error);
    }
  };

  // Función para obtener los jugadores
  const fetchJugadores = async () => {
    try {
      const response = await fetch('http://localhost:3000/jugadores');
      const data = await response.json();
      setJugadores(data);
    } catch (error) {
      console.error('Error fetching jugadores:', error);
    }
  };

  // Función para obtener los partidos
  const fetchPartidos = async () => {
    try {
      const response = await fetch('http://localhost:3000/partidos');
      const data = await response.json();
      setPartidos(data);
    } catch (error) {
      console.error('Error fetching partidos:', error);
    }
  };

  const fetchEstadisticas = async () => {
    try {
      const response = await fetch('http://localhost:3000/estadisticas_jugadores');
      const data = await response.json();
      setEstadisticas(data);
    } catch (error) {
      console.error('Error fetching estadisticas:', error);
    }
  };

  // Llamadas a la API cuando se monta el componente
  useEffect(() => {
    const user = localStorage.getItem('user'); // Recupera el nombre del usuario del localStorage
    if (user) {
      setUserName(user); // Si hay un usuario guardado, actualiza el estado
    }

    fetchEquipos();
    fetchJugadores();
    fetchEstadisticas();
    fetchPartidos();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token
    localStorage.removeItem('user');  // Elimina el nombre del usuario si lo guardaste
    setUserName(null);
  };

  const openGoogleMaps = (lugar: string) => {
    const url = `https://www.google.com/maps/search/?q=${encodeURIComponent(lugar)}`;
    Linking.openURL(url); // Esto abrirá la URL en el navegador predeterminado
  };  

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#f69' }}
      headerImage={
        <Image
          source={require('@/assets/images/pelota.png')}
          style={styles.reactLogo} />
      }>
      {userName ? (
        // Si el usuario está logueado, muestra su nombre y el botón de logout
        <View style={styles.userInfoContainer}>
          <p>{userName}</p>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        // Si no está logueado, muestra el botón de login
        <View style={styles.userInfoContainer}>
          <Button title="Login" onPress={redirectToLogin} />
        </View>

      )}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Torneo de Futbol!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ScrollView style={styles.dataContainer}>
        {/* Sección para mostrar los partidos */}
        <ThemedText type="subtitle">Partidos:</ThemedText>
        <View style={styles.container}>
          {partidos.map((partido) => (
            <View key={partido.id} style={styles.card}>
              <p style={styles.cardTitle}>
                {partido.equipo_local_nombre} vs {partido.equipo_visitante_nombre}
              </p>
              <p>Fecha: {new Date(partido.fecha).toLocaleDateString()}</p>
              <TouchableOpacity onPress={() => openGoogleMaps(partido.lugar)}>
                <p style={styles.placeText}>Lugar: {partido.lugar}</p>
              </TouchableOpacity>
              <p>Resultado: {partido.goles_local} - {partido.goles_visitante}</p>
            </View>
          ))}
        </View>

        <ThemedText type="subtitle">Equipos:</ThemedText>
        <View style={styles.container}>
          {equipos.map((equipo) => (
            <View key={equipo.id} style={styles.equipoContainer}>
              <View style={styles.card2}>
                <View style={styles.separator}>
                  <p style={styles.cardTitle}>{equipo.nombre}</p>
                  <View style={[styles.escudo, { backgroundColor: equipo.color }]}></View>
                </View>
                <p>Puntos: {equipo.puntos}</p>
                <p>Partidos Jugados: {equipo.partidos_jugados}</p>
                <p>Goles a Favor: {equipo.goles_a_favor}</p>
                <p>Goles en Contra: {equipo.goles_en_contra}</p>

              </View>

              {/* Jugadores de este equipo */}
              <View style={styles.container}>
                {jugadores
                  .filter(jugador => jugador.equipo_nombre === equipo.nombre)
                  .map((jugador) => {
                    const estadistica = estadisticas.find(est => est.jugador_id === jugador.id);
                    return (
                      <View key={jugador.id} style={styles.playerContainer}>
                        <p style={styles.cardTitle}>{jugador.nombre} {jugador.apellido}</p>
                        <p>Edad: {jugador.edad}</p>
                        <p>Posición: {jugador.posicion}</p>
                        <p>Número: {jugador.numero_casaca}</p>
                        {estadistica && (
                          <View style={styles.statsContainer}>
                            <b>Estadisticas:</b>
                            <p>Partidos Jugados: {estadistica.partidos_jugados}</p>
                            <p>Goles: {estadistica.goles}</p>
                            <p>Tarjetas Rojas: {estadistica.tarjetas_rojas}</p>
                            <p>Tarjetas Amarillas: {estadistica.tarjetas_amarillas}</p>
                          </View>
                        )}
                      </View>
                    );
                  })}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dataContainer: {
    paddingHorizontal: 0,
    fontFamily: "Arial"
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: 250,
    height: 250,
    textAlign: "center",
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  card2: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    width: '100%',
    textAlign: "center",
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 15,
    flexWrap: 'wrap',
    elevation: 2,
  },
  playerContainer: {
    marginTop: 15,
    padding: 30,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    width: 300,
  },
  statsContainer: {
    marginTop: 5,
    padding: 30,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  separator: {
    marginHorizontal: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reactLogo: {
    height: 290,
    width: 290,
    bottom: -50,
    left: 0,
    position: 'absolute',
  },
  escudo: {
    height: 60,
    width: 60,
    borderRadius: 15
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 15,
    marginBottom: 60,
  },
  equipoContainer: {
    width: '100%',
    marginVertical: 20,
  },
  userInfoContainer: {
    // position:"absolute",
    // right: 15,
    // zIndex: 1000,
    fontFamily: "Arial",
    width: 120,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  placeText: {
    color: 'blue',
  }
});
