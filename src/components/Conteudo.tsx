import React from 'react'

import './Conteudo.css'

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiBootstrap,
    DiJava,
    FcLinux,
    DiNpm,
    DiGit,
    DiVisualstudio,
    SiPrisma,
    SiMongodb 
 } from 'react-icons/all'

 const tecnologias =[
    {id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Nível: Intermediário"},
    {id: "css", name: "CSS3", icon: <DiCss3 />, description: "Nível: Intermediário"},
    {id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Nível: Intermediário"},
    {id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Nível: Básico"},
    {id: "mysql", name: "Mysql", icon: <DiMysql />, description: "Nível: Intermediário"},
    {id: "react", name: "React", icon: <DiReact />, description: "Nível: Intermediário"},
    {id: "bootstrap", name: "BootStrap", icon: <DiBootstrap />, description: "Nível: Intermediário"},
    {id: "java", name: "Java", icon: <DiJava />, description: "Nível: Básico"},
    {id: "linux", name: "Linux", icon: <FcLinux />, description: "Nível: Básico"},
    {id: "npm", name: "NPM", icon: <DiNpm />, description: "Nível: Básico"},
    {id: "git", name: "GIT", icon: <DiGit />, description: "Nível: Básico"},
    {id: "visual", name: "VisualStudio Code", icon: <DiVisualstudio />, description: "Ferramenta de Edição"},
    {id: "prisma", name: "Prisma", icon: <SiPrisma />, description: "Gerenciador de Banco de Dados"},
    {id: "mongo", name: "MongoDB", icon: <SiMongodb />, description: "Nível: Básico"}
  ]

const Conteudo = () => {
    return (
        <main id='main-content'>
            <section className="about-container">
                <h2 className='conteudo'>Sobre</h2>
                <p>
                    Eu sou Miguel Antonio Santos Ferreira, tenho 18 anos. Comecei a ter interesse na área de programação, depois ter visto a Feira de Profissões na Faculdade Integrado. Mesmo eu tendo começado meio tarde, eu pretendo ser nessa área um programador FullStack.  Já participei de várias palestras sobre programação. Algumas tecnologias que eu mostrei interesse são o React, Prisma, NodeJs, NextJs e Linux, que realizei alguns projetos usando algumas dessas tecnlogias que estão postadas no meu GitHub.
                </p>
            </section>
            <section className='tecnologias-container-sobre'>
          <h1 className='mini-tecnologias'>Tecnologias</h1>
          <div className="tecnologias-grid">
            {tecnologias.map((tech) => (
              <div className="tecnologia-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="tecnologia-info">
                  <h3>{tech.name}</h3>
                  <p>{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        </main>
    )
}

export default Conteudo