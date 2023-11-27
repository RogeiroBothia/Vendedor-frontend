import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ResponsiveContainer } from "recharts";
import Typography from "@mui/material/Typography";
import { Spinner } from "react-bootstrap";
import TableDesign from "../extra/Table";
import NoVendedor from "./NoVendedor";
import * as authService from "../../auth/auth.service";
import { alert_success } from "../../util/functions";

const ListaVendedores = () => {
  const [vendedores, setVendedores] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const listSellers = () => {
    try {
      authService.getVendedores().then((response) => {
        console.log(response);
        if (response !== null) {
          setVendedores(response.datos);
        }
        alert_success("¡Exito!", response.message);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [busqueda, setBusqueda] = useState("");

  const handleBuscar = (data) => {
    if (busqueda === "") {
      return vendedores;
    } else {
      return data.filter((item) =>
        item.nombre.toString().toUpperCase().includes(busqueda.toUpperCase())
      );
    }
  };

  useEffect(() => {
    listSellers();
  }, []);

  //Columnas que no desea mostrar en la tabla
  const columnsIgnore = ["id", "tipo", "tipoVendedor", "fecha"];

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <Typography component="h2" variant="h5" color="dark" gutterBottom>
            Vendedores Creados
          </Typography>
          {(() => {
            if (!loading) {
              if (vendedores.length === 0) {
                return <NoVendedor />;
              } else {
                return (
                  <div>
                    <nav className="navbar navbar-light bg-light rounded">
                      <div className="container-fluid">
                        <button
                          type="button"
                          onClick={() => {
                            navigate("/vendedores/crear");
                          }}
                          className="btn btn-success m-2"
                        >
                          Agregar Vendedor
                        </button>
                        <div className="d-flex">
                          <input
                            onChange={(e) => {
                              setBusqueda(e.target.value);
                            }}
                            title="Nombre Vendedor"
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar Vendedor Nombre"
                            aria-label="Buscar"
                          />
                        </div>
                      </div>
                    </nav>
                    <hr />
                    <div className="container-fluid">
                      <TableDesign
                        columnCount={true}
                        datos={handleBuscar(vendedores)}
                        columnsIgnore={columnsIgnore}
                        columnOption={true}
                      />
                    </div>
                  </div>
                );
              }
            } else {
              return (
                <div className="d-flex justify-content-center">
                  <Spinner
                    animation="border"
                    variant="primary"
                    size=""
                    role="status"
                    style={{ marginTop: "25%", marginBottom: "25%" }}
                  />
                </div>
              );
            }
          })()}
        </div>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default ListaVendedores;
