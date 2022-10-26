import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Home from "../../shared/Home/Home";


export const routes = createBrowserRouter([
    {
        path : '/' ,
        element :<Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    }
]);

