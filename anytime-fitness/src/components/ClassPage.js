import ClassCreate from "./ClassCreate";
import React, { useState, useEffect } from 'react';
import axios from "axios";



export default function ClassPage() {
  const [workout, setWorkout] = useState([])
  
  const getClass = () => {
    axios.get('https://build-week-anytime-fitness-1.herokuapp.com/api/classes/7')
    .then(res => {
      console.log(res)
      setWorkout(res.data)
    })
    .catch(error => {
      console.error(error)
    })
  }
    useEffect(() => {
      getClass()
    }, [])
    
    return (
      <div className="ClassPage">
              <p>{workout.class_name}</p>
              <p>{workout.type}</p>
              <p>{workout.time}</p>
              <p>{workout.date}</p>
              <p>{workout.duration}</p>
              <p>{workout.intensity}</p>
              <p>{workout.location}</p>
              <p>{workout.max_class_size}</p>
      </div>
    );
}
