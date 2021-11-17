import ClassCreate from "./ClassCreate";
import react, { useState } from 'react';
import axios from "axios";
import * as yup from 'yup';
import ClassSchema from "../validation/ClassSchema";

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

  const initialFormErrors = {
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

function App() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [instructors, setInstructors] = useState([])
  
    const handleSubmit = () => {
      axios.post('https://regres.in/api/users', formValues)
      .then(resp => {
        setInstructors([resp.data, ...instructors])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
    }
  
    const validate = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }
  
    const handleChange = (name, value) => {
      validate(name, value);
      setFormValues({...formValues, [name]: value});
    }
    return (
      <div className="App">
        <ClassCreate values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
        {instructors.map(user => {
          <div key={user.instructor_id}>
              <p>{user.className}</p>
              <p>{user.type}</p>
              <p>{user.time}</p>
              <p>{user.date}</p>
              <p>{user.duration}</p>
              <p>{user.intensity}</p>
              <p>{user.location}</p>
              <p>{user.max_class_size}</p>
          </div>
        }) }
      </div>
    );
