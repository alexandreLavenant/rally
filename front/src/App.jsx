import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Quizz from './pages/Quizz/Quizz';
import Login from './pages/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quizz' element={<Quizz />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

