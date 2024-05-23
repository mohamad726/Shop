import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Layout from '../Layout';
import Category from '../Pages/Category';
import Product from '../Pages/Product';
import Login from '../Pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, //layout
    errorElement: <p>error</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'cart',
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
    path: 'login',
    element: <Login />,
  },
]);
