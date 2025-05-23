import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../../components/card/Card";
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
      <div className={style.bar}>
        <select
          name="order"
          defaultValue="orderCharacter"
          onChange={hanldeOrder}
          className={style.select}
        >
          <option value="orderCharacter" disabled="disabled">
            order...
          </option>
          <option value="asendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
        <select
          name="filter"
          defaultValue="ALl"
          onChange={handleFilter}
          className={style.select}
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={style.cards}>
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
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
