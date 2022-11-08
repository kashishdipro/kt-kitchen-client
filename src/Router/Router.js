const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    }
]);

export default routes;