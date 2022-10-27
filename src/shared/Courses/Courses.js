import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseCards from '../CourseCards/CourseCards';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {

    const [courses, setCourses] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block'>
                    <h2>Total Courses {courses.length}</h2>
                        {
                            courses.map(course => <CourseCards 
                                key={course.id}
                                course={course}
                                ></CourseCards>)
                        }
                    </Col>
                    <Col lg="8">
                        <CourseDetails></CourseDetails>
                    </Col>
                </Row>
            </Container>
    );
};

export default Courses;