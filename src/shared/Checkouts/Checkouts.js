import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkouts = () => {
    const checkoutData = useLoaderData()
    const {img, title, mentor, price} = checkoutData
    console.log(checkoutData);

    return (
        <div>
            <h2>Enrol Our Course</h2>
            <img src={img} alt="" srcset="" />
            <h4>{title}</h4>
            <p>Mentor : {mentor.name}</p>
            <h4>Price : {price}</h4>
        </div>
    );
};

export default Checkouts;