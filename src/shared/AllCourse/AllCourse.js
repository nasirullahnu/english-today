import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SingleCourse from '../SingleCourse/SingleCourse';
import './AllCourse.css'

const AllCourse = () => {
    const categoryCourse = useLoaderData();
    // console.log(categoryCourse);
    const {loading} = useContext(AuthContext)

    if(loading) {
        return <h1 className='text-xl'>Loading</h1>
    }



    return (
        <div>
            <h4>Our Special English Courses</h4>
            <div className='cards'>
                {
                    categoryCourse.map(single => <SingleCourse
                        key={single.id}
                        single={single}
                    ></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default AllCourse;