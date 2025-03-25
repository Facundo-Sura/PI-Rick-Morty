import { useState } from "react";
import style from "./Search.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  function handleChange(evento) {
    setId(evento.target.value);
  }

  const search = () => {
    props.onSearch(id);
    setId("");
  };

  return (
    <div className={style.bar}>
      <input
        type="search"
        onChange={handleChange}
        placeholder="Ingresa un ID"
        value={id}
         className={style.input}
      />
      <button onClick={search} className={style.add}>Agregar</button>
    </div>
  );
}
