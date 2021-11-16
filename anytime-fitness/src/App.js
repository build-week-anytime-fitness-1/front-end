import './App.css';
import InstructorForm from './components/InstructorForm';
import UserForm from './Components/UserForm'; 
import ClassCreate from './Components/classCreate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassCreate />
        {/* <UserForm />
        <InstructorForm /> */}
      </header>
    </div>
  );
}

export default App;
