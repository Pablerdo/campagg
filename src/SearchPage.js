import React from 'react';
import './SearchPage.css';
import Button from "@mui/material/Button";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>x camps </p>
                <h1>Results</h1>
                <Button variant="outlined">Athletic</Button>
                <Button variant="outlined">Academic</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Housing</Button>
                <Button variant="outlined"></Button>
                <Button variant="outlined">More filters</Button>
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