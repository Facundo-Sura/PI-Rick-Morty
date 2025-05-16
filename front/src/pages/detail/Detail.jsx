import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  //const URL = 'https://rym2.up.railway.app/api/character/'
  const URL = `http://localhost:3001/rickandmorty/character`;
  //const API_KEY = 'henrystaff'

  useEffect(() => {
    //axios.get(`${URL}${id}?key=${API_KEY}`)
    axios.get(`${URL}/${id}`).then(({ data }) => {
      if (data.name) setCharacter(data);
      else alert("No hay personajes con ese ID");
    });

    return setCharacter({});
  }, [id]);

  return (
    <div className={style.page}>
      <div className={style.container}>
        <img
          className={style.foto}
          src={character.image}
          alt={character.name}
        />
        <div className={style.info}>
          <h2 className={style.name}>Name: {character.name}</h2>
          <h4 className={style.tags}>DNI: {character.id}</h4>
          <h4 className={style.tags}>Status: {character.status}</h4>
          <h4 className={style.tags}>Specie: {character.species}</h4>
          <h4 className={style.tags}>Gender: {character.gender}</h4>
          <h4 className={style.tags}>Origin: {character.origin?.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default Detail;
