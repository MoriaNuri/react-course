import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Child from './components/Child';
import Cart from './components/Cart';
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "about",
        element: <About/>,
        children:[
          {
            path: "child",
            element:<Child/>,
          },
          {
            path: "child2",
            element:<Child/>,
          }
        ]
      },
      {
        path:"about/:id",
        element:<div>about id</div>,
      },
      {
        path: "home",
        element: <div>Home</div>,
      },
      {
        path: "cart",
        element: <Cart/>,
      },
    ]
    
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
