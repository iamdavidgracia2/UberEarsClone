
// import './App.css';
import { Home } from './pages/Home';
import { Restaurants } from './pages/Restaurants';
import {Routes, Route} from "react-router-dom";
import { Groceries } from './pages/Groceries';
import { Alcohol } from './pages/Alcohol';
import { Cart } from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='restaurants' element={<Restaurants/>}/>
        <Route path='groceries' element={<Groceries/>}/>
        <Route path='alcohol' element={<Alcohol/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
