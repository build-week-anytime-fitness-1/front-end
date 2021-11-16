
import './App.css';
import InstructorForm from './components/InstructorForm';
import UserForm from './components/UserForm';
import NavBar from './components/nav-bar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <UserForm />
        <InstructorForm />
      </header>
    </div>
  );
}

export default App;
