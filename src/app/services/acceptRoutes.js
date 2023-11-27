import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "../routes/routes";
import NotFound from "../components/extra/NotFound";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        {routes.public.map(({ path, element, name }) => (
          <Route exact path={path} element={element} key={name} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
