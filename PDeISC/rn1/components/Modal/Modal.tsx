import React from 'react';
import './Modal.css';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose, username }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Bienvenido!</h2>
        <p>{username}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default WelcomeModal;