import { motion } from 'framer-motion';
import styles from './Projects.module.scss';
import { useState } from 'react';

const projectsData = [
  { id: 1, title: 'Project 1', description: 'Description of project 1', link: '#' },
  { id: 2, title: 'Project 2', description: 'Description of project 2', link: '#' },
  // Más proyectos aquí
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <motion.div 
        className={styles.grid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className={styles.project}
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {activeProject === project.id && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View More
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
