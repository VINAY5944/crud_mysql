import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './components/View';
import Add from './components/Add';
import Update from './components/Update';
import Single from './components/Single';
function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>

<Route   element={<View/>}   path="/"  />
<Route element={<Add/>}   path='/add'/>
<Route element={<Update/>} path='/update/:id'/>
<Route element={<Single/>} path='/single/:id'/>
 </Routes>
 
 
 
 
 
 </BrowserRouter>
    </div>
  );
}

export default App;
