import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <div className={style.navbar}>
      <div className={style.menu}>
        <Link to="/home" className={style.item}>
          <button className={style.item}>Home</button>
        </Link>
        <Link to="/about" className={style.item}>
          <button className={style.item}>About</button>
        </Link>
        <Link to="/favorites" className={style.item}>
          <button className={style.item}>Favorites</button>
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
