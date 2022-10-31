import React from 'react';
import Swal from 'sweetalert2';

const Form = ({busqueda}) => {
    return (
        <>
        <div>
  <section className="Form">
    <h4>Formulario</h4>
    <input className="control" type="text" name="Nombre" placeholder="ingrese su nombre" />
    <input className="control" type="text" name="Apellido" placeholder="ingrese su Apellido" />
    <input className="control" type="email" name="correo" placeholder="ingrese su correo" />
    <input className="control" type="password" name="contraseña" placeholder="ingrese su contraseña" />
   <button className='BotonCompra' onClick={() => alerta()} >Reservar Producto</button>

  <p>estoy de acuerdo con <a href="#">terminos y condiciones</a></p>  
  </section>
</div>

                </>
    );
}
const alerta = (swal) => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tu producto fue reservado en breve nos contactamos',
    showConfirmButton: false,
    timer: 1500
  })
};
 

export default Form;
