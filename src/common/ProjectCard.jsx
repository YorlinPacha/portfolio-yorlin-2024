import React from 'react'

function ProjectCard({src, link, h3, p, tecnologias}) {
  return (
    <a href={link} target="_blank" className='enlaceProyectos'>
          <img
            className="hover"
            src={src}
            alt={`Imagen de ${h3}`}
          />
          <h3>{h3}</h3>
          <p>{p}</p>
          <p className='pTecnologias'>{tecnologias}</p>
        </a>
  )
}

export default ProjectCard
