import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Hola } from './Hola.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Hola mensaje='javier garcia gorbino'/>
  </StrictMode>
);