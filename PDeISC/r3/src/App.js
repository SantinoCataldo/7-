import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from './pages/HomePage';
import TaskDetailPage from './pages/TaskDetailPage';
import CreateTaskPage from './pages/CreateTaskPage';
import styles from './App.module.css' 

const Nav = () => {
  const location = useLocation(); // Hook para obtener la ruta actual

  // Función para verificar si el enlace está activo
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.nav}>
      <Link to="/" className={isActive("/") ? styles.nav__a__active : styles.nav__a}>Home</Link>
      <Link to="/create-task" className={isActive("/create-task") ? styles.nav__a__active : styles.nav__a}>Crear Tarea</Link>
    </nav>
  );
};

function App() {
  const getInitialTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Función para agregar una tarea nueva
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  // Función para borrar una tarea
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  // Función para pasar el estado de una tarea (completa/incompleta)
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: task.status === "Completa" ? "Incompleta" : "Completa" } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />} />
        <Route path="/task/:id" element={<TaskDetailPage tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />} />
        <Route path="/create-task" element={<CreateTaskPage addTask={addTask} />} />
      </Routes>
    </Router>
  );
}

export default App;
