import React from 'react'
import { useState } from "react";

function Juego(){
    let opc =  ['Piedra', 'Papel', 'Tijera'];

    const [human, setHuman] = useState('')
    const [robot, setRobot] = useState('');

    let juegoMaquina = () => {
        let randomOpcMaquina = Math.round( Math.random()*(opc.length-1) );
        setRobot(opc[randomOpcMaquina])
    }
    let juegoHuman = (e) =>{
        setHuman(e.target.innerText)
        juegoMaquina();
    }
    function ganador(){
        if (human==='Piedra' && robot==='Tijera') {
            alert('Gana Humano') 
        }else if (human==='Tijera'&& robot==='Papel') {
            alert ('Gana Humano')
        }else if (human==='Papel'&& robot==='Piedra') {
            alert('Gana Humano')
        } else if (human===robot) {
            alert('Empate')
        } 
        else{
            alert ('Gano Robot')
        }

    }
    return(
        <div className="pantalla">
            <div>
                <h4>Human</h4>
                <h1 style={{color: 'violet'}}>{human}</h1>
            </div>
            <div>
                <h4>Robot</h4>
                <h1>{robot}</h1>
            </div>
            <div>
                <button onClick={juegoHuman}>Piedra</button>
                <button onClick={juegoHuman}>Papel</button>
                <button onClick={juegoHuman}>Tijera</button>
                <button onClick={ganador}>Guardar</button>
            </div>
        </div>
    )
}
export default Juego