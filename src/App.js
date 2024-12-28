import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/style.css"
import Tutorial from './pages/Tutorial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jsInterviewQuestions" element={<Tutorial/>} />
        <Route path="/jsInterviewQuestions/quizz" element={<Tutorial/>} />
        <Route path="/jsInterviewQuestions/progress" element={<Tutorial/>} />
      </Routes>
    </Router>
  );
}

export default App;
