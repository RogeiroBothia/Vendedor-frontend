import { API_VENDEDORES } from "../apis/constantes";

//Para el vendedor
export const VENDEDORES = {
  OBTENER: API_VENDEDORES + "/vendedores/",
  OBTENER_TODOS: API_VENDEDORES + "/vendedores",
  AGREGAR: API_VENDEDORES + "/vendedores",
  ACTUALIZAR: API_VENDEDORES + "/vendedores",
  ELIMINAR: API_VENDEDORES + "/vendedores/",
};

// Para los tipos
export const TIPOS = {
  OBTENER_TODOS: API_VENDEDORES +"/tipos"
}
