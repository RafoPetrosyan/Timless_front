import React from "react";
import {Carousel} from "antd";
import roofing from 'assets/images/roofing.jpg';
import kitchen from 'assets/images/kitchen.jpg';
import plumging from 'assets/images/plumging.jpg';
import bathroom from 'assets/images/bathroom.png';

import useContainer from "./hook";
import Roofing from "assets/svg/Roofing";
import Plumbing from "assets/svg/Plumbing";
import BathRoom from "assets/svg/BathRoom";
import Kitchen from "assets/svg/Kitchen";
import 'antd/dist/antd.min.css';
import "./style.scss";

const Types = () => {
    const { socialIcons } = useContainer();

    return (
        <div className="types">
            {/*<Carousel className='carousel'>*/}
            <Carousel autoplay autoPlaySpeed={1000} infinite className='carousel'>
                <div className='carouselItem'>
                    <div className="informationDiv">
                        <div className="iconDiv">
                            <Roofing width={120} height={120} fill="#AF7822" className='icon' />
                            <h3 className="title">Roofing</h3>
                        </div>
                        <p className='text'>
                            We’ll be happy to help with all your bathroom remodeling needs.
                            From changing the faucets t converting your bathroom into an in-home spa. Contact us for detailed approach and free project plan.
                        </p>
                        <button className='button'>
                            VIEW MORE
                        </button>
                    </div>
                    <img src={roofing} alt='' />
                </div>
                <div className='carouselItem'>
                    <div className="informationDiv">
                        <div className="iconDiv">
                            <Plumbing width={120} height={120} fill="#AF7822" className='icon' />
                            <h3 className="title">Plumbing</h3>
                        </div>
                        <p className='text'>
                            We’ll be happy to help with all your bathroom remodeling needs.
                            From changing the faucets t converting your bathroom into an in-home spa. Contact us for detailed approach and free project plan.
                        </p>
                        <button className='button'>
                            VIEW MORE
                        </button>
                    </div>
                     <img src={plumging} alt=''/>
                </div>
                <div className='carouselItem'>
                    <div className="informationDiv">
                        <div className="iconDiv">
                            <BathRoom width={120} height={120} fill="#AF7822" className='icon' />
                            <h3 className="title">BathRoom</h3>
                        </div>
                        <p className='text'>
                            We’ll be happy to help with all your bathroom remodeling needs.
                            From changing the faucets t converting your bathroom into an in-home spa. Contact us for detailed approach and free project plan.
                        </p>
                        <button className='button'>
                            VIEW MORE
                        </button>
                    </div>
                    <img src={bathroom} alt=''/>
                </div>
                <div className='carouselItem'>
                    <div className="informationDiv">
                        <div className="iconDiv">
                            <Kitchen width={120} height={120} fill="#AF7822" className='icon' />
                            <h3 className="title">Kitchen</h3>
                        </div>
                        <p className='text'>
                            We’ll be happy to help with all your bathroom remodeling needs.
                            From changing the faucets t converting your bathroom into an in-home spa. Contact us for detailed approach and free project plan.
                        </p>
                        <button className='button'>
                            VIEW MORE
                        </button>
                    </div>
                    <img src={kitchen} alt=''/>
                </div>
            </Carousel>
            <div className='line'/>
        </div>
    )
};

export default Types;