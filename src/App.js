import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store/Store";
import MainLayout from "views/layouts/MainLayout";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Home from "views/pages/Home/Home";

var innerRoutes = <Route></Route>;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" caseSensitive={false} element={<MainLayout />}>
      <Route exact path="" caseSensitive={false} element={<Home />}></Route>
      <Route
        path="*"
        element={
          <Fragment>
            <section>No Match</section>
          </Fragment>
        }></Route>
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
