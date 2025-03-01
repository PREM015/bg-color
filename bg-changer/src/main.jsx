import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import './index.css'

import First from './components/First.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <First/>
    <br />
    
  </StrictMode>,
)