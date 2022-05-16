import React from 'react';
import './SearchPage.css';
import Button from "@mui/material/Button";
import SearchResult from "./SearchResult";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

function SearchPage() {
    const [alignment, setAlignment] = React.useState()
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment)
    }

    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p># results </p>
                <h1>Camps</h1>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="athletic">Athletic</ToggleButton>
                    <ToggleButton value="academic">Academic</ToggleButton>
                    <ToggleButton value="price">Price</ToggleButton>
                    <ToggleButton value="housing">Housing</ToggleButton>
                    <ToggleButton value="ivy_league">Ivy League</ToggleButton>
                    <ToggleButton value="more_filters">More Filters</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <SearchResult
                img="https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
                location="Philadelphia"
                title="STEM Summer Camp"
                description="Science Technology Engineering Mathematics"
                star={3.85}
                price="$90 / day"
                total="$650 total"
            />

            <SearchResult
                img="https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
                location="Philadelphia"
                title="STEM Summer Camp"
                description="Science Technology Engineering Mathematics"
                star={3.85}
                price="$90 / day"
                total="$650 total"
            />

            <SearchResult
                img="https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
                location="Philadelphia"
                title="STEM Summer Camp"
                description="Science Technology Engineering Mathematics"
                star={3.85}
                price="$90 / day"
                total="$650 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
                location="Philadelphia"
                title="STEM Summer Camp"
                description="Science Technology Engineering Mathematics"
                star={3.85}
                price="$90 / day"
                total="$650 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
                location="Philadelphia"
                title="STEM Summer Camp"
                description="Science Technology Engineering Mathematics"
                star={3.85}
                price="$90 / day"
                total="$650 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
                location="Philadelphia"
                title="STEM Summer Camp"
                description="Science Technology Engineering Mathematics"
                star={3.85}
                price="$90 / day"
                total="$650 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
                location="Philadelphia"
                title="STEM Summer Camp"
                description="Science Technology Engineering Mathematics"
                star={3.85}
                price="$90 / day"
                total="$650 total"
            />
        </div>
    )
}

export default SearchPage