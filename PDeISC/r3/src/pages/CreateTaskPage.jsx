import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Task.module.css';

const CreateTaskPage = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Incompleta');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      createdAt: new Date().toISOString().slice(0, 10),
      status,
    };
    addTask(newTask);
    navigate('/');
  };

  return (
    <div className={styles.home}>
      <h1>Create New Task</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.form__labels}>
          <p>Titulo: </p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className={styles.form__labels}>
          <p>Descripcion: </p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label className={styles.form__labels}>
          <p>Estado: </p>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Incompleta">Incompleta</option>
            <option value="Completa">Completa</option>
          </select>
        </label>
        <br />
        <button className={styles.button} type="submit">Crear Tarea</button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
