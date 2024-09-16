// src/pages/TaskDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Task.module.css';

const TaskDetailPage = ({ tasks, toggleTaskCompletion }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Encontrar la tarea correspondiente al id
  const task = tasks.find(task => task.id === parseInt(id));

  // Manejar el cambio de estado de la tarea
  const handleToggleCompletion = () => {
    toggleTaskCompletion(task.id);
  };

  // Manejar el regreso a la página de inicio
  const handleBack = () => {
    navigate('/');
  };

  if (!task) {
    return <div>Tarea no encontrada</div>;
  }

  return (
    <div className={styles.individual__task}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Creado: {task.createdAt}</p>
      <p>Estado: {task.status}</p>
      <div>
        <button className={styles.button} onClick={handleToggleCompletion}>
          {task.status === "Completa" ? "Tarea Incompleta" : "Tarea Completa"}
        </button>
        <button className={styles.button} onClick={handleBack}>Volver</button>
      </div>
    </div>
  );
};

export default TaskDetailPage;
