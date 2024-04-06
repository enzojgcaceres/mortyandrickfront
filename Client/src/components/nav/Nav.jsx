import { NavLink } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';
import style from "./Nav.module.css";

export default function Nav(props){


  return (
    <div>
    <div className={style.container}>
      <NavLink to="/home">
        <button className={style.container__button}>Home</button>
      </NavLink>
      <NavLink to="/favorites">
        <button className={style.container__button}>Favorites</button>
      </NavLink>
      <NavLink to="/about">
        <button className={style.container__button}>About</button>
      </NavLink>
      <button onClick={props.logout} className={style.container__button}>
        Logout
      </button>
    </div>
    <div className={style.searchbar}>
      <SearchBar onSearch={props.onSearch} />
    </div>
  </div>
);
}