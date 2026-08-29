
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './context/ContextAPI.jsx'

createRoot(document.getElementById('root')).render(
    <ContextProvider >
       <App />
    </ContextProvider>
   
  
)
