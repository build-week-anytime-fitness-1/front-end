import React, { useState } from 'react';
import axios from 'axios';

const initialLoginValues = {
    username: '',
    password: ''
}

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState(initialLoginValues);

    const onSubmit = (evt) => {
        evt.preventDefault();
        axios.post(`https://reqres.in/api/orders`, loginForm)
            .then(resp => { console.log(resp) })
            .catch(error => console.log(error.response));
        setLoginForm(initialLoginValues)
    };

    const onChange = evt => {
        const { name, value } = evt.target
        setLoginForm({ ...loginForm, name, value });
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
            <label>PassWord: 
                <input
                    value={loginForm.password}
                    name='password'
                    type='password'
                    onChange={onChange}
                />
            </label>
        </form>
    )
}

export default LoginForm;