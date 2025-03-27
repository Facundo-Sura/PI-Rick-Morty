import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";
import style from "./Card.module.css";

function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function Card({
  id,
  name,
  species,
  status,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const { pathname } = useLocation();

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, status, gender, origin, image });
    }
  }

  useEffect(() => {
    myFavorites.forEach((charFav) => {
      charFav.id === id && setIsFav(true);
    });
  }, []);
  return (
    <div className={style.card}>
      <div className={style.header}>
        {isFav ? (
          <button onClick={handleFavorite} className={style.btn}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavorite} className={style.btn}>
            🤍
          </button>
        )}
        <h2 className={style.id}>{id}</h2>
        {pathname === "/home" && (
          <button onClick={() => onClose(id)} className={style.btn}>
            X
          </button>
        )}
      </div>
      <Link to={`/detail/${id}`} className={style.name}>
        <h2 className={style.name}>{name}</h2>
      </Link>
      <img src={image} alt={name} className={style.bg} />
      <div className={style.info}>
        <h2 className={style.data}>{species}</h2>
        <h2 className={style.data}>{status}</h2>
        <h2 className={style.data}>{gender}</h2>
        <h2 className={style.data}>{origin}</h2>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
