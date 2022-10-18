import React from 'react'

import './styles/Projeto.css'

const projetos = [
  {name: "Fruit and Fruit Architecture CSS ASSETS", description: "Site feito a partir dos cursos do alura", url: "https://github.com/MiguelASFerreira/Fruit-and-Fruit-Architecture-CSS-ASSETS"},
  {name: "Alura-MIDI", description: "Site feito a partir dos cursos do alura", url: "https://github.com/MiguelASFerreira/Alura-MIDI"},
  {name: "Explorer", description: "Site feito a partir do evento da RocketSeat - Versão Explorer", url: "https://github.com/MiguelASFerreira/Explorer"},
  {name: "Ignite", description: "Site feito a partir do evento da RocketSeat - Versão Ignite", url: "https://github.com/MiguelASFerreira/Ignite"},
  {name: "Cine Movie", description: "Projeto criado com api de filmes 'Movie DB'", url: "https://github.com/MiguelASFerreira/Cine_Movie"}
]

const Projeto = () => {
  return (
    <div>
      <h1 className='text-projeto'>Projeto</h1>
      <section className='projetos-container projeto'>
        <div className='projeto-grid'>
        {projetos.map((projeto) => (
          <div className="projeto-card">
            <div className='projeto-info'>
            <h3>{projeto.name}</h3>
            <p>{projeto.description}</p>
            <a href={projeto.url} className='btn'>Projeto</a>
            </div>
          </div>
        ))}
        </div>
      </section>
    </div>
  )
}

export default Projeto