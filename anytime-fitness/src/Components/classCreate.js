import react, { useState } from 'react';
import axios from 'axios'
import * as yup from 'yup';

const Form = () => {
    const [input, setInput] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInput((values) => ({ ...values, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (input.name.length < 3) {
        alert('name must be at least 3 characters');
      }
    };
    return (
      <form id='classFillOut' onSubmit={handleSubmit}>
      <label>Name: 
        <input
          id='name'
          type='text'
          name='Instuctor'
          value={''}
          onChange={handleChange}
          placeholder='Instuctor Name?'
        />
      </label>

      <label>Workout: 
        <input
          id='workout'
          type='text'
          name='Exersize'
          value={''}
          onChange={handleChange}
          placeholder='Workout Type?'
        />
      </label>

      <label>Start time: 
        <input
          id='timeStart'
          type='text'
          name='Starts at'
          value={''}
          onChange={handleChange}
          placeholder='Start Time?'
        />
      </label>

      <label>Duration: 
        <input
          id='timeLength'
          type='text'
          name='Length'
          value={''}
          onChange={handleChange}
          placeholder='How many hours?'
        />
      </label>

      <label>Intensity level: 
        <input
          id='intensity'
          type='text'
          name='Intensity'
          value={''}
          onChange={handleChange}
          placeholder='level?'
        />
      </label>

      <label>Location: 
        <input
          id='location'
          type='text'
          name='Location'
          value={''}
          onChange={handleChange}
          placeholder='Where is it?'
        />
      </label>

      {/* <label>Attendents: 
        <input
          id='pop'
          type='text'
          name='Attendees'
          value={''}
          onChange={handleChange}
        />
      </label> */}

      <label>Max Class Size: 
        <input
          id='maxClass'
          type='checkbox'
          name='Maximum'
          value={signUp}
          onChange={handleChange}
        />
      </label>

      <button id='createButton' type='submit'>
        Sign up?
      </button>
    </form>
    )
  }

  export default classCreate;