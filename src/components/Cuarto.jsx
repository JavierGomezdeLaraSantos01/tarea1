import React from "react";
import { useState, useEffect } from "react";



function Cuarto() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        let controller = new AbortController();
        let opciones = {
            method: 'GET',
            headers :{
                'Content-Type': 'application/json'
            },

            signal : controller.signal
        }


        fetch('https://pokeapi.co/api/v2/pokemon?limit=0')
            .then(response => response.json())
            .then(data => setPokemons(data.results))
            .catch(error=>console.error('Error Fetching Data', error))
            .finally(()=>controller.abort());
            
    }, []);



    return(

        <main className="contenedor__cuarto">

            <h1 className="contenedor__cuartoTitulo">PokeApi Gallery :</h1>
            {pokemons.map((pokemon, index)=>{
                return (
                    <div key={index}>
                        <div className="contenedor__cuartoCard">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} className="contenedor__cuartoImagenes"/>                    
                        <hr />
                        <p className="contenedor__cuartoNombre">{pokemon.name}</p>
                        </div>
                        

                    </div>
                )
                
            })}
            
        </main>
    )

   
}

export default Cuarto;
