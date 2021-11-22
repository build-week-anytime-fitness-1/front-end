import ClassCreate from './ClassCreate';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, Routes, Route, Outlet } from 'react-router-dom';
import EditClass from './EditClass';

export default function ClassPage() {
  const [workout, setWorkout] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://build-week-anytime-fitness-1.herokuapp.com/api/classes/${params.classId}`
      )
      .then((res) => {
        console.log(res);
        setWorkout(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.classId]);
console.log(params)
  return (
    <div className='ClassPage'>
     <Outlet/>
      <h2>{workout.class_name}</h2>
      <p>Workout Type: {workout.type}</p>
      <p>
        Time/Date: {workout.time},{' '}
        {workout.date ? workout.date.slice(0, 10) : ''}
      </p>
      <p>Class Duration: {workout.duration}</p>
      <p>Intensity Level: {workout.intensity}</p>
      <p>Location: {workout.location}</p>
      <p>Class Size: {workout.max_class_size}</p>
      <div className='buttonList'>
        <button>Delete</button>
      <Link to={`/edit/${workout.class_id}`}>
        Edit
      </Link>
      </div>
    </div>
  );
}
