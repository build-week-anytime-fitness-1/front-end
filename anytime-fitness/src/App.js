import './App.css';
import InstructorForm from './components/InstructorForm';
import UserForm from './components/UserForm'; 
import ClassCreate from './components/classCreate';

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
