import './App.css';
import CreateModal from './components/CreateModal';
import EditModal from './components/EditModal';

function App() {
  return (
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
    </div>
  );
}

export default App;
