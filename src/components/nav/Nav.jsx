import Button from "../button/Button";
import SearchBar from "../searchbar/Searchbar";


const Nav = () => {
    return(
        <nav>
            <Button path="/home" text="home"/>
            <SearchBar />
             <Button path="/form" text="form" />
           
            <Button path="/favorites" text="Favoritos 💖" />
        </nav>
    )
}

export default Nav;