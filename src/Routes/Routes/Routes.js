import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main/Main";
import AllCourse from "../../shared/AllCourse/AllCourse";
import CourseDetails from "../../shared/CourseDetails/CourseDetails";
import Courses from "../../shared/Courses/Courses";
import Home from "../../shared/Home/Home";
import Login from "../../shared/Login/Login";
import Register from "../../shared/Register/Register";


export const routes = createBrowserRouter([
    {
        path : '/' ,
        element :<Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            },
            {
                path : 'courses',
                element : <Courses></Courses>
            },
            {
                path: 'details/:id',
                element : <CourseDetails></CourseDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
            },
            {
                path : 'category/:id',
                element : <AllCourse></AllCourse>,
                loader : ({params}) => fetch(`http://localhost:5000/category/${params.id}`) 
            }
        ],
    }
]);

