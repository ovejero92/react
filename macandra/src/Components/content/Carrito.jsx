import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { mostrarCarrito } from '../../utils/funciones';
import Form from '../layouts/form';
const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);
    useEffect(() => {
        const prodMostrar = carrito.map(producto => 
            <section>
                   <div className='modal-container' style={{display: "flex"}}>  
         <div className="modal-header" key={producto.id} >
               <h1 className="modal-header-title">Carrito</h1>
                <button className='modal-header-button'>X</button></div>   
            <div className="modal-content row" >
            <img src={producto.img} alt={producto.nombre}/> 
         
            <h5 >{producto.nombre}</h5>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <button className='btn btn-dark' onClick={() => quitarProducto(producto)} >Eliminar</button>
            </div>
            <div className="total-content">
                <h2>Total =  ${producto.precio * producto.cantidad}</h2>
                <Link className="nav-link" to={`/form`}><button className='btn btn-dark'>Comprar</button><span className='cantidad-carrito'></span></Link>
            </div>
            </div>  
          
            </section>
     
            )
        setCarritoLocal(prodMostrar)
       

    }, [carrito]);
 
    
   const app = (carrito.lenght != 0) ? <div> {carritoLocal}</div>:<> <h1>No existen elementos en el carrito</h1></>
  return app
}


export default Carrito;
