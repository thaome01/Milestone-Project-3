import React from 'react'

import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/home'
import CardSilverTempest from './components/card-silver-tempest'
import Cart from './components/Cart'

// import { Data } from './Data'    myData={Data}



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="SilverTempest" element={<CardSilverTempest />} />
          <Route path="Shopping-Cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
