import React from "react";
import { useState, useEffect } from "react";

function Principal () {

    const [producto, setProducto] = useState([]);


    useEffect(()=>{


    let controller = new AbortController();
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

        signal : controller.signal
    } 


    fetch('https://fakestoreapi.com/products', options)
    .then(res=>res.json())
    .then(data=> setProducto(data))
    .catch(error => console.error("Error fetching data: ", error))
    .finally(()=> controller.abort());

  
    },[]);
   
    

    return (
        <main className="contenedor__grid">
            {producto.map((product,index)=>{
                return <div key={index} className="contenedor__principal">
                <div className="contenedor__principalCard">
                    <img src={product.image} alt="imagen del producto" className="contenedor__principalImagenes"/>
                    <h2 className="contenedor__principalTitulo">{product.title}</h2>
                    <button type="button" className="contenedor__principalBoton">Buy | {product.price}$</button>

                </div>
            </div>
            })}
        </main>
    );
}


export default Principal;