import React from "react";
import Timeless from "assets/svg/Timeless";
import Location from "assets/svg/Location";
import Phone from "assets/svg/Phone";
import Message from "assets/svg/Message";
import {SOCIAL_ICONS} from "constants/session";
import "./style.scss";

const Footer = () => {

    return (
        <div className="footer">
            <div className="content">
                <div className="information">
                    <Timeless width={171} height={84} fill="#838383" />
                   <ul className="list">
                       <li className="listItem">
                           <Location fill="#838383" width={15} height={15} className="icon" />
                           <span className="text">255 Parkside Dr, San Fernando, CA 91340</span>
                       </li>
                       <li className="listItem">
                           <Phone fill="#838383" width={15} height={15} className="icon" />
                           <span className="text">(424) 384 4444</span>
                       </li>
                       <li className="listItem">
                           <Message fill="#838383" width={15} height={15} className="icon" />
                           <span className="text">info@timelessconstructiongroup.com</span>
                       </li>
                   </ul>
                </div>
                <div className='menuItems'>
                    <div className="menu">
                        <ul className="menuList">
                            <li className="text">HOME</li>
                            <li className="text">GALLERY</li>
                            <li className="text">ABOUT US</li>
                            <li className="text">CONTACT</li>
                        </ul>
                    </div>
                    <div className="services">
                        <p className="serviceName">SERVICES</p>
                        <ul className="list">
                            <li className="listItem">
                                <div className="circle" />
                                <span className="text">ROOFING</span>
                            </li>
                            <li className="listItem">
                                <div className="circle" />
                                <span className="text">PLUMBING</span>
                            </li>
                            <li className="listItem">
                                <div className="circle" />
                                <span className="text">BATHROOM REMODELING</span>
                            </li>
                            <li className="listItem">
                                <div className="circle" />
                                <span className="text">KITCHEN REMODELING</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="socialContent">
                    <div className='icons'>
                        {Object.keys(SOCIAL_ICONS).map(item => (
                            <a href="#" key={item}>{SOCIAL_ICONS[item]}</a>
                        ))}
                    </div>
                    <div className='license'>
                        <p className='text'>LICENSE #1034265</p>
                    </div>
                    <div className='bottom'>
                        <p className="text">Terms And Conditions</p>
                        <p className="text">Privacy Notice</p>
                    </div>
                </div>
            </div>
            <div className="bottomContent">
                <p className='text'>© TIMELESS CONSTRUCTION 2022</p>
            </div>
        </div>
    )
};

export default Footer;