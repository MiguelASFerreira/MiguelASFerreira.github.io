import React from 'react'

import curriculo from '../curriculo/Currículo.pdf'
import Informacoes from './Informacoes'
import SocialNetworl from './SocialNetwork'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={`https://github.com/MiguelASFerreira.png`} alt="Imagem GitHub"/>
      <p className="title">Desenvolvedor</p>
      <SocialNetworl />
      <Informacoes />
      <a href={curriculo} className="btn">
        Download Currículo
      </a>
      </aside>
  )
}

export default Sidebar