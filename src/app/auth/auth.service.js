import { VENDEDORES, TIPOS } from "../endpoints/endpoint.js";

/*------------------------------Vendedores------------------------------*/

export const addVendedor = async (vendedor) => {
  return await fetch(VENDEDORES.AGREGAR, {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      nombre: String(vendedor.nombre).trim(),
      edad: parseInt(vendedor.edad),
      tipo: parseInt(vendedor.tipo),
    }),
  });
};

export const updateVendedor = async (vendedor) => {
  return await fetch(VENDEDORES.ACTUALIZAR, {
    method: "PUT",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      id: parseInt(vendedor.id),
      nombre: String(vendedor.nombre).trim(),
      tipo: parseInt(vendedor.tipo),
      edad: parseInt(vendedor.edad),
    }),
  });
};

export const deleteVendedor = async (vendedor) => {
  return await fetch(VENDEDORES.ELIMINAR + vendedor.id, {
    method: "DELETE",
  });
};

export const getVendedores = async () => {
  return await (
    await fetch(VENDEDORES.OBTENER_TODOS, {
      method: "GET",
    })
  ).json();
};

export const getVendedor = async (id) => {
  return await (
    await fetch(VENDEDORES.OBTENER + id, {
      method: "GET",
    })
  ).json();
};

/* ------------------------------- Tipos -------------------------------- */
export const getTipos = async () => {
  return await (
    await fetch(TIPOS.OBTENER_TODOS, {
      method: "GET",
    })
  ).json();
};

/*--------------------------------END------------------------------------*/
