import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Quizz from './pages/Quizz';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quizz' element={<Quizz />} />
      </Routes>
    </BrowserRouter>
  );
}

