import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import userContext from "../utils/userContext";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt
const Glocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  // authentication
  useEffect(() => {
    // make an Api call and send username and password
    const data = {
      name: "Chukwutem Emi",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{loggedInUser:userName, setUserName}}>
      <div className="app">
        <Header />
        {/**if path === / */}
        {/* <Body /> */}
        {/**if path === /about */}
        {/* <About /> */}
        {/**if path === /contact */}
        {/* <Contact /> */}
        {/* now whenever a path is entered, the path will be filled inside the Outlet*/}
        <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children: [
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/grocery",
        element: (
          <Suspense fallback={<h1>Loadind....</h1>}>
            <Glocery />
          </Suspense>
        )
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantsMenu />,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
    ],
    errorElement:<Error />
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
