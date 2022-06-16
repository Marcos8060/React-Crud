import './App.css';
import CreateModal from './components/CreateModal';
import EditModal from './components/EditModal';
import Task from './components/Task';

function App() {
  return (
    <div className="app__body">
      <div className='container'>
      <h1 className='text-decoration-underline text-center'>My Task List</h1>
      <div className='py-4'>
          <CreateModal />
      </div>
      <div className="d-flex justify-content-center align-items-center">
           <Task />
      </div>
    </div>
    </div>
  );
}

export default App;
