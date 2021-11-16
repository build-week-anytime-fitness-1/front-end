import React, { useState } from 'react';
import axios from 'axios';

const initialFormValues = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: ''
}

export default function UserForm() {
    const [form, setForm] = useState(initialFormValues);

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://reqres.in/api/orders`, form)
            .then(res => { console.log('RES', res) })
            .catch(err => console.log(err.response));
        setForm(initialFormValues)
    };

    const onChange = e => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setForm({ ...form, [e.target.name]: value });
    };

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div>
                <h2>Sign Up</h2>
                <label>First Name:
                    <input
                        value={form.first_name}
                        name='first_name'
                        type='text'
                        onChange={onChange}
                    />
                </label>
                <label>Last Name:
                    <input
                        value={form.last_name}
                        name='last_name'
                        type='text'
                        onChange={onChange}
                    />
                </label>
                <label>Username:
                    <input 
                        value={form.username}
                        name='username'
                        type='text'
                        onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input 
                        value={form.password}
                        name='password'
                        type='password'
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input 
                        value={form.email}
                        name='email'
                        type='text'
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )
}