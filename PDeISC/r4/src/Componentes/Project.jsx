import { useState } from 'react';
import styles from './Projects.module.scss'; // Estilos en SCSS
import { useEffect } from 'react';

const projectsData = [
  { id: 1, imageUrl: 'img/projects/1.png', link: 'https://lgbtiqmas.vercel.app/index.html' },
  { id: 2, imageUrl: 'img/projects/2.png', link: 'https://lgbtiq-nextjs13.vercel.app' },
  { id: 3, imageUrl: 'img/projects/3.png', link: 'https://by-fixture-project-alanc21.vercel.app' },
  { id: 4, imageUrl: 'img/projects/4.png', link: 'http://basededatoss.freetzi.com/mostrar.php' },
  { id: 5, imageUrl: 'img/projects/5.png', link: 'https://edusex-livid.vercel.app' },
  { id: 6, imageUrl: 'img/projects/6.png', link: 'https://i.simmer.io/@santulululu/minijueguitos' },
  { id: 7, imageUrl: 'img/projects/7.png', link: 'tapwise-store.vercel.app' },
  { id: 8, imageUrl: 'img/projects/8.png', link: 'https://fin.guru/es' },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleClick = (projectId) => {
    if (activeProject === projectId) {
      // Si se hace clic en el mismo proyecto, se mantiene visible
      setActiveProject(projectId);
    } else {
      // Si se hace clic en otro proyecto, se actualiza
      setActiveProject((prev) => (prev === projectId ? null : projectId));
    }
  };

  const handleOutsideClick = (event) => {
    if (activeProject && !event.target.closest(`.${styles.item}`)) {
      // Cerrar enlace si se hace clic fuera de los items
      setActiveProject(null);
    }
  };

  // Escuchar clics fuera de los items
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [activeProject]);

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <p>
        Explore our diverse range of projects, showcasing innovative designs and creative solutions.<br/>
        Click on any project to learn more about it!
      </p>
      <div className={styles.wrapper}>
        <div className={styles.items}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`${styles.item} ${activeProject === project.id ? styles.active : ''}`}
              style={{ backgroundImage: `url(${project.imageUrl})` }}
              tabIndex="0"
              onClick={() => handleClick(project.id)}
            >
              {activeProject === project.id && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
