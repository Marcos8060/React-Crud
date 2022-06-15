import './App.css';
import CreateModal from './components/CreateModal';
import EditModal from './components/EditModal';
import Task from './components/Task';

function App() {
  return (
    <div className="app__body">
      <div className='container'>
      <h1 className='text-decoration-underline text-center'>My Task List</h1>
      <div className='row py-4'>
        <div className="col-md-6 text-center">
          <CreateModal />
        </div>
        <div className="col-md-6 text-center">
          <EditModal  />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
           <Task />
      </div>
    </div>
    </div>
  );
}

export default App;
