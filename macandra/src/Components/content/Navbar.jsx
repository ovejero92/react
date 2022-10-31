import React from 'react';
import Form from '../layouts/form';
import Dropdow from '../layouts/Dropdow';
import Secciones from '../layouts/Secciones';
import { Link } from 'react-router-dom';
const Navbar = () => {
   const listDrowdon = ["bebidas", "snacks", "chocolates",]
    return (
        <>
          <header className="header__contenedor">
  <div className="stile">
    <h1>Distri India</h1>
    <nav className="nav">
      <ul>
        <Secciones/>
        <Dropdow lista={listDrowdon}/>
        <Link className="nav-link" to='carrito'><button className='btn btn-dark'><i class="fa-solid fa-cart-shopping"></i></button><span className='cantidad-carrito'></span></Link>
      </ul>
    </nav>
    <i className="bx bx-menu" />
  </div>
</header>

        </>
    );
}

export default Navbar;
