import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link, Routes, Route,  } from 'react-router-dom';
import ClassPage from './ClassPage';

export default function ClassList () {
const { url } = useNavigate();


const [workouts, setWorkouts] = useState ([])
const getClasses = () => {
    axios.get('https://build-week-anytime-fitness-1.herokuapp.com/api/classes')
    .then(res => {
        console.log(res.data)
        setWorkouts(res.data)
    })
    .catch(error => {
        console.error(error)
    })
}

    useEffect(() => {
        getClasses()
    }, [])

    return (
        <div>
            <Routes>
            <Route path=':classId' element={<ClassPage/>}/>
            </Routes>
            <h2>Classes</h2>
            {workouts.map(workout => (
                <div
                className='workout-card'
                key={workout.class_id}
                >
                    <Link to={`/classes/${workout.class_id}`}>
                        <h3>{workout.class_name}</h3>
                    </Link>
                    <p>{workout.time},{workout.date}</p>
                    <p>{workout.location}</p>
                    <p>{workout.type}</p>
                    <p>{workout.intensity}</p>
                    <p>{workout.duration}</p>
                </div>
            ))}
        </div>
    )
    // return (
    //     <div>
    //         <h2>Classes</h2>
    //         {workouts.map(workout => (
    //             <div
    //             className='workout-card'
    //             key={workout.class_id}
    //             >
    //                 <Link to={`https://build-week-anytime-fitness-1.herokuapp.com/api/classes/${workout.class_id}`}>
    //                     <h3>{workout.class_name}</h3>
    //                 </Link>
    //                 <p>{workout.time},{workout.date}</p>
    //                 <p>{workout.location}</p>
    //                 <p>{workout.type}</p>
    //                 <p>{workout.intensity}</p>
    //                 <p>{workout.duration}</p>
    //             </div>
    //         ))}
    //     </div>
    // )
}