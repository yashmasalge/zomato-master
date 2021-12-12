import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import CheckoutLayout from "../layouts/Checkout.layout";

function CheckoutLayoutHoc({ component: Component, ...rest }) {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          element = {
              <CheckoutLayout>
                  <Component />
              </CheckoutLayout>
          }
        />
      </Routes>
    </>
  );
}

export default CheckoutLayoutHoc;
