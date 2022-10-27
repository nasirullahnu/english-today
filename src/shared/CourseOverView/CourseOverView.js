import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseOverView = ({ overview }) => {
    const { _id, category_id, title, img } = overview
    console.log(overview)
    return (
        <div className='mb-5'>
            <img src={img} alt="" srcset="" />
            <div className='d-flex justify-content-evenly mt-2'>
                <h4>{title}</h4>
                <Button>
                    <Link className='text-white' to={`/category/${category_id}`}>Details</Link>
                </Button>
            </div>
        </div>
    );
};

export default CourseOverView;