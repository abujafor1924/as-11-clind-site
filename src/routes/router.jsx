import { createBrowserRouter } from "react-router-dom";

import Main from "../lyout/Main";
import Home from "../components/Home/Home";
import Login from "../components/pages/Login";
import Registretion from "../components/pages/Registretion";
import Error from "../components/pages/Error";
import AllToys from "../components/pages/AllToys";
import MyToys from "../components/pages/MyToys";
import AddToys from "../components/pages/AddToys";
import Blog from "../components/pages/Blog";
import ProtectRout from "./ProtectRout.jsx";
import VewDetails from "../components/pages/VewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registretion",
        element: <Registretion></Registretion>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/add-toys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/blog",
        element: (
          <ProtectRout>
            <Blog></Blog>
          </ProtectRout>
        ),
      },
      {
        path: "/vew/:id",
        element: (
          <ProtectRout>
            <VewDetails></VewDetails>
          </ProtectRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/all-data/${params.id}`),
      },
    ],
  },
]);

export default router;
