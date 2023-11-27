import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoProducto() {
  const navigate = useNavigate();
  return (
    <div className={'d-flex flex-column justify-content-center align-items-center py-5'}>
      <img className={'mb-5 mt-5'} src={process.env.PUBLIC_URL + '/images/vendedores.png'} alt="No Car" height="100px" />
      <h2 className={'mb-5 text-center'}>No tienes ningun Vendedor registrado!</h2>
      <button type="button" className="btn btn-success " onClick={() => { navigate('/vendedores/crear') }}>Agregar</button>
    </div>
  );
};