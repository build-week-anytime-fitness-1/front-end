import ClassCreate from "./ClassCreate";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const getClasses = () => {
  axios.get('https://build-week-anytime-fitness-1.herokuapp.com/api/classes')
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
}

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

export default function ClassPage() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [instructors, setInstructors] = useState([])
  
  
    
    return (
      <div className="ClassPage">
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
}