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
        <h2>Freelance<br/> Digital designer</h2>
        <div>
        <p>santinocataldo1@gmail.com</p>
        <p>Numero de telefono</p>
        <p><a href="">intagram </a><a href="">telegram</a></p>  
        </div>
      </motion.div>
    </section>
  );
};

export default About;
