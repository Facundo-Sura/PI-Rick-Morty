import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import style from "./Favorites.module.css";

function Favorites({ myFavorites }) {
  const dispatch = useDispatch();

  const hanldeOrder = (evento) => {
    dispatch(orderCards(evento.target.value));
  };

  const handleFilter = (evento) => {
    dispatch(filterCards(evento.target.value));
  };

  return (
    <div className={style.container}>
      <div>
        <select
          name="order"
          defaultValue="orderCharacter"
          onChange={hanldeOrder}
        >
          <option value="orderCharacter" disabled="disabled">
            order...
          </option>
          <option value="asendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
        <select name="filter" defaultValue="ALl" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {myFavorites.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin}
          image={char.image}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
