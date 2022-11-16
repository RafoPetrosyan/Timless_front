import React from "react";
import {Carousel} from "antd";
import estimate from "assets/images/estimate.png";

import useContainer from "./hook";
import 'antd/dist/antd.min.css';
import "./style.scss";

const Estimate = () => {
    const { socialIcons } = useContainer();

    return (
        <div className="estimate">
            <div className='socialDiv'>
                <div className="socialContent">
                    {Object.keys(socialIcons).map(item => (
                        <a href="#" key={item}>{socialIcons[item]}</a>
                    ))}
                </div>
            </div>
            {/*<Carousel className='carousel'>*/}
            <Carousel autoplay autoPlaySpeed={1000} infinite className='carousel'>
                <div className='carouselItem'>
                    <div className='informationDiv'>
                        <h2 className='title'>BUILDING QUALITY HOMES THAT STAND THE TEST OF TIME</h2>
                        <p className='text'>
                            Welcome to Timeless Construction- leading construction company
                            that can help you with all  your roofing, plumbing and remodeling needs.
                            We take pride for quality homes that  stand the test of time. We offer integrity and customer satisfaction.
                        </p>
                        <button className='estimateButton'>
                            FREE ESTIMATE
                        </button>
                    </div>
                    <img src={estimate} alt='' />
                </div>
                <div className='carouselItem'>
                    <div className='informationDiv'>
                        <h2 className='title'>TIMELESS CONSTRUCTION</h2>
                        <p className='text'>
                            Welcome to Timeless Construction- leading construction company
                            that can help you with all  your roofing, plumbing and remodeling needs.
                            We take pride for quality homes that  stand the test of time. We offer integrity and customer satisfaction.
                        </p>
                        <button className='estimateButton'>
                            FREE ESTIMATE
                        </button>
                    </div>
                    <img src={estimate} alt=''/>
                </div>
                <div className='carouselItem'>
                    <div className='informationDiv'>
                        <h2 className='title'>TIMELESS CONSTRUCTION</h2>
                        <p className='text'>
                            Welcome to Timeless Construction- leading construction company
                            that can help you with all  your roofing, plumbing and remodeling needs.
                            We take pride for quality homes that  stand the test of time. We offer integrity and customer satisfaction.
                        </p>
                        <button className='estimateButton'>
                            FREE ESTIMATE
                        </button>
                    </div>
                    <img src={estimate} alt=''/>
                </div>
                <div className='carouselItem'>
                    <div className='informationDiv'>
                        <h2 className='title'>TIMELESS CONSTRUCTION</h2>
                        <p className='text'>
                            Welcome to Timeless Construction- leading construction company
                            that can help you with all  your roofing, plumbing and remodeling needs.
                            We take pride for quality homes that  stand the test of time. We offer integrity and customer satisfaction.
                        </p>
                        <button className='estimateButton'>
                            FREE ESTIMATE
                        </button>
                    </div>
                    <img src={estimate} alt=''/>
                </div>
            </Carousel>
        </div>
    )
};

export default Estimate;