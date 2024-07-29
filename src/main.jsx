import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/userContext.jsx'
import { ChartProvider } from './context/chartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ChartProvider>
        <App />
      </ChartProvider>
    </UserProvider>
</React.StrictMode>,
)
