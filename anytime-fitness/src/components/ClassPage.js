import ClassCreate from "./ClassCreate";
import React, { useState, useEffect } from 'react';
import axios from "axios";




export default function ClassPage() {
  const [classes, setClasses] = useState([])
  
  const getClasses = () => {
    axios.get('https://build-week-anytime-fitness-1.herokuapp.com/api/classes')
    .then(res => {
      console.log(res)
      setClasses(res.data)
    })
    .catch(error => {
      console.error(error)
    })
  }
  
    useEffect(() => {
      getClasses()
    }, [])
    
    return (
      <div className="ClassPage">
        <h2>Saddness is endless</h2>
          <div key={classes.instructor_id}>
              <p>{classes.class_name}</p>
              <p>{classes.type}</p>
              <p>{classes.time}</p>
              <p>{classes.date}</p>
              <p>{classes.duration}</p>
              <p>{classes.intensity}</p>
              <p>{classes.location}</p>
              <p>{classes.max_class_size}</p>
          </div>
      </div>
)};
