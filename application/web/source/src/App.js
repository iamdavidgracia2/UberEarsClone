
// import './App.css';
import { Home } from './pages/Home';
import { Restaurants } from './pages/Restaurants';
import {Routes, Route} from "react-router-dom";
import { Groceries } from './pages/Groceries';
import { Alcohol } from './pages/Alcohol';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='restaurants' element={<Restaurants/>}/>
        <Route path='groceries' element={<Groceries/>}/>
        <Route path='alcohol' element={<Alcohol/>}/>
      </Routes>
    </div>
  );
}

export default App;
