import { createBrowserRouter } from "react-router-dom";
import LoadProducts from "../../Components/LoadProducts";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Addproduct from "../../Pages/Addproduct/Addproduct";
import Allbuyer from "../../Pages/Allbuyer/Allbuyer";
import Allseller from "../../Pages/Allseller/Allseller";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportPage from "../../Pages/Dashboard/ReportPage/ReportPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <LoadProducts></LoadProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_API_URL}/products/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myorder",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/addproduct",
        element: <Addproduct></Addproduct>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <Allbuyer></Allbuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <Allseller></Allseller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reporteditems",
        element: (
          <AdminRoute>
            <ReportPage></ReportPage>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
