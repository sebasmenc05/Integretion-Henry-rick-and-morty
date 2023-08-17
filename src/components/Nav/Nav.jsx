import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";


class Nav extends React.Component {
    constructor(props) {
        super()
    }

    render(){
        return(
        
        <nav className={style.nav}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIxxNKBGVD0QQUiEAYagHmke2z7bHRzkrIw&usqp=CAU" alt="" />
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/favorites">Favorites</Link>
            <SearchBar onSearch={this.props.onSearch}/>
        </nav>
        )
    }
}

export default Nav;
