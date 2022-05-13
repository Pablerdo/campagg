import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className='home__section'>
                <Card
                    src="https://www.harvard.edu/wp-content/uploads/2021/02/HBS_Baker-768x576.png"
                    title="Ivy League Academic Camps"
                    description="Unique activities at world-class institutions"
                />
                <Card
                    src="https://pennfieldhockeycamps.com/images/slides/paige2.JPG"
                    title="Division 1 Recruitment Camps"
                    description="Camps to display your skills to D1 coaches"
                />
                <Card
                    src="https://static.dezeen.com/uploads/2022/03/schwarzmann-student-center-ramsa-yale-university-architecture_dezeen_2364_col_10.jpg"
                    title="College Application Workshops"
                    description="Sharpen up your essay-writing with college admissions experts"
                />
            </div>
            <div className='home__heading'>
                <h1>Featured Camps</h1>
            </div>
            <div className='home__section'>
                <Card
                    src="https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
                    title="STEM Camp at UPenn"
                    description="Science Technology Engineering Mathematics"
                    price="$130/day"
                />
                <Card
                    src="https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
                    title="STEM Camp at UPenn"
                    description="Science Technology Engineering Mathematics"
                    price="$350/day"
                />
                <Card
                    src="https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
                    title="STEM Camp at UPenn"
                    description="Science Technology Engineering Mathematics"
                    price="$70/day"
                />
            </div>
        </div>
    )
}

export default Home