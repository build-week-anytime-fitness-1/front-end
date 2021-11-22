import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route} from 'react-router-dom'

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
        axios.post('https://build-week-anytime-fitness-1.herokuapp.com/api/auth/register', form)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => (console.log(err.error)))
        
        setForm(initialFormValues)
    };

    const onChange = e => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setForm({ ...form, [e.target.name]: value });
    };

    return (
        <div>
        <Routes>
                <Route path='client' element={<UserForm />} />
                </Routes>
        <form className='signup' onSubmit={onSubmit}>
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
                <button onSubmit={onSubmit} className='submitButton'>Submit</button>
            </div>
        </form>
        </div>
    )
}