import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projeto from './pages/Projeto'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} >
          <Route path='/' element={<Home />}/>
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/projetos' element={<Projeto />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
