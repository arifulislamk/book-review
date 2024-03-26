import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import ListedBook from './component/ListedBook/ListedBook';
import PageToRead from './component/PageToRead/PageToRead';
import BookDetails from './component/BookDetails/BookDetails';
import ReadBooks from './component/ReadBooks/ReadBooks';
import WishList from './component/WishList/WishList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedBooks",
        element: <ListedBook></ListedBook>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('../bookinfo.json')
          },
          {
            path: "wishlist",
            element: <WishList></WishList>
          }
        ]
      },
      {
        path: "/pagesToRead",
        element: <PageToRead></PageToRead>
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../bookinfo.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
