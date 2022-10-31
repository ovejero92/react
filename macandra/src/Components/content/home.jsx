import React, {useState, useEffect, useContext} from 'react';
import { getProductos } from '../../utils/firebase';
import { DarkModeContext } from '../../context/darkModeContext';
import { Link } from 'react-router-dom'



const Home = () => {
    const [Productos, setProductos] = useState([]);

    const { darkMode} = useContext(DarkModeContext);
    useEffect(() => {
        
      getProductos().then(Productos => { 
        const cardProduto = Productos.map(Producto =>
          <div className="card cardProducto" key={Producto[0]} >
  <img src={Producto[1].img} className="card-img-top" alt={Producto.nombre}/>
  <div className="card-body">
  <h5 className="card-title">{Producto[1].nombre}</h5>
  <p className="card-text">{Producto[1].nombre}</p>
  <p className="card-text">Precio: ${Producto[1].precio}</p>
  <p className="card-text">Stock:{Producto[1].stock}</p>
  <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${Producto[0]}`}>Ver producto</Link></button>
  </div>
  </div>)
        
        setProductos(cardProduto)
      })
    }, []);

    return (
        <div className={darkMode ? 'darkMode row' : 'row'}>
       
          {Productos}  
        </div>
    );
}

export default Home;
