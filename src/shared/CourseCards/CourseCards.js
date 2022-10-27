import React from 'react';
import { Link } from 'react-router-dom';

const CourseCards = ({course}) => {
    const {id, name, } = course
    return (
        <div>
            <p><Link to={`/category/${id}`}>{name}</Link> </p>
        </div>
    );
};

export default CourseCards;