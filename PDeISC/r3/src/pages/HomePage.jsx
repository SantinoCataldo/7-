import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Task.module.css';

const HomePage = ({ tasks, deleteTask }) => {
  return (
    <div className={styles.home}>
      <h1>Lista de Tareas</h1>
      {tasks.length === 0 ? (
        <>
          <p className={styles.p}>No hay tareas, agrega una nueva.</p>
          <Link to="/create-task" className={styles.button}>Crear Tarea</Link>
        </>
      ) : (
        <ul>
          {tasks.map(task => (
            <Link to={`/task/${task.id}`}>
              <li className={styles.task} key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description.slice(0, 50)}...</p>
                <button className={styles.button} onClick={() => deleteTask(task.id)}>Borrar</button>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
