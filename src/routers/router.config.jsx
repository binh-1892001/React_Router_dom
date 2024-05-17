import IndexAbout from "../pages/IndexAbout";
import IndexContact from "../pages/IndexContact";
import IndexHome from "../pages/IndexHome";
import IndexProduct from "../pages/IndexProduct";
import OutletHome from "../pages/OutletHome";
import PrivateRoutes from "./PrivateRoutes";
import ProductDetail from "../pages/ProductDetail";
import React from "react";

const LazyAbout = React.lazy(() => import("../pages/IndexAbout"));

const routersConfig = [
  {
    path: "/",
    element: <IndexHome />,
    children: [
      {
        path: "",
        element: <OutletHome />,
      },
      {
        path: "/about",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyAbout />
          </React.Suspense>
        ),
      },
      {
        path: "/contact",
        element: <IndexContact />,
      },
      {
        path: "/products",
        element: <IndexProduct />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <PrivateRoutes />,
  },
];

export default routersConfig;
