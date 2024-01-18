import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Root from './routes/Root';
import Products from './components/Products';
import Dog from './components/Dog';
import Dogs from './components/Dogs';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <h1>Not found</h1>,
    children:[
      {
        path:'home',
        element:<h1>home</h1>,
      },
      {
        path:'products',
        element:<Products/>,
      },
      {
        path:'dogs',
        element:<Dogs/>,
        
      },
      {
        path:'dogs/:name',
        element:<Dog/>,
      }
    ]
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
