import { motion } from 'framer-motion'; // Importación de framer-motion
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <motion.h1
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Santino<br/>Cataldo
      </motion.h1>
      <p className={styles.subtext}>Full-stack Developer | Designer</p>
    </header>
  );
};

export default Header;