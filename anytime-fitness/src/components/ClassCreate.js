import react, { useState } from 'react';
import axios from 'axios'
import * as yup from 'yup';

const initialFormValues = {
  class_name: '',
  type: '',
  instructor_id: 0,
  time: '',
  date: '',
  duration: 0,
  intensity: 0,
  location: '',
  max_class_size: 0
}
//wow what a change
export default function ClassCreate () {
    const [form, setForm] = useState({});
  
    const handleChange = (e) => {
      let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
      setForm({ ...form, [e.target.name]: value });
    };
  
    const handleSubmit = (event) => {
      // event.preventDefault();
      // if (input.name.length < 3) {
      //   alert('name must be at least 3 characters');
      // }
    };
    return (
      <form id='classFillOut' onSubmit={handleSubmit}>
      <label>Name: 
        <input
          name='class_name'
          type='text'
          id='class_name'
          value={form.class_name}
          onChange={handleChange}
          placeholder='Instuctor Name?'
        />
      </label>

      <label>Workout Type: 
        <input
          id='type'
          type='text'
          name='type'
          value={form.type}
          onChange={handleChange}
          placeholder='Workout Type?'
        />
      </label>

      <label>Start time: 
        <input
          id='time'
          type='time'
          name='time'
          value={form.time}
          onChange={handleChange}
          placeholder='Start Time?'
        />
      </label>

      <label>Duration: 
        <input
          id='duration'
          type='number'
          name='duration'
          value={form.duration}
          onChange={handleChange}
          placeholder='How many hours?'
        />
      </label>

      <label>Intensity level: 
        <input
          id='intensity'
          type='number'
          name='Intensity'
          value={form.intensity}
          onChange={handleChange}
          placeholder='level?'
        />
      </label>

      <label>Location: 
        <input
          id='location'
          type='text'
          name='Location'
          value={form.location}
          onChange={handleChange}
          placeholder='Where is it?'
        />
      </label>

      <label>Date: 
        <input
          id='date'
          type='date'
          name='date'
          value={form.date}
          onChange={handleChange}
        />
      </label>

      <label>Max Class Size: 
        <input
          id='max_class_size'
          type='number'
          name='max_class_size'
          value={form.max_class_size}
          onChange={handleChange}
        />
      </label>

      <button id='createButton' type='submit'>
        Create Class
      </button>
    </form>
    )
  }