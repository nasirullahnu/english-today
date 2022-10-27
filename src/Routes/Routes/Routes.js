import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main/Main";
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
            }
        ]
    }
]);

