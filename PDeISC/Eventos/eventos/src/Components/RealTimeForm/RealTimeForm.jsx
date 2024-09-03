import React, { useState } from 'react';
import styles from './RealTimeForm.module.css';

const RealTimeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    });

    const validate = (name, value) => {
        let error = '';
        switch (name) {
            case 'name':
                if (!value) {
                    error = 'El nombre es obligatorio';
                } else if (value.length < 3) {
                    error = 'El nombre tiene que tener mas de 3 caracteres';
                }
                break;
            case 'email':
                if (!value) {
                    error = 'El Email es obligatorio';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = 'El Email es invalido';
                }
                break;
            case 'password':
                if (!value) {
                    error = 'La contraseña es obligatoria';
                } else if (value.length < 6) {
                    error = 'La contraseña tiene que tener mas de 6 caracteres';
                }
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        const error = validate(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Additional submit logic here
        if (!errors.name && !errors.email && !errors.password) {
            console.log('Form submitted', formData);
        } else {
            console.log('Form has errors');
        }
    };

    return (
        <section className={styles.realtime_form_container}>
            <form className={styles.realtime_form} onSubmit={handleSubmit}>
                <div className={styles.form_group}>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className={styles.form_group}>
                    <label>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className={styles.form_group}>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default RealTimeForm;
