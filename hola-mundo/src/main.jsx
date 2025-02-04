import { StrictMode, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import './index.css';
import { Hola } from './Hola.jsx';
import Posts from './Posts.jsx';
import Perfil from './Perfil.jsx';


const root = createRoot(document.getElementById('root'));

root.render(
    <Router>
      <Routes>
        <Route index path='/' element={<Posts/>} />
        <Route path="/user/:id" element={<Perfil />} />
      </Routes>
    </Router>
);