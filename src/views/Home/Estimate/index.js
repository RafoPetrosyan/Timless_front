import React from "react";
import {Carousel} from "antd";
import estimate from "assets/images/estimate.png"

import useContainer from "./hook";
import 'antd/dist/antd.min.css';
import "./style.scss";

const Estimate = () => {
    const { contentStyle, socialIcons } = useContainer();

    return (
        <div className="estimate">
            <div className='socialDiv'>
                <div className="socialContent">
                    {Object.keys(socialIcons).map(item => (
                        <a href="#">{socialIcons[item]}</a>
                    ))}
                </div>
            </div>
            <Carousel autoplay autoPlaySpeed={1000} infinite className='carousel'>
                <div className='carouselItem' style={contentStyle}>
                    <img src={estimate} alt='' />
                </div>
                <div className='carouselItem'>
                    <img src={estimate} alt='' style={contentStyle}/>
                </div>
                <div className='carouselItem'>
                    <img src={estimate} alt='' style={contentStyle}/>
                </div>
                <div className='carouselItem'>
                    <img src={estimate} alt='' style={contentStyle}/>
                </div>
            </Carousel>
        </div>
    )
};

export default Estimate;