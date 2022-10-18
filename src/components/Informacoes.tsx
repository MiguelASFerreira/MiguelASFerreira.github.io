import React from 'react'

import './Informacoes.css'
import { 
    AiFillPhone, 
    AiOutlineMail, 
    AiFillEnvironment 
} from 'react-icons/ai'

const Informacoes = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(44)99722-1048</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>migant1306@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Araruna / PR</p>
        </div>
      </div>
    </section>
  )
}

export default Informacoes