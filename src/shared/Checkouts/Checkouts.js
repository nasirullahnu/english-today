import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Checkouts.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFileDownload } from 'react-icons/fa';

const Checkouts = () => {
    const checkoutData = useLoaderData()
    const { img, title, mentor, price } = checkoutData
    console.log(checkoutData);

    return (
        <div>
            <Card className='w-50 mx-auto'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>With {mentor.name}</p>
                        <h4>Price : {price}</h4>
                    </Card.Text>
                    <Button variant="primary">Enroll</Button>
                    <FaFileDownload></FaFileDownload>
                </Card.Body>
            </Card>
            {/* <h2>Enrol Our Course</h2>
            <div className='checkoutBox'>
                <img src={img} alt="" srcset="" />
                <h4>{title}</h4>
                <p>Mentor : {mentor.name}</p>
                <h4>Price : {price}</h4>
            </div> */}
        </div>
    );
};

export default Checkouts;