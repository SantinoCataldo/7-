import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Create New Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Descripcion:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Estado:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Incompleta">Incompleta</option>
            <option value="Completa">Completa</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
