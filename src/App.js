import React from "react";
import {Route, Routes} from 'react-router-dom';
import HomePage from "./component/homePage/HomePage";
import Calendar from "./component/Scheduler/Calendar";

function App() {
  return (
    <Calendar/>
      // <Routes>
      //    <Route exact path="/" element={<HomePage />} /> 
      //    <Route  path="/Scheduler" element={<Calendar/>} />
      //   </Routes>
  );
}

export default App;
