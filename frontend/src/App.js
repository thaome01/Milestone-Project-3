import React from 'react'
// import NavBar from './components/NavBar';
import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/home'

// import { Data } from './Data'    myData={Data}



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* < NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
