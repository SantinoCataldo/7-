import React, { useState, useEffect } from 'react';
import styles from './imageGallery.module.css';

const images = [
  'https://i.pinimg.com/564x/70/a4/f6/70a4f6f9b19b72ea91abda133fe681fa.jpg',
  'https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2010/6/1/2460/20160316120838dc2b690516158a874dd8aabe1365c6a0.jpg',
  'https://i.pinimg.com/564x/1a/7e/8a/1a7e8a39c8532194c2536d36904198ba.jpg',
  'https://i.pinimg.com/564x/33/df/23/33df2343c2ea4af3ab5a478198b68d2d.jpg',
  'https://pbs.twimg.com/media/FkbNNUYXkAMIn3F.jpg',
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
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`${styles.gallery_image} ${index === currentIndex ? styles.selected : ''}`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
