import ClassCreate from "./ClassCreate";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom'



export default function ClassPage() {
  const [workout, setWorkout] = useState([])
  const params = useParams()
  useEffect(() => {
        axios.get(`https://build-week-anytime-fitness-1.herokuapp.com/api/classes/${params.classId}`)
        .then(res => {
          console.log(res)
          setWorkout(res.data)
        })
        .catch(error => {
          console.error(error)
        })
    }, [params.classId])
    
    return (
      <div className="ClassPage">
          {/* <Outlet/> */}
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
