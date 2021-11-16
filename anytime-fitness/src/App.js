import './App.css';
import InstructorForm from './components/InstructorForm';
import UserForm from './components/UserForm'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserForm />
        <InstructorForm />
      </header>
    </div>
  );
}

export default App;
