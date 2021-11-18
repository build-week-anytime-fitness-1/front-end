import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import * as yup from 'yup';
import { Routes, Route, Link } from 'react-router-dom';

export default function ClassCreate() {
  const initialFormValues = {
    class_name: '',
    type: '',
    instructor_id: 0,
    time: '',
    date: '', 
    duration: 0,
    intensity: 0,
    location: '',
    max_class_size: 0,
    registered_clients: 0
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://build-week-anytime-fitness-1.herokuapp.com/api/classes/', formValues)
      .then((res) => {
        console.log(formValues);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
      <form id='classCreate' onSubmit={handleSubmit}>
        <h2>Create a Class</h2>
        <label>
          Name:
          <input
            name='class_name'
            type='text'
            id='class_name'
            value={formValues.class_name}
            onChange={handleChange}
            placeholder='Class Name?'
          />
        </label>
        <label>
          Instructor:
          <input
            name='instructor_id'
            type='number'
            id='instructor_id'
            value={formValues.instructor_id}
            onChange={handleChange}
            placeholder='Instructor id?'
          />
        </label>

        <label>
          Workout Type:
          <input
            id='type'
            type='text'
            name='type'
            value={formValues.type}
            onChange={handleChange}
            placeholder='Workout Type?'
          />
        </label>

        <label>
          Start time:
          <input
            id='time'
            type='time'
            name='time'
            value={formValues.time}
            onChange={handleChange}
            placeholder='Start Time?'
          />
        </label>

        <label>
          Duration:
          <input
            id='duration'
            type='number'
            name='duration'
            value={formValues.duration}
            onChange={handleChange}
            placeholder='How many hours?'
          />
        </label>
        
        <label>
          Intensity level:
          <input
            id='intensity'
            type='number'
            name='intensity'
            value={formValues.intensity}
            onChange={handleChange}
            placeholder='level?'
          />
        </label>

        <label>
          Location:
          <input
            id='location'
            type='text'
            name='location'
            value={formValues.location}
            onChange={handleChange}
            placeholder='Where is it?'
          />
        </label>

        <label>
          Date:
          <input
            id='date'
            type='date'
            name='date'
            value={formValues.date}
            onChange={handleChange}
          />
        </label>

        <label>
          Max Class Size:
          <input
            id='max_class_size'
            type='number'
            name='max_class_size'
            value={formValues.max_class_size}
            onChange={handleChange}
          />
        </label>

        <button id='createButton' type='submit'>
          Create Class
        </button>
      </form>
  );
}
