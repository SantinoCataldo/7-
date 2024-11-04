export interface Equipo {
    id: number;
    nombre: string;
    color: string;
    puntos: number;
    partidos_jugados: number;
    goles_a_favor: number;
    goles_en_contra: number;
}

export interface Jugador {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    posicion: string;
    numero_casaca: number;
    equipo_id: number;
    equipo_nombre: string;
}

export interface Partido {
    id: number;
    equipo_local_nombre: string;
    equipo_visitante_nombre: string;
    goles_local: number;
    goles_visitante: number;
    fecha: string;
    lugar: string;
}

export interface EstadisticaJugador {
    id: number;
    jugador_id: number;
    partidos_jugados: number;
    goles: number;
    tarjetas_rojas: number;
    tarjetas_amarillas: number;
}