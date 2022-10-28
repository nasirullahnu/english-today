import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCards.css'

const CourseCards = ({course}) => {
    const {id, name, } = course
    return (
        <div className='titles'>
            <p><Link to={`/category/${id}`}>{name}</Link> </p>
        </div>
    );
};

export default CourseCards;