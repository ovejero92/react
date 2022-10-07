import React from 'react';
import Form from '../layouts/form';
import Dropdow from '../layouts/Dropdow';
import Secciones from '../layouts/Secciones';
const Navbar = () => {
   const listDrowdon = ["Hombres", "Mujeres", "Niños", "Bebes"]
    return (
        <>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">

    
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <Secciones/>
        <Dropdow lista={listDrowdon}/>
      </ul>
     <Form busqueda='buscar producto'/>
    </div>
  </div>
</nav>

        </>
    );
}

export default Navbar;
