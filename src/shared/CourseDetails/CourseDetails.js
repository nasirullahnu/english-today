import React, { useState } from 'react';
import { useEffect } from 'react';
import CourseOverView from '../CourseOverView/CourseOverView';

const CourseDetails = ({course}) => {
    const [allCourses, setAllCourses] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/all')
        .then(res => res.json())
        .then(data => setAllCourses(data))
    },[])

   console.log(course)
    return (
        <div>
            <h4>Our Courses</h4>
            {
                allCourses.map(overview => <CourseOverView 
                key={overview.id}
                overview={overview}
                ></CourseOverView>)
            }
        </div>
    );
};

export default CourseDetails;