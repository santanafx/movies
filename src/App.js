import './App.css';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <h2>Movies lib</h2>
      <Outlet />
    </div>
  );
}

export default App;
