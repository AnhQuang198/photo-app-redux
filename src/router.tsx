import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./features/Cart/Cart";
import Photo from "./features/Photo/Photo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/photo",
                element: <Photo />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ]
    }
]);

export default router;