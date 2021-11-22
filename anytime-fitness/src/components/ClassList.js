import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link, Routes, Route, Outlet } from 'react-router-dom';
import ClassPage from './ClassPage';
import ClassCreate from './ClassCreate';
import NavBar from './NavBar';


 



export default function ClassList({decoded}) {
  const { url } = useNavigate();

  const [workouts, setWorkouts] = useState([]);
  const getClasses = () => {
    axios
      .get('https://build-week-anytime-fitness-1.herokuapp.com/api/classes')
      .then((res) => {
        console.log(res.data);
        setWorkouts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getClasses();
    
  }, []);

  return (
    <div className='classList'>
      <Outlet/>
      <h2>Classes</h2>
      <div className='cardList'>
        {workouts.map((workout) => (
          <div className='classCard' key={workout.class_id}>
            <Link to={`/classes/${workout.class_id}`}>
              <h3 className='classButton'>{workout.class_name}</h3>
            </Link>
            <p>Workout Type: {workout.type}</p>
            <p>
              Time/Date: {workout.time},{workout.date.slice(0, 10)}
            </p>
            <p>Class Duration: {workout.duration}</p>
            <p>Intensity Level: {workout.intensity}</p>
            <p>Location: {workout.location}</p>
          </div>
        ))}
      </div>
      {decoded.role === 1 ?<Link className='createButton' to={`/add-class`}>
        <h3>Create a Class</h3>
      </Link>: ''}
         
    </div>
  );
}
