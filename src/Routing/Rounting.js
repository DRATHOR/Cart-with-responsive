import { Cart } from "../Pages/Cart";
import ConfigNewStore from "../Pages/ConfigNewStore";
import CreateNewStore from "../Pages/CreateNewStore";
import Home from "../Pages/Home";
import OrderTypeList from "../Pages/OrderTypeList";

export const allRoutes=[
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/Order',
        element:<OrderTypeList/>,
    },
    {
        path:'/config',
        element:<ConfigNewStore/>,
    },
    {
        path:'/create-new-store',
        element:<CreateNewStore/>,
    },
    {
        path:'/cart',
        element:<Cart/>,
    },
]