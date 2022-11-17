import React from "react";
import {v4 as uniqueId} from "uuid";

import useContainer from "./hook";
import "./style.scss";

const Introduction = () => {
    const { typesIcons } = useContainer();

    return (
        <div className="introduction">
            <div className='typesDiv'>
                {typesIcons.map((item, index )=> (
                    <div key={uniqueId()} className='typesItem'>
                        {item.icon}
                        <p className='name'>{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="contentBackRound">
                <div className='titleDiv'>
                    <h3 className='title'>INTRODUCTION</h3>
                </div>
                {/*<div className='content'>*/}
                {/*    <p className='text'>*/}
                {/*        Timeless Construction has been a family-owned and operated*/}
                {/*        business since 1998. From our humble beginnings to the established*/}
                {/*        company we take pride in today, we are recognized as a dedicated*/}
                {/*        construction group providing services for residential, commercial,*/}
                {/*        and industrial properties. Due to a quality conscious approach, we have*/}
                {/*        built solid relationships with our clients throughout the years. We pride*/}
                {/*        ourselves on delivering quality results with affordable pricing. Whether*/}
                {/*        fixing a small leak on your roof or building homes from the ground up, our*/}
                {/*        experienced team members will provide the best quality service, delivering*/}
                {/*        a stress-free experience.*/}
                {/*        When the project is completed, our customers feel at ease.*/}
                {/*    </p>*/}
                {/*    <p className='text'>*/}
                {/*        Our plumbing solutions include sewer line*/}
                {/*        repair and repiping services. In addition to roofing and plumbing, our company*/}
                {/*        also provides bathroom remodeling and kitchen remodeling services. To provide these services,*/}
                {/*        each of our team members spend time doing thorough research to identify the problem in the house,*/}
                {/*        find its source and then come up with a solution. We also let our customers know about the steps we*/}
                {/*        will take when solving the problem and let them know that we will always be there to answer questions*/}
                {/*        and address further issues.*/}
                {/*    </p>*/}
                {/*    <div className="offerDiv">*/}
                {/*        <p className="title">As a licensed bonded and insured company, we offer:</p>*/}
                {/*        <div className="offers">*/}
                {/*            <ul className="offersUl">*/}
                {/*                <li className='item'>*/}
                {/*                    <i className="icon"></i>*/}
                {/*                    <span>Free inspection and estimate</span>*/}
                {/*                </li>*/}
                {/*                <li className='item'>*/}
                {/*                    <i className="icon"></i>*/}
                {/*                    <span>Experienced team of professionals</span>*/}
                {/*                </li>*/}
                {/*                <li className='item'>*/}
                {/*                    <i className="icon"></i>*/}
                {/*                    <span>Twenty-four years of experience</span>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*            <ul className="offersUl">*/}
                {/*                <li className='item'>*/}
                {/*                    <i className="icon"></i>*/}
                {/*                    <span>Affordable prices</span>*/}
                {/*                </li>*/}
                {/*                <li className='item'>*/}
                {/*                    <i className="icon"></i>*/}
                {/*                    <span>Financing options that meet your needs</span>*/}
                {/*                </li>*/}
                {/*                <li className='item'>*/}
                {/*                    <i className="icon"></i>*/}
                {/*                    <span>Customized solutions</span>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
};

export default Introduction;