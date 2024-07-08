import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage.jsx";
import CreateAccount from "../pages/createAccount/CreateAccount.jsx";
import LoginOwnerUser from "../pages/LoginOwnerUser/LoginOwnerUser.jsx";
import CreateOwnerUser from "../pages/createOwnerUser/CreateOwnerUser.jsx";
import { action as signupAction} from "../pages/createOwnerUser/components/CreateOwnerUserBody.jsx";
import Shop from "../pages/shop/Shop.jsx";
import {action as loginAction} from '../pages/LoginOwnerUser/components/LoginBody.jsx'
import CreateShop, {action as createShopAction} from "../pages/home/components/createShop/CreateShop.jsx";

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    {
        path: '/createAccount',
        element: <CreateAccount />
    },
    {
        path: '/CreateOwnerUser',
        element: <CreateOwnerUser />, action : signupAction,
    },
    {
        path: '/Login', 
        element: <LoginOwnerUser />, action: loginAction
    },
    {
        path: '/createShop',
        element: <CreateShop/>,
        action: createShopAction
    },
    {
        path: '/shop',
        element: <Shop />
    }
])

export default router;
