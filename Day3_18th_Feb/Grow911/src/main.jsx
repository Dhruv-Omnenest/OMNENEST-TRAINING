import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CardContext.jsx'
import Assignment from './components/Assignment3.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      {/* <App /> */}
      <Assignment/>
    </CartProvider>
  </React.StrictMode>,
)
