import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main/Main";
import About from "../../shared/About/About";
import AllCourse from "../../shared/AllCourse/AllCourse";
import Blog from "../../shared/Blog/Blog";
import Checkouts from "../../shared/Checkouts/Checkouts";
import CourseDetails from "../../shared/CourseDetails/CourseDetails";
import Courses from "../../shared/Courses/Courses";
import Faq from "../../shared/Faq/Faq";
import Home from "../../shared/Home/Home";
import Login from "../../shared/Login/Login";
import Register from "../../shared/Register/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";


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
                path : 'blog',
                element : <Blog></Blog>
            },
            {
                path : 'faq',
                element : <Faq></Faq> ,
            },
            {
                path : 'about',
                element : <About></About>
            },
            {
                path: 'details/:id',
                element : <CourseDetails></CourseDetails>,
                loader : ({params}) => fetch(`https://english-today-server.vercel.app/courses/${params.id}`),
            },
            {
                path : 'category/:id',
                element : <AllCourse></AllCourse>,
                loader : ({params}) => fetch(`https://english-today-server.vercel.app/category/${params.id}`) 
            },
            {
                path : 'checkout/:id',
                element : <PrivateRoute><Checkouts></Checkouts></PrivateRoute>,
                loader : ({params}) => fetch(`https://english-today-server.vercel.app/checkouts/${params.id}`)
                
            }
        ],
    },
    {
        path : '*',
        element : <div><h1 className="text-danger">There is nothing your are searching for, please try again</h1></div> ,
    }
]);

