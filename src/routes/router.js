import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import AllBuyers from "../Pages/Dashboard/AdminDashboard/AllBuyers";
import AllSeller from "../Pages/Dashboard/AdminDashboard/AllSeller";
import ReportedItem from "../Pages/Dashboard/AdminDashboard/ReportedItem";
import MyOrders from "../Pages/Dashboard/BuyerDashboard/MyOrders";
import Payment from "../Pages/Dashboard/BuyerDashboard/Payment";
import AddProducts from "../Pages/Dashboard/SellerDashboard/AddProducts";
import MyProduct from "../Pages/Dashboard/SellerDashboard/MyProduct";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`https://resale-market-server-seven.vercel.app/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myOrder',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://resale-market-server-seven.vercel.app/booking/${params.id}`)
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/reportedItem',
                element: <AdminRoute><ReportedItem></ReportedItem></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
        ]
    }
])