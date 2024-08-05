import React from "react";

function ProjectCard({ src, link, h3, p, tecnologias, mostrarDemo, linkDemo }) {
  return (
    <div className="contenedorEnlace">
      <a href={link} target="_blank" className="enlaceProyectos">
        <img className="hover" src={src} alt={`Imagen de ${h3}`} />
        <h3>{h3}</h3>
        <p>{p}</p>
        <p className="pTecnologias">{tecnologias}</p>
      </a>
      <br />
      {/* Aplicar la clase oculto si mostrarDemo es falso */}
      <a
        href={linkDemo}
        target="_blank"
        rel="noopener noreferrer"
        className={`demo ${!mostrarDemo ? "oculto" : ""}`}
      >
        Demo
      </a>
    </div>
  );
}

export default ProjectCard;
