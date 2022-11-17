import React from "react";
import {v4 as uniqueId} from "uuid";
import Star from "assets/svg/Star";
import "./style.scss";

const RateStar = ({rate, size, activeColor, defaultColor}) => {
    const activeCount = Math.floor(rate);
    const restCount = 5 - activeCount;
    return (
        <div className='stars'>
            {new Array(activeCount).fill('').map(() => <span className="icon" key={uniqueId()}><Star fill={activeColor} width={size} height={size}/></span>)}
            {new Array(restCount).fill('').map(() => <span className="icon" key={uniqueId()}><Star fill={defaultColor} width={size} height={size}/></span>)}
        </div>
    )
};

export default RateStar;