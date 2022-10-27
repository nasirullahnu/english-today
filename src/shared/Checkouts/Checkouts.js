import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkouts = () => {
    const checkoutData = useLoaderData()
    console.log(checkoutData);

    return (
        <div>
            <h2>this is checkout page</h2>
            <h4>{checkoutData.title}</h4>
        </div>
    );
};

export default Checkouts;