import React, {useState, useEffect} from 'react';

const Home = () => {
    const [Productos, setProductos] = useState([]);
    useEffect(() => {
        const consultarBDD = async () => {
        const response = await fetch('./json/productos.json')
        const productos = await response.json()
        const cardProduto = productos.map(producto =>
            <div className="card cardProducto" key={producto.id} >
  <img src={producto.img} className="card-img-top" alt={producto.nombre}/>
  <div className="card-body">
    <h5 className="card-title">{producto.nombre}</h5>
    <p className="card-text">{producto.nombre}</p>
    <p className="card-text">Precio: ${producto.precio}</p>
    <p className="card-text">Stock:{producto.stock}</p>
    <button className='btn btn-dark'>ver producto</button>
  </div>
</div>)
return cardProduto
}
      consultarBDD() .then(producto => setProductos(producto))
    }, []);
    return (
        <div className='row'>
          {Productos}  
        </div>
    );
}

export default Home;
