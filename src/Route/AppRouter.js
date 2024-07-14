import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Screens/Product/Home";
import Navbar from "../Components/Navbar/NavBar";
import NotFound from "../Screens/NotFound";
import AddProduct from "../Screens/AddProduct/AddProduct";
import Cart from "../Screens/Cart/Cart";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/AddProduct",
          element: <AddProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    // <div className="App">
    <RouterProvider router={router} />
    // </div>
  );
};

export default AppRouter;
