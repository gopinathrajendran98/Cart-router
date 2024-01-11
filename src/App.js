import React from "react";
import "./App.css"
import Cart from "./Pages/Cart/Cart"
import Details from "./Pages/Details/details"
import Women from "./Pages/Women/Women"

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path="/Cart" element={<Cart />}/> 
      <Route path="/Details" element={<Details />}/>
      <Route path="/Women" element={<Women />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
