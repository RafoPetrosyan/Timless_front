import React from "react";
import {v4 as uniqueId} from "uuid";

import ReviewCard from "views/shared/ReviewCard";
import "./style.scss";

const Reviews = () => {

    const reviews = [
        {
            id: uniqueId(),
            user: {
                firstName: 'Hope',
                lastName: 'Mendoza',
                image: 'https://media.istockphoto.com/id/1356785346/photo/woman-in-coat-messaging-on-smartphone-standing-outside-in-the-city.jpg?b=1&s=170667a&w=0&k=20&c=rpODgUSWgp3YP2HmDbGf_BWprRjSUJVNtsZ-SzkvC24=',
            },
            text: 'My roof was leaking, and it was important for me to find any roofing company with a good…',
            rate: 5,
            date: '5 months ago',
        },
        {
            id: uniqueId(),
            user: {
                firstName: 'Hope',
                lastName: 'Mendoza',
            },
            text: 'My roof was leaking, and it was important for me to find any roofing company with a good…',
            rate: 5,
            date: '5 months ago',
        },
        {
            id: uniqueId(),
            user: {
                firstName: 'Hope',
                lastName: 'Mendoza',
            },
            text: 'My roof was leaking, and it was important for me to find any roofing company with a good…',
            rate: 5,
            date: '5 months ago',
        },
        {
            id: uniqueId(),
            user: {
                firstName: 'Hope',
                lastName: 'Mendoza',
                image: 'https://media.istockphoto.com/id/1356785346/photo/woman-in-coat-messaging-on-smartphone-standing-outside-in-the-city.jpg?b=1&s=170667a&w=0&k=20&c=rpODgUSWgp3YP2HmDbGf_BWprRjSUJVNtsZ-SzkvC24=',
            },
            text: 'My roof was leaking, and it was important for me to find any roofing company with a good…',
            rate: 5,
            date: '5 months ago',
        },
    ];

    return (
        <div className='reviews'>
            <div className="reviewsContent">
                {reviews && reviews.map(item => <ReviewCard key={item.id} {...item} />)}
            </div>
        </div>
    )
};

export default Reviews;