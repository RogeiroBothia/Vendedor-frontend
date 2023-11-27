import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResponsiveContainer } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from "@mui/material/Typography";
import * as authService from "../../auth/auth.service";
import { alert_error, alert_success } from "../../util/functions";
import { Spinner } from "react-bootstrap";


function CrearVendedor() {
  const { id } = useParams();

  const valores_iniciales = {
    id: "",
    nombre: "",
    edad: "",
    tipo: "",
    fecha: "",
  };

  const [vendedor, setVendedor] = useState(valores_iniciales);
  const [loading, setLoading] = useState(true);
  const [tipos, setTipos] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const response = await authService.updateVendedor(vendedor);
        if (parseInt(response.status) === 200) {
          alert_success("Exito!", "vendedor actualizado correctamente.");
          setTimeout(() => {
            navigate("/vendedores");
          }, 1500);
        } else {
          alert_error("Error!", "No se pudo actualizar el vendedor.");
        }
      } else {
        const response = await authService.addVendedor(vendedor);
        if (parseInt(response.status) === 201) {
          alert_success("Exito!", "vendedor agregado correctamente.");
          setTimeout(() => {
            navigate("/vendedores");
          }, 1500);
        } else {
          alert_error("Error!", "No se pudo agregar el vendedor.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const listTipos = () => {
    try {
      authService.getTipos().then((response) => {
        if (response !== null) {
          setTipos(response.datos);
        }
        alert_success("¡Exito!", response.message);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setVendedor({ ...vendedor, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      authService.getVendedor(id).then((response) => {
        if (response !== null) {
          setVendedor(response.datos);
        } else {
          alert_error(
            "Error!",
            "No se encontró ningun vendedor con esos datos."
          );
          setTimeout(() => {
            navigate(-1);
          }, 2000);
        }
      });
    }
    listTipos();
  }, []);

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <div className="container-fluid">
            <Typography component="h2" variant="h5" color="dark" gutterBottom>
              {id ? "Editar vendedor" : "Agregar vendedor"}
            </Typography>
            <hr />
            {
              (() => {
                if (!loading) {
                  return (
                    <div className="container-fluid">
                      <form className="form-control" onSubmit={handleSubmit}>
                        <div className="row row-sm-auto">
                          <div className="form-group py-2">
                            <label className="required">Nombre del vendedor</label>
                            <input
                              id="nombre"
                              type="text"
                              className="form-control"
                              placeholder="Nombre del vendedor"
                              name="nombre"
                              value={vendedor.nombre}
                              onChange={handleInputChange}
                              required
                              maxLength="100"
                            />
                          </div>
                          <div className="form-group py-2">
                            <label className="required">Edad del vendedor</label>
                            <input
                              id="edad"
                              type="number"
                              className="form-control"
                              placeholder="Edad del vendedor"
                              name="edad"
                              value={vendedor.edad}
                              onChange={handleInputChange}
                              required
                              min="18"
                            />
                          </div>
                          <div className="form-group py-2">
                            <label className="required">Tipo vendedor</label>
                            <select
                              id="tipo"
                              className="form-control"
                              placeholder="Tipo vendedor"
                              name="tipo"
                              value={vendedor.tipo}
                              onChange={handleInputChange}
                              required
                              defaultValue={-1}
                            >
                              <option value={-1}>Seleccione un tipo</option>
                              {
                                (() => {
                                  if (tipos.length > 0) {
                                    return (
                                      tipos.map((tipo) => (
                                        <option key={tipo.id} value={tipo.id}>{tipo.descripcion}</option>
                                      ))
                                    )
                                  }
                                })()
                              }
                            </select>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn btn-success btn-block my-2"
                            type="submit"
                          >
                            {id ? "Actualizar" : "Crear"}
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary btn-block my-2 mx-2"
                            onClick={() => navigate(-1)}
                          >
                            Regresar
                          </button>
                        </div>
                      </form>
                    </div>
                  );
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
              })()
            }
          </div>
        </div>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default CrearVendedor;
