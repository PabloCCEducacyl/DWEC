import { StrictMode, useState } from 'react';
import {BrowserRouter, Routes, Router, Route} from 'react-router'
import { createRoot } from 'react-dom/client';
import './index.css';
import { Hola } from './Hola.jsx';
import Posts from './Posts.jsx';


const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Posts/>} />
        <Route path='/u/:id' element={<Perfil/>}/>
      </Routes>
    </Router>
  </>
);