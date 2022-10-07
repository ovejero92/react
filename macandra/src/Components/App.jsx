import React from 'react';
import Navbar from './content/Navbar';
import Contador from './layouts/Contador';
import '../styles/App.css'
import Home from './content/home';
const App = () => {
    return (

     <>
     <Navbar />
     
     <Contador/>
     <Home/>
        </>
    );
}

export default App;
