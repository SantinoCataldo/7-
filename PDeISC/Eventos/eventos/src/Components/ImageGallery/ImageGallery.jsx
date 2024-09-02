import React, { useState, useEffect } from 'react';
import styles from './imageGallery.module.css';

const images = [
  'https://media.ambito.com/p/c15afeab2223071f110014b31d4d1aa4/adjuntos/239/imagenes/036/039/0036039183/1200x675/smart/garrafasjpg.jpg',
  'https://img.lagaceta.com.ar/fotos/notas/2023/05/15/como-prevenir-accidentes-domesticos-garrafa-gas-991313-115932.jpg',
  'https://www.angosturainforma.gob.ar/wp-content/uploads/2020/04/Garrafas-scaled.jpg',
  'https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2024-02/816113-garrafas-20gas-20aumento.jpg?h=b3660f0d&itok=DOMgRllX',
  'https://hipergas.com.ar/wp-content/uploads/2018/02/Foto-garrafas-10-kg-Hipergas.jpg',
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (event.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.gallery_container}>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
    </div>
  );
};

export default ImageGallery;
