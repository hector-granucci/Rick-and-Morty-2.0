import Button from "../button/Button";
import SearchBar from "../searchbar/Searchbar";
import style from "./nav.module.css"


const Nav = () => {
    return(
      
        <nav className={style.all}>
            <div className={style.buttons}>
            <Button path="/home" text="Home"/>
            </div>

            <div>               
            <SearchBar />
            </div>

            <div className={style.buttons}>
            <Button path="/favorites" text="Favorites" />
            <Button path="/form" text="Form" />
            </div>
 
        </nav>
      
    )
}

export default Nav;