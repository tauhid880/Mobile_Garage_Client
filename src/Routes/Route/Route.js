import { createBrowserRouter } from "react-router-dom";
import LoadProducts from "../../Components/LoadProducts";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Addproduct from "../../Pages/Addproduct/Addproduct";
import Allbuyer from "../../Pages/Allbuyer/Allbuyer";
import Allseller from "../../Pages/Allseller/Allseller";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportPage from "../../Pages/Dashboard/ReportPage/ReportPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "/dashboard",
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
        element: <Allbuyer></Allbuyer>,
      },
      {
        path: "/dashboard/allsellers",
        element: <Allseller></Allseller>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <Allbuyer></Allbuyer>,
      },
      {
        path: "/dashboard/reporteditems",
        element: <ReportPage></ReportPage>,
      },
    ],
  },
]);
export default router;
