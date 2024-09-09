import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Task.module.css'

const HomePage = ({ tasks, deleteTask  }) => {
  return (
    <div className={styles.home}>
      <h1>Lista de Tarea</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h3>{task.title}</h3>
              <p>{task.description.slice(0, 50)}...</p>
            </Link>
            <button onClick={() => deleteTask(task.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;