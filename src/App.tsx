import "./scss/app.scss";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import MainLayout from "./layouts/MainLayout";
import React from "react";

const Cart = React.lazy(
  () => import(/*webpackChunkName: "Cart" */ "./pages/Cart")
);

const FullPizza = React.lazy(
  () => import(/*webpackChunkName: "FullPizza" */ "./pages/FullPizza")
);
const NotFound = React.lazy(
  () => import(/*webpackChunkName: "NotFound" */ "./pages/NotFound")
);

function App() {
  return (
    <Routes>
      <React.Suspense>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="pizza/:id" element={<FullPizza />} />
        </Route>
      </React.Suspense>
    </Routes>
  );
}

export default App;
