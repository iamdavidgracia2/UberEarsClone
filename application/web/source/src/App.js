
// import './App.css';
import { Home } from './pages/Home';
import { Restaurants } from './pages/Restaurants';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='restaurants' element={<Restaurants/>}/>
      </Routes>
    </div>
  );
}

export default App;
