import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Category from "../pages/home/category/category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/news/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/login/login/Login";
import Register from "../pages/login/register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path: '/',
                element:<Navigate to={'/categories/0'}></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path: 'categories',
        element: <Main></Main>,
        children: [
            {
                path:':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router