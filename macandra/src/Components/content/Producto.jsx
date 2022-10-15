import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Producto = () => {
  const [producto, setProducto] = useState([]);
  const {id} = useParams()
  useEffect(() => {
     fetch('../json/producto.json')
     .then(response => response.json())
     .then(productos =>  {
           const producto1 = productos.find(productoArray => productoArray.id == id)
           console.log(producto1)
          })
  }, [])
    return (
        <>
       <h1>Producto</h1>
        </>
    );
}

export default Producto;
