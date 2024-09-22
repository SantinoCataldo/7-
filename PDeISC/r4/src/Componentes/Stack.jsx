import React from 'react';
import styles from './Stack.module.scss'; // Estilos en SCSS

const languages = [
    { name: 'HTML', iconUrl: 'https://cdn-icons-png.flaticon.com/512/732/732212.png'},
    { name: 'CSS', iconUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png'},
    { name: 'JavaScript', iconUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'},
    { name: 'React', iconUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png'},
    { name: 'Tailwind CSS', iconUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1632979765809/HTEigfQR-.png?auto=compress,format&format=webp'},
    { name: 'TypeScript', iconUrl: 'https://img.icons8.com/?size=160&id=Xf1sHBmY73hA&format=png'},
    { name: 'Sass', iconUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png'},
    { name: 'Next.js', iconUrl: 'https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png'},
    { name: 'Astro', iconUrl: 'https://seeklogo.com/images/A/astro-icon-logo-44253BACEE-seeklogo.com.png'},
    { name: 'Node.js', iconUrl: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png'},
    { name: 'Visual Studio Code', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png'},
    { name: 'Figma', iconUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png'},
    { name: 'Git', iconUrl: 'https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png'},
    { name: 'Ionic', iconUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ionic-icon.png'},
  ];

const Stack = () => {
  return (
    <section className={styles.stack}>
      <h2>Stack</h2>
      <p>
        This stack includes the technologies and tools I work with regularly.<br/> Each icon represents a different language or framework that contributes to my development skills.<br/> Hover over each icon to see the name of the technology, and you'll notice that the background color corresponds to each tool's branding. 
      </p>
      <div className={styles.languages}>
        {languages.map((lang) => (
          <div
            key={lang.name}
            className={styles.language}
          >
            <img src={lang.iconUrl} alt={lang.name} />
            <div className={styles.language__tooltip}>{lang.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;