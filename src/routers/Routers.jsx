import { Route, Routes } from "react-router-dom";

import routersConfig from "./router.config";

function Routers() {
  function renderRoutes(router) {
    /**
     * <Routes>
     *  <Route path="" element="">
     *    <Route path="" element=""></Route>
     *    <Route path="/about" element=""></Route>
     *    <Route path="/contact" element=""></Route>
     *  </Route>
     * </Routes>
     *
     */
    return router.map((route, index) => (
      <Route key={index} path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  }

  return <Routes>{renderRoutes(routersConfig)}</Routes>;
}

export default Routers;
