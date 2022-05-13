import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to={"/"} style={{textDecoration: "none"}}>
                <div className='header__left'>
                    <h1 style={{color: "black"}}>InspireSummer</h1>
                </div>
            </Link>

            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <img src={require("./images/Ivy_League_logo.png")} style={{marginRight: "20px", height: "40px"}}/>
                <Avatar />
            </div>
        </div>
    )
}

export default Header