import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./styles/variables.css";
// import "./styles/global.css";
import "./styles/typography.css";
import "./styles/accessibility.css";
import "./styles/responsive.css";
import './styles/index.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
// 






