import React from 'react';

const CourseCards = ({course}) => {
    const {id, title, img, } = course
    return (
        <div>
            <p>{title}</p>
            <img src={img} alt="" srcset="" />
        </div>
    );
};

export default CourseCards;