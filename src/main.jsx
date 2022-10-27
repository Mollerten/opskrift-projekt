import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import apiFacade from "./apiFacade.js";
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App apiFacade={apiFacade} />
  </React.StrictMode>
)
