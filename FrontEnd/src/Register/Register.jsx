import './Register.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate(); // Initialize navigation
    const [values, setValues] = useState({
        username: '',
        email: '',  
        password: ''
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/auth/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                alert('Registration successful! Redirecting to home...');
                navigate('/'); // Redirect to home page
            } else {
                alert(data.error || 'Registration failed');
            }
        } catch (error) {
            console.log(error);
            alert('An error occurred during registration');
        }
    };

    return (
        <div className='register-first'>
            <div className='register-box'>
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className='input-box'>
                        <input name='email' onChange={handleChange} type="text" required />
                        <label className='email1'>E-mail</label>
                    </div>
                    <div className='input-box'>
                        <input name='username' onChange={handleChange} type="text" required />
                        <label className='username'>Username</label>
                    </div>
                    <div className='input-box'>
                        <input name='password' onChange={handleChange} type="password" required />
                        <label className='password'>Password</label>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                    </div>
                    <div className='register-button'>
                        <button type='submit'>Register</button>
                    </div>
                    <div className='register-link'>
                        <p>Already have an account? <a href='/login'>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;