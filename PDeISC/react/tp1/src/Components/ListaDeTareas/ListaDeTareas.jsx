import React, { useState } from 'react';
import styles from './ListaDeTareas.module.css';

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const marcarComoCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <div className={styles.listaDeTareas}>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Agregar nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li
            key={index}
            style={{
              color: tarea.completada ? '#FF0000' : '#fff',
            }}
          >
            {tarea.texto}
            <button onClick={() => marcarComoCompletada(index)}>
              {tarea.completada ? '❌' : '✔'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTareas;
