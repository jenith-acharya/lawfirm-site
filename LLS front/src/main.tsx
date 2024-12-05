import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landingpage from './pages/landing'
import "./index.css"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Landingpage />
  </StrictMode>,
)
