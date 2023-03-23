import React from 'react'
import { useState } from 'react'
import './App.css'

function Practica(){

      const [curso, setCurso] = useState("Curso de React JS");
      const [software, setSoftware] = useState("Software: Visual Studio Code");
      const [descripcion, setDescripcion] = useState("Un curso rápido sobre las bases de React");
      const [image, setImage] = useState("../public/Images/car.jpg");

      const CambiarCurso = (e) => {
        e.preventDefault();
        const valueinput = e.target.previousSibling.value;
        setCurso(valueinput)

       e.target.previousSibling.value = ''; 
    }

    const CambiarSoftware = (e) => {
        e.preventDefault();
        const valueinput = e.target.previousSibling.value;
        setSoftware(valueinput)

       e.target.previousSibling.value = ''; 
    }

    const CambiarDescripcion = (e) => {
        e.preventDefault();
        const valueinput = e.target.previousSibling.value;
        setDescripcion(valueinput)

       e.target.previousSibling.value = ''; 
    }

    const CambiarImagen = (e) => {
        setImage(e.target.src);
        console.log(e.target.src)
    }

    return(
    <section className='principal'>
        <div className='row vh-100'>
        <div className="col-12 col-lg-6 fondo1 d-flex justify-content-start align-items-center text-white" style={{background: `url(${image}) center/cover` }}>
                <div className='ms-4 contenido1'>
                <h1>{curso}</h1>
                <h3>{software}</h3>
                <p>{descripcion}</p> 
                <button>¡Inscribete!</button>                     
                </div>                                                
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                    <form action="">
                        <div>
                            <input className='form-control pad mt-3' classtype="text" placeholder='Nombre del curso'/>
                            <button className='my-1' onClick={CambiarCurso}>Actualizar</button>                            
                        </div>
                        <div>
                            <input className='form-control pad mt-3'  type="text"placeholder='Software' />
                            <button className='my-1' onClick={CambiarSoftware}>Actualizar</button>                              
                        </div>
                        <div>
                            <textarea className='form-control pad mt-3'  id="descripcion" cols="30" rows="3" placeholder='Descripción'></textarea>
                            <button className='my-1' onClick={CambiarDescripcion}>Actualizar</button>                               
                        </div>
                        <div>
                        <h4 className='mt-3'>Nueva imagen:</h4>
                        <img className='m-1' onClick={CambiarImagen} src='../public/Images/car.jpg' width="60" height="40"/>
	                    <img className='m-1' onClick={CambiarImagen} src=  '../public/Images/K6Rz.gif' width="60" height="40"/>
	                    <img className='m-1' onClick={CambiarImagen} src='../public/Images/film.jpg' width="60" height="40"/>
	                    <img className='m-1' onClick={CambiarImagen} src='../public/Images/3d.jpg' width="60" height="40"/>   
                        </div>                          
                    </form>
            </div>
            </div>    
    </section>

    )
}
export default Practica