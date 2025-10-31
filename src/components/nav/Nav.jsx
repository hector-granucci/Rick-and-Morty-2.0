import Button from "../button/Button";
import SearchBar from "../searchbar/Searchbar";
import style from "./nav.module.css";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/actions/actions";

const Nav = () => {
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(resetFilters()); // limpia solo los filtros
  };

  return (
    <nav className={style.all}>
      <div className={style.buttons}>
        {/* Home con ícono, resetea filtros y dirige a /home */}
        <Button path="/home" text="🏠" onClick={handleHomeClick} />
      </div>

      <div>
        <SearchBar />
      </div>

      <div className={style.buttons}>
        <Button path="/favorites" text="Favorites" />
        <Button path="/form" text="Form" />
      </div>
    </nav>
  );
};

export default Nav;
