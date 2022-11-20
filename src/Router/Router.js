import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";
import MyReview from "../Pages/MyReview/MyReview";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import EditReview from "../Pages/MyReview/EditReview";
import AddItem from "../Pages/AddItem/AddItem";
import Blog from "../Pages/Blog/Blog";
import Policy from "../Shared/Policy";
import Terms from "../Shared/Terms";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/items',
                element: <AllFoodItems/>
            },
            {
                path:'/item/:id',
                loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`),
                element: <ItemDetails/>
            },
            {
                path: '/myreview',
                // element: <MyReview/>
                element: <ProtectedRoutes><MyReview/></ProtectedRoutes>
            },
            {
                path: '/editreview/:id',
                loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`),
                element: <EditReview/>
            },
            {
                path: '/additem',
                // element: <AddItem/>
                element: <ProtectedRoutes><AddItem/></ProtectedRoutes>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path:'/policy',
                element: <Policy/>
            },
            {
                path:'/terms',
                element: <Terms/>
            }
        ]
    }
]);

export default routes;