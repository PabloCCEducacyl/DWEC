import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Hola } from './Hola.jsx';
import Posts from './Posts.jsx';


const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <Hola/>
    <Posts/>
  </>
);