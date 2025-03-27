import React from "react";
import style from "./About.module.css";

function About() {
  return (
    <div className={style.container}>
      <h1 className={style.text}>Acerca de la app de Rick & Morty</h1>
      <h5 className={style.text}>
        Creada por Facu con ❤️ y un poco de ciencia loca
      </h5>

      <div className={style.content}>
        <p>
          ¡Bienvenido/a al multiverso de Rick & Morty! Esta app consume la API
          oficial de la serie para mostrarte personajes, episodios y locuras
          interdimensionales.
        </p>

        <h3>⚡ Tecnologías usadas:</h3>
        <ul className={style.list}>
          <li>React.js</li>
          <li>CSS Modules</li>
          <li>API pública de Rick & Morty</li>
        </ul>

        <h3>🔹 Propósito:</h3>
        <p>
          Practicar desarrollo frontend, manejo de APIs y... ¡sobrevivir a los
          diseños de Rick Sanchez! (Wubba Lubba Dub Dub!)
        </p>

        <h3>🌌 ¿Quieres el código?</h3>
        <p>
          Puedes encontrarlo en mi repositorio de GitHub:
          <a
            href="https://github.com/Facundo-Sura/PI-Rick-Morty.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            [Enlace aquí]
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
