import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <div className={style.navbar}>
      <Link to="/home" className={style.item}>
        Home
      </Link>
      <Link to="/about" className={style.item}>
        About
      </Link>
      <Link to="/favorites" className={style.item}>
        Favorites
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
