import React from "react";
import { useState, useEffect } from "react";

function Tercero () {

    const [recursos, setRecursos] = useState([]);

    

    useEffect(()=>{

    let controller = new AbortController();
    let options ={
        method : 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }




        fetch("https://www.dnd5eapi.co/api/", options)
        .then(res=>res.json())
        .then(data => {
            const recursosArray = Object.entries(data).map(([nombre, url]) => ({ nombre, url }));
            setRecursos(recursosArray);
        })
        .catch(error=>console.error('Error fetching Data', error))
        .finally(()=>controller.abort());
        
    },[])

    return (
        <main className="contenedor__tercero">
            <h1>Recursos disponibles:</h1>
            <h2 className="contenedor__terceroBoton">Haz click en los siguientes enlaces &crarr;</h2>
            <ul>
                {recursos.map((recurso,index) => (
                    <li key={index}>
                        <a href={recurso.url}>{recurso.nombre}</a>
                    </li>
                ))}
            </ul>
            <img src="../public/logo.png" alt="Logo Dungeons and Dragons" className="contenedor__terceroImagen" />

        </main>
    )

}


export default Tercero;