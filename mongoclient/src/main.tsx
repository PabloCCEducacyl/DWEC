import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Objetos from './Objetos.tsx'
import FormObjetos from './FormObjetos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Objetos />
    <FormObjetos />
  </StrictMode>,
)
