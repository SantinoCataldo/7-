import React from 'react';
import styles from './Tarjeta.module.css';

const Tarjeta = ({ nombre, apellido, profesion, imagenSrc }) => {
  return (
    <div className={styles.tarjeta}>
      <img className={styles.imagen} src={imagenSrc} alt={`${nombre} ${apellido}`} />
      <div className={styles.info}>
        <h2>{nombre} {apellido}</h2>
        <p className={styles.profesion}>{profesion}</p>
      </div>
    </div>
  );
};

export default Tarjeta;
