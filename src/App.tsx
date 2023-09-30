import React from "react";
import "./scss/app.scss";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

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
    <React.Suspense>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="pizza/:id" element={<FullPizza />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
