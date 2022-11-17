import React from "react";
import UserAvatar from "views/shared/UserAvatar";
import Quotes from "assets/svg/Quotes";
import RateStar from "views/shared/RateStar";
import Google from "assets/svg/Google";
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
                    <RateStar rate={rate} size={21} activeColor='#d5ad5d' defaultColor='#d9d9d9' />
                    <Google width={29} height={29} fill="#d9d9d9" />
                </div>
            </div>
        </div>
    )
};

export default ReviewCard;
