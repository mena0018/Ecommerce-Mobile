import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-native';
import CartView from './routes/CartView';
import ArticleView from './routes/ArticleView';
import Root from './routes/Root';

const router = createMemoryRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <ArticleView />,
      },
      {
        path: '/cart',
        element: <CartView />,
      },
    ],
  },
]);

export default function Provider() {
  return <RouterProvider router={router} />;
}
