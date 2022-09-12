import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Pages/Header'
import Signin from './components/Forms/Signin';
import Home from './components/Pages/Home';
import Register from './components/Pages/Register'
import './App.css';

function App() {
  return (
    <div className="App">

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />}></Route>
            <Route path="login" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="Home" element={<Home />} />

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
