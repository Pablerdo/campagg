import React, { useState } from 'react'
import './Banner.css'
import  Button  from "@mui/material/Button";
import Search from './Search';
import { useNavigate } from "react-router-dom";

function Banner() {
    let navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>

            <div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick= {() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>

            <div className='banner__caption'>
                <h1>Discover top-ranked summer camps at prestigious institutions</h1>
            </div>
        </div>
    )
}

export default Banner