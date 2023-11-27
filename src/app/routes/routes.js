import Dashboard from "../components/home/Dashboard";

import ListaVendedores from "../components/vendedores/SellersList";
import CrearVendedor from "../components/vendedores/CrearVendedor";

const routes = {
  public: [
    {
      path: "/vendedores",
      name: "vendedores",
      element: <Dashboard contenedor={<ListaVendedores />} />,
    },
    {
      path: "/vendedores/editar/:id",
      name: "editar",
      element: <Dashboard contenedor={<CrearVendedor />} />,
    },
    {
      path: "/vendedores/crear",
      name: "crear",
      element: <Dashboard contenedor={<CrearVendedor />} />,
    }
  ],
};

export default routes;
