import React from "react";
import { useState, useEffect } from "react";

function Quinto () {

    const [juegos, setJuegos] = useState ([]);

    

    useEffect(()=>{
    
    let controller = new AbortController();
    let options = {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json'
        },

        signal : controller.signal
    }


        fetch('https://api.rawg.io/api/games?key=4be2ed928e1d42388d5f7aac8db2b987&page_size=100', options)
        .then(res=>res.json())
        .then(data=>setJuegos(data.results))
        .catch(error => console.error("Error fetching data: ", error))
        .finally(()=>controller.abort());

    },[]);


    return(
        
        <main className="contenedor__quinto">
            {juegos.map((juego,index)=>{
                return <div key={index} className="contenedor__quintoCard">
                    <h2 className="contenedor__quintoTitulo">{juego.name}</h2>
                    <img src={juego.background_image} alt={juego.name} width={200} height={200}/>
                    <p className="contenedor__quintoTexto">Rating: {juego.rating}⭐ <br /> Released: {juego.released}</p>


                </div>


            })}
        </main>
    )


}

export default Quinto;