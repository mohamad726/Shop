import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Layout from '../Layout';
import Category from '../Pages/Category';
import Product from '../Pages/Product';
import Login from '../Pages/Login';
import AboutUs from '../Pages/About-us';
import {
  ABOUT_US_PAGE_ROUTE,
  CART_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
} from '../Const/routes';

export const router = createBrowserRouter([
  {
    path: HOME_PAGE_ROUTE,
    element: <Layout />, //layout
    errorElement: <p>error</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ABOUT_US_PAGE_ROUTE,
        element: <AboutUs />,
      },
      {
        path: CART_PAGE_ROUTE,
        element: <Cart />,
      },
      {
        path: ':category',
        element: <Category />,
      },
      {
        path: ':category/:product',
        element: <Product />,
      },
    ],
  },
  {
    path: LOGIN_PAGE_ROUTE,
    element: <Login />,
  },
]);
