import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialLoginValues = {
    username: '',
    password: ''
}

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState(initialLoginValues);
    const push = useNavigate()
    
    const onSubmit = (evt) => {
        evt.preventDefault();
        axios.post(`https://build-week-anytime-fitness-1.herokuapp.com/api/auth/login`, loginForm)
            .then(res => { console.log(res) 
            localStorage.setItem('token', res.data.token);   
        })
            .catch(error => console.log(error.response));
            setLoginForm(initialLoginValues)
        push('/classes')
    };

    const onChange = evt => {
        const { name, value } = evt.target
        setLoginForm({ ...loginForm, [name]: value });
    };
   
    return (
        <form id='loginForm' onSubmit={onSubmit}>
            <h2>Anytime Fitness Login</h2>
            <label>Username: 
                <input
                    value={loginForm.username}
                    name='username'
                    type='text'
                    onChange={onChange}
                />
            </label>
            <label>Password: 
                <input
                    value={loginForm.password}
                    name='password'
                    type='password'
                    onChange={onChange}
                />
            </label>
            <button id="login" type="submit">Login</button>
        </form>
    )
}

export default LoginForm;