import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '../styles/App.css'
import Navbar from './content/Navbar';
import Carrito from './content/Carrito';
import Home from './content/Home';
import Producto from './content/Producto';
import DetalleProducto from './content/DetalleProducto';
import Contacto from './content/Contacto';
import About from './content/about';

const App = () => {
    return (

     <>
   <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path="/" elemento={<Home/>} />
        <Route path="/Producto" elemento={<Producto/>} />
        <Route path="/about" elemento={<About/>} />
        <Route path="/contato" elemento={<Contacto/>} />
        <Route path="/Carrito" elemento={<Carrito/>} />
     </Routes>
   </BrowserRouter>
        </>
    );
}

export default App;
