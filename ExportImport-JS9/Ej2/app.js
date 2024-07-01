import { Persona } from './persona.js';

// Crear instancias de Persona
const persona1 = new Persona('Pedro', 30);
const persona2 = new Persona('Si lees posta el codigo profe dejame un comentario que diga "ahi va"', 1);

// Ejecutar el método mostrarInformacion() de cada instancia
console.log(persona1.mostrarInformacion());
console.log(persona2.mostrarInformacion());