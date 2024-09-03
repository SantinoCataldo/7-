import React, { useState, useEffect } from 'react';
import styles from './imageGallery.module.css';

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/7/76/Cacho_Casta%C3%B1a.png',
  'https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2010/6/1/2460/20160316120838dc2b690516158a874dd8aabe1365c6a0.jpg',
  'https://www.clarin.com/2016/09/22/SkN1Qn3t4g_312x240.jpg',
  'https://www.infobae.com/new-resizer/ZU8umx66nB3Iuw3kscjI0636wlQ=/992x558/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/HNRK5SWZZVFQ5CZNLJRET5Q5F4.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4LpBi6xKlMiKqleTn7viFqNH-I0mP8bfxjNNSppKE6nOE4AhdVX7cldWvu_cA4KY9a0&usqp=CAUhttps://www.ellitoral.com/images/2022/03/09/sJwbjPub2_1300x655__1.jpg',
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
