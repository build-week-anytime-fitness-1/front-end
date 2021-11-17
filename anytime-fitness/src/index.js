import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassCreate from './components/ClassCreate';
import UserForm from './components/UserForm';
import Home from './components/Home';
import InstructorForm from './components/InstructorForm';
import NavBar from './components/NavBar';
import LoginForm from './components/Login';
import ClassPage from './components/ClassPage';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <NavBar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route index element={<Home />} />
        <Route path='client' element={<UserForm />} />
        <Route path='add-class' element={<ClassCreate />} />
        <Route path='login' element={<LoginForm/>}/>
        <Route path='classes' element={<ClassPage/>}/>
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
