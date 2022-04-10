
import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from './Home'
import './index.css';

import About from './About'
import Blogs from './Blogs'
import Events from './Events'
import Error from './Error'
import Contact from './Contact'
import Team from './Team'
const App=()=> {
  return (
    <>
    
     {/* <Home/> */}
     <Routes>
       <Route exact path='/' element={<Home/>}></Route>
       <Route path='/About' element={<About/>}></Route>
       <Route path='/Team' element={<Team/>}></Route>
       <Route path='/Contact' element={<Contact/>}></Route>
       <Route path='/Events' element={<Events/>}></Route>
       <Route path='/Blogs' element={<Blogs/>}></Route>
       <Route  path="*" element={<Error/>}></Route> 
     </Routes>

    </>
  );
}

export default App;
