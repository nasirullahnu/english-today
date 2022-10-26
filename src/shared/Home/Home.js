import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import course1 from '../../assets/courses/course1.jpg'
import course2 from '../../assets/courses/course2.jpg'
import course3 from '../../assets/courses/course3.jpg'
import course4 from '../../assets/courses/course4.jpg'
import course5 from '../../assets/courses/course5.jpg'
import course6 from '../../assets/courses/course6.jpg'

const Home = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={course1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={course2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={course3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={course4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={course5}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={course6}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;