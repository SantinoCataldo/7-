import styles from './About.module.scss';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className={styles.about}>
      <motion.div
        className={styles.about__container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className={styles.about__container__text}>
          <h2>Freelance<br /> Digital designer</h2>
          <div>
            <p>
              Soy un programador full-stack con pasión por el desarrollo web y el diseño.<br/>
              Me gradué de la Escuela Técnica N°5, donde adquirí sólidos conocimientos en programación y tecnología.<br/>
              Me especializo en crear soluciones innovadoras que combinan funcionalidad y diseño, siempre buscando mejorar la experiencia del usuario.<br/>
            </p>
            <div className={styles.about__container__text__buttons}>
              <a href="">Intagram </a>
              <a href="">Telegram</a>
              <a href="">Linkedin</a>
              <a href="">Github</a>
            </div>
          </div>
        </div>
        <img src="img/frontal.png" alt="" />
      </motion.div>
    </section>
  );
};

export default About;
