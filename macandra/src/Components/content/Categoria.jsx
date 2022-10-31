import {useState, useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../utils/funciones';
import { DarkModeContext } from '../../context/darkModeContext';

const Categoria = () => {
    const [productos, setProducto] = useState([]);
    const {id} = useParams()
    const { darkMode} = useContext(DarkModeContext);

    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const productoCategoria = productos.filter(producto => producto.idCategoria == id)
            const cardProduto = productoCategoria.map(Producto =>
                <div className="card cardProducto" key={Producto.id} >
        <img src={Producto.img} className="card-img-top" alt={Producto.nombre}/>
        <div className="card-body">
        <h5 className="card-title">{Producto.nombre}</h5>
        <p className="card-text">{Producto.nombre}</p>
        <p className="card-text">Precio: ${Producto.precio}</p>
        <p className="card-text">Stock:{Producto.stock}</p>
        <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${Producto.id}`}>Ver producto</Link></button>
        </div>
        </div>)
              
              setProducto(cardProduto)
        })
    }, [id]);
    return (
        <div className={darkMode ? 'darkMode row' : 'row'}>
      
        {productos}  
      </div>
    );
}

export default Categoria;
