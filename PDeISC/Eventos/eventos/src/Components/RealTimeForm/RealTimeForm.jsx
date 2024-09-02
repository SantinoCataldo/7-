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
                    error = 'Name is required';
                } else if (value.length < 3) {
                    error = 'Name must be at least 3 characters';
                }
                break;
            case 'email':
                if (!value) {
                    error = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = 'Email address is invalid';
                }
                break;
            case 'password':
                if (!value) {
                    error = 'Password is required';
                } else if (value.length < 6) {
                    error = 'Password must be at least 6 characters';
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
