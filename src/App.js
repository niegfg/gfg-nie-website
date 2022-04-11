import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import './App.css';

import About from './components/About'
import Blogs from './components/Blogs'
import Events from './components/Events'
import Error from './components/Error'
import Contact from './components/Contact'
import Team from './components/Team'
const App = () => {
  return (
    <>

      {/* <Home/> */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Team' element={<Team />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Events' element={<Events />}></Route>
        <Route path='/Blogs' element={<Blogs />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>

    </>
  );
}

export default App;
