import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Pomodoro } from './pages/pomodoro';
import { ShortBreak } from './pages/shortBreak';
import { LongBreak } from './pages/longBreak';
import { Layout } from './Layout';
import { useState, useEffect } from 'react';
import { Task } from './pages/task';


function App() {

  // Store tasks at the top level
  
 
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Pomodoro/>}/>
          <Route path="/task" element={<Task/>}/>
          <Route path="/short-break" element={<ShortBreak/>}/>
          <Route path="/long-break" element={<LongBreak/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;