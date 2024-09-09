import React, { useEffect } from 'react';
import styles from './Presentation.module.css'; // Asegúrate de crear este archivo CSS

const Presentation = () => {
  return (
    <div className={styles.presentation}>
      <div className={styles.rugrats}>Tp</div>
      <div className={styles.rugrats}>Eventos</div>
      <div className={styles.rugrats}>Santino</div>
    </div>
  );
};

export default Presentation;
