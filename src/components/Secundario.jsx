import React from "react";
import { useState,useEffect } from "react";

function Secundario () {

    const [usuarios, setUsuarios] = useState([]);

   


    useEffect(()=>{
    
    let controller = new AbortController();
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

        signal : controller.signal
    } 





    fetch('https://randomuser.me/api/', options)
    .then(res=>res.json())
    .then(data=> setUsuarios(data.results))
    .catch(error => console.error("Error fetching data: ", error))
    .finally(()=>controller.abort());

  
    },[]);
   
    

    return (
        <main className="seccion__secundaria">
            {usuarios.map((usuario,index)=>{
                return <div key={index} className="contenedor__secundario">

                    <h2>{usuario.name.title} {usuario.name.first} {usuario.name.last}</h2>
                    <p>Age: {usuario.registered.age}</p>
                    <p>City: {usuario.location.city} <br />State: {usuario.location.state}</p>
                    <p>Phone Number: {usuario.phone} <br /> Email: {usuario.email}</p>
                    <img src={usuario.picture.large} alt="Imagen de la persona" />

                </div>
                
                
            })}
        </main>
    );
}


export default Secundario;