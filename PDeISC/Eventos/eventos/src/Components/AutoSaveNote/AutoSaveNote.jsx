import React, { useState, useEffect, useRef } from 'react';
import styles from './AutoSaveNote.module.css'; 

const AutoSaveNote = () => {
  const [note, setNote] = useState(''); // Estado para el texto en el textarea
  const [savedNote, setSavedNote] = useState(''); // Estado para la nota guardada
  const [status, setStatus] = useState('Escribe tu nota...');
  const timeoutId = useRef(null);

  const handleNoteChange = (e) => {
    setNote(e.target.value);

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    // Inicia el temporizador de autoguardado
    timeoutId.current = setTimeout(() => {
      saveNote();
    }, 3000); //
  };

  const saveNote = () => {
    setStatus('Guardando...');
    setTimeout(() => {
      setStatus('Guardado automáticamente');
      setSavedNote(note); // Guarda la nota actual en savedNote
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <div className={styles.note_container}>
      <textarea
        className={styles.note_textarea}
        value={note}
        onChange={handleNoteChange}
        placeholder="Escribe tu nota aquí..."
      />
      <p className={styles.note_status}>{status}</p>
      {savedNote && (
        <div className={styles.saved_note_container}>
          <p className={styles.saved_note}>Nota guardada:</p>
          <p className={styles.text_saved}>{savedNote}</p>
        </div>
      )}
    </div>
  );
};

export default AutoSaveNote;
