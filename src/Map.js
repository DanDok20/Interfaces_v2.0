import React from "react";
import './components/Map.css'



function Map(props) {
    return (
        <div className="card text-center" >

            <div className="overflow">
                <a href={props.url} target="_blank"><img src ={props.imageSource} alt="Imagen" className="card-img-top"/></a>
            </div>
            
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
            </div>
        </div>
    )
}

export default Map