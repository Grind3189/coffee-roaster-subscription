import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {Scontext} from './components/Subscription/SubscriptionContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Scontext>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>  
    </Router>
  </Scontext>,
)
