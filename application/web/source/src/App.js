
// import './App.css';
import { Home } from './pages/Home';
import { Restaurants } from './pages/Restaurants';
import {Routes, Route} from "react-router-dom";
import { Groceries } from './pages/Groceries';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='restaurants' element={<Restaurants/>}/>
        <Route path='groceries' element={<Groceries/>}/>
      </Routes>
    </div>
  );
}

export default App;
