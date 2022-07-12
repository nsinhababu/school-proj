import Main from './Pages/Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Students from './Pages/Students';
import Dummy from './Pages/Dummy';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Dummy />} />
          <Route path='dummy' element={<Dummy />} />
          <Route path='students' element={<Students />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
