import React from 'react'

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

import banner from '../assets/banner3.png'

import './styles/Home.css'

const tecnologias =[
  {id: "html", name: "HTML5", icon: <DiHtml5 />},
  {id: "css", name: "CSS3", icon: <DiCss3 />},
  {id: "js", name: "JavaScript", icon: <DiJsBadge />},
  {id: "node", name: "Node.js", icon: <DiNodejsSmall />},
  {id: "mysql", name: "Mysql", icon: <DiMysql />},
  {id: "react", name: "React", icon: <DiReact />},
  {id: "bootstrap", name: "BootStrap", icon: <DiBootstrap />},
  {id: "java", name: "Java", icon: <DiJava />},
  {id: "linux", name: "Linux", icon: <FcLinux />},
  {id: "npm", name: "NPM", icon: <DiNpm />},
  {id: "git", name: "GIT", icon: <DiGit />},
  {id: "visual", name: "VisualStudio Code", icon: <DiVisualstudio />},
  {id: "prisma", name: "Prisma", icon: <SiPrisma />},
  {id: "mongo", name: "MongoDB", icon: <SiMongodb />}
]

const Home = () => {
  return (
    <div>
        <div className='home'>
        <section>
          <img src={`https://github.com/MiguelASFerreira.png`} alt="Imagem GitHub" className='perfil'/>
          <h1 className='mini-sobre'>Um pouco sobre mim:</h1>
          <p className='mini-sobre'>Meu nome é Miguel Antonio Santos Ferreira, tenho 18 anos, e estou no nível intermediário de certas tecnlogias.</p>
        </section>
        <section className='tecnologias-container'>
          <h1 className='mini-tecnologias'>Tecnologias</h1>
          <div className="tecnologias-grid">
            {tecnologias.map((tech) => (
              <div className="tecnologia-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="tecnologia-info">
                  <h3>{tech.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
        </div>
    </div>
  )
}

export default Home;