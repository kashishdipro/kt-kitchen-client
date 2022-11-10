import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";

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
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
]);

export default routes;