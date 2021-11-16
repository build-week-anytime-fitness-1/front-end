import './App.css';
import InstructorForm from './Folder/InstructorForm';
import UserForm from './Folder/UserForm'; 
import ClassCreate from './Folder/ClassCreate';

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
