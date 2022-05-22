import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './form/About';
import Home from './form/Home';
import Login  from './form/Login';

import Register from './form/Register';


function App() {
  return (
    <div>
    
    <Router>
    
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/register' element={<Register/>}/>
         <Route exact path='/login' element={<Login/>}/>
         <Route exact path='/about' element={<About/>}/>
       </Routes>
     
     </Router>
     </div>
  );
}

export default App;
