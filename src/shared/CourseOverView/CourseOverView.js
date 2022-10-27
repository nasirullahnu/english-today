import React from 'react';
import { Button } from 'react-bootstrap';

const CourseOverView = ({ overview }) => {
    const { _id, category_id, title, img } = overview
    console.log(overview)
    return (
        <div className='mb-5'>
            <img src={img} alt="" srcset="" />
            <div className='d-flex justify-content-evenly mt-2'>
                <h4>{title}</h4>
                <Button>Details</Button>
            </div>
        </div>
    );
};

export default CourseOverView;