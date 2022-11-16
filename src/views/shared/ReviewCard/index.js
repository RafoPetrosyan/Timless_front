import React from "react";
import UserAvatar from "views/shared/UserAvatar";
import "./style.scss";
import Quotes from "assets/svg/Quotes";

const ReviewCard = ({user, text, rate}) => {
    return (
        <div className="reviewCard">
            <div className='topContent'>
                <Quotes fill="#d5ad5d" width={15} height={15} />
                <UserAvatar size={85} user={user} />
            </div>
        </div>
    )
};

export default ReviewCard;