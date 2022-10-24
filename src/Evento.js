import React from "react";
import './components/Evento.css'



function Evento(props) {
    return (
        <div className="card text-center" >

            <div className="overflow">
                <a href={props.url} target="_blank"><img src ={props.imageSource} alt="Imagen" className="card-img-top"/></a>
            </div>
            
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text"> {props.text} </p>
            </div>
        </div>
    )
}

export default Evento