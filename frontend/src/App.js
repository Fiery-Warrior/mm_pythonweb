import React, { useState } from 'react';
import './App.css';
import NavBarTop from './Navbar/NavBarTop.js';

import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import Recon from './pages/reconicon';
import Weapon from './pages/weapon';
import Delivery from './pages/delivery';
import Exploit from './pages/exploit';
import Install from './pages/install';
import Control from './pages/control';
import Objectives from './pages/objectives';
import Hambar from './pages/hambar';
import FileDisplayW from './pages/Weapon/FileDisplayW';
import FileDisplaykey from './pages/Weapon/keylogger/FileDisplaykey';
import Navbar from './Navbar';




function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  
 
  return (
    <div className="App">
      <div className ="top">
       {/* <NavBarTop/>*/}
          
            <Router>
              <Navbar/>
            <Routes>

              
                <Route path='/reconicon' element={<Recon/>} />
                <Route path='/weapon' element={<Weapon/>} />
                <Route path='/delivery' element={<Delivery/>} />
                <Route path='/exploit' element={<Exploit/>} />
                <Route path='/install' element={<Install/>} />
                <Route path='/control' element={<Control/>} /> {/*Control is for inital connections, so it will show when ever it gets a conection */}
                <Route path='/objectives' element={<Control/>} /> {/*Switched them, Objective (actions on obejctives is controling other machine) */}
                <Route path='/Hambar' element={<Hambar/>} />
                <Route path='/FileDisplayW' element={<FileDisplayW/>} />
                <Route path='/FileDisplaykey' element={<FileDisplaykey/>} />

            </Routes>
            </Router>




            </div>
    </div>
    
  );
}

export default App;
