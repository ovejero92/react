import {createProducto, updateProducto, getProducto, createOrdenCompra, getOrdenCompra , deleteProducto} from './firebase.js';



const producto = {
    "nombre":"Birra roja", 
    "precio": 380, 
    "stock": 60,
    "idCategoria": 1,
    "img":"https://firebasestorage.googleapis.com/v0/b/react-34755-2022-8b29e.appspot.com/o/imagenes%2Fbirra%20roja.jpg?alt=media&token=23b574ca-83a7-4d01-8c62-c723c415bd6b"
    
}
/* createProducto(producto).then(estado => console.log(estado))

 getProducto("yKnrG28mF1SDOKim9Y9r").then(producto => {
     const prod = producto[1]
     prod.stock -= 5
 updateProducto("yKnrG28mF1SDOKim9Y9r", prod)
 })

 deleteProducto("yKnrG28mF1SDOKim9Y9r").then(estado => {
console.log(estado)
 })
createOrdenCompra(120000, "pepito", "perez", "p@p.com", 123123, "calle falsa123").then(orden =>  {
    console.log(orden)
})*/
getOrdenCompra("PxVbyosQ6lG6ULNJXkga").then(orden => {
    console.log(orden.id)
})