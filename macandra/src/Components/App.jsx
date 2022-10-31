import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '../styles/App.css'
import { DarkModeProvider } from '../context/darkModeContext';
import Navbar from './content/Navbar';
import Carrito from './content/Carrito';
import Home from './content/Home';
import About from './content/about';
import Contacto from './content/Contacto';
import Producto from './content/Producto';
import Footer from './content/Footer';
import Categoria from './content/Categoria';
import Form from './layouts/form';

const App = () => {
    return (
     <>
     <DarkModeProvider>
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/Producto/:id' element={<Producto/>} />
       <Route path='/categoria/:id' element={<Categoria/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/contacto' element={<Contacto/>} />
       <Route path='/carrito' element={<Carrito/>} />
       <Route path='/form' element={<Form/>} />
       <Route path='*' element={<h1>Error404</h1>} />
     </Routes>
     
   </BrowserRouter>
   <Footer/>
     </DarkModeProvider>
   </>
    );
}  

export default App;
