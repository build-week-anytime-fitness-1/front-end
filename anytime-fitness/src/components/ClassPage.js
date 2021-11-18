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
              <h2>{workout.class_name}</h2>
              <p>Workout Type: {workout.type}</p>
              <p>Time/Date: {workout.time}, {workout.date}</p>
              <p>Class Duration: {workout.duration}</p>
              <p>Intensity Level: {workout.intensity}</p>
              <p>Workout Location: {workout.location}</p>
              <p>Class Size: {workout.max_class_size}</p>
      </div>
    );
}
