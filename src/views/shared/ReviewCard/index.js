import React from "react";
import {Rate} from "antd";
import UserAvatar from "views/shared/UserAvatar";
import Quotes from "assets/svg/Quotes";
import Star from "assets/svg/Star";
import Stars from "assets/svg/Star.svg"
import "./style.scss";

const ReviewCard = ({text, user, rate, date}) => {
    return (
        <div className="reviewCard">
            <div className='content'>
                <div className='topContent'>
                    <span><Quotes fill="#d5ad5d" width={25} height={25} /></span>
                    <div className='avatar'>
                        <UserAvatar size={85} user={user} />
                    </div>
                    <div className='nameDiv'>
                        <p className='name'>{`${user?.firstName} ${user.lastName}`}</p>
                        <p className='date'>{date}</p>
                    </div>
                </div>
                <div className='textContent'>
                    <p className="text">{text}</p>
                </div>
                <div className='readMoreDiv'>
                    <a role="button" className='readMore'>
                        Read more
                    </a>
                </div>
                <div className='rateContent'>
                    <Rate allowHalf defaultValue={2.5} style={{ color: '#d5ad5d' }} disabled />
                    {/*<Rate*/}
                    {/*    // allowHalf*/}
                    {/*    allowHalf*/}
                    {/*    defaultValue={2}*/}
                    {/*    style={{ color: '#d5ad5d' }}*/}
                    {/*    // character={<Star fill='#d5ad5d' width={12} height={12} />}*/}
                    {/* />*/}
                </div>
            </div>
        </div>
    )
};

export default ReviewCard;
// character={<Star fill='#d5ad5d' width={12} height={12} />}
