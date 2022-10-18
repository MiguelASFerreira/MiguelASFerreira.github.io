import React from 'react'

import Sidebar from '../components/Sidebar'
import Conteudo from '../components/Conteudo'

import './styles/Sobre.css'

const Sobre = () => {
  return (
    <div id='sobre'>
      <Sidebar />
      <Conteudo />
    </div>
  )
}

export default Sobre;