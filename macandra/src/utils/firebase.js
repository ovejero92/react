import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-34755-2022-8b29e.firebaseapp.com",
  projectId: "react-34755-2022-8b29e",
  storageBucket: "react-34755-2022-8b29e.appspot.com",
  messagingSenderId: "749332209145",
  appId: "1:749332209145:web:68ec13d19ae1c8b289f128"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
const promise = await fetch('./json/productos.json')
const productos = await promise.json()
productos.forEach(async (producto) => {
await addDoc(collection(db,"productos"), {
    categoria: producto.idCategoria,
    nombre: producto.nombre,
    precio: producto.precio,
    stock: producto.stock,
    img: producto.img,
})
}) 
}
const getProducto = async (id) => {
const producto = await getDoc(doc(db, "productos", id))
const prod = [producto.id, producto.data()]
return prod
}
const getProductos = async () => {
    const productos = await getDocs(collection(db,"productos"))
    const items = productos.docs.map(Producto => [Producto.id, Producto.data()])
    return items
}

const updateProducto = async (id, info) => {
const estado = await updateDoc(doc(db, "productos", id), info)
return estado
}

const deleteProducto = async(id) => {
const estado = await deleteDoc(doc(db, "productos", id))
return estado
}

const createProducto = async (objProd) => {
    const estado = await addDoc(collection(db, "productos"), {
        categoria: objProd.idCategoria,
        nombre: objProd.nombre,
        precio: objProd.precio,
        stock: objProd.stock,
        img: objProd.img,
    })
    return estado
}
const createOrdenCompra = async (preTotal, nombre, apellido, email, dni, direccion) => {
const ordenCompra = await addDoc(collection(db,"ordenCompra"), {
    nombre: nombre,
    apellido: apellido,
    email: email,
    dni: dni,
    dirccion: direccion,
    precioTotal: preTotal
})
return ordenCompra
}
const getOrdenCompra =  async (id)  => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    return ordenCompra 
}
export {cargarBaseDeDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto, createOrdenCompra , getOrdenCompra}