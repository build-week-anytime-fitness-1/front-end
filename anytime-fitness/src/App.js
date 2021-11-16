import './App.css';

import InstructorForm from './Components/InstructorForm';
import UserForm from './Components/UserForm';
import ClassCreate from './Components/ClassCreate';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home'
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {<InstructorForm/>}
          </header>
    </div>
  );
}

export default App;
