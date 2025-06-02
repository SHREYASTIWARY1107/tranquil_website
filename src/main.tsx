// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Check if the current path is in the .well-known directory
const path = window.location.pathname;
if (path.startsWith('/.well-known/')) {
  // Don't render the React app for .well-known paths
  window.location.href = path;
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  )
}