import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseCards from '../CourseCards/CourseCards';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {

    const [courses, setCourses] = useState([])


    useEffect(()=>{
        fetch('https://english-today-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block'>
                    <h2>See Courses Details</h2>
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