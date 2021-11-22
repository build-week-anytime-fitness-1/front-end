import './App.css';
import { useState } from 'react';
import InstructorForm from './components/InstructorForm';
import UserForm from './components/UserForm'; 
import ClassCreate from './components/ClassCreate';
import { Routes, Route, Outlet } from 'react-router-dom'
import LoginForm from './components/Login';
import ClassList from './components/ClassList';
import ClassPage from './components/ClassPage';
import Logout from './components/Logout'
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  let token = localStorage.getItem('token')

  return (
    <div className='App'>
      {/* <header className='App-header'>
        {<InstructorForm/>}
      </header> */}
    <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} token={token} />
    <Outlet/>
      <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path='client' element={<UserForm />} />
        <Route path='add-class' element={<ClassCreate />} />
        <Route path='login' element={<LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
        <Route path='classes/*' element={<ClassList/>} />
        <Route path=':classId' element={<ClassPage/>}/>
        <Route path='logout' element={<Logout/>}/>
      </Routes>

    </div>
  );
}

 
export default App;
