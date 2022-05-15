import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "./Avatar";
import { Link, useNavigate } from "react-router-dom";
import LogIn from "./LogIn";
import {useAuth} from './contexts/AuthContext'


function Header() {


    const navigate = useNavigate()
    const { currentUser } = useAuth()
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
                <img src={require("./images/Ivy_League_logo.png")} alt={"Ivy League"} style={{marginRight: "20px", height: "40px"}}/>
                {currentUser ?
                    <Avatar /> :
                    <LogIn/>
                }
            </div>
        </div>
    )
}

export default Header