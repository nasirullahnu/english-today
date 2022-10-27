import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCourse = ({ single }) => {
    console.log(single)
    const { _id, category_id ,title, total_video, students, rating, publish_date, price, mentor, img, duration, details } = single
    // console.log(single)
    return (
        <div>
            <div className='p-2 border border-rounded mb-3 '>
                <div className=''>
                    <img src={img} alt="" srcset="" />
                    <h3>{title}</h3>
                    <p>{details}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h3>Price {price} tk</h3>
                        <p>Total Video : {total_video}</p>
                        <p>Students : {students}</p>
                        <p>Duration : {duration} </p>
                        <p>Publish Date : {publish_date}</p>
                        <p>Popularity : {rating.number}</p>
                    </div>
                    <div>
                        <h4>Mentor : {mentor.name}</h4>
                        <p>Age : {mentor.age}</p>
                        <p>Qualification : {mentor.qualification}</p>
                        <div className='m-3'>
                            <Button className='btn btn-info'>
                                <Link to='/courses'>Back</Link>
                            </Button>
                            <Button className='btn btn-info'>
                                <Link to={`/checkout/${category_id}`}>Check Out</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;